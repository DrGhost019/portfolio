require('dotenv').config({ path: '.env.local' });
const https = require('https');

const BOT_TOKEN = process.env.BALE_BOT_TOKEN;
const CHAT_ID = process.env.BALE_CHAT_ID;
const ADMIN_SECRET = process.env.ADMIN_SECRET;
const API_URL = 'http://localhost:3000/api/admin/update-status';

let lastUpdateId = 0;

function baleRequest(method, data = {}) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(data);
    const options = {
      hostname: 'tapi.bale.ai',
      path: `/bot${BOT_TOKEN}/${method}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function updateSiteStatus(status) {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status, secret: ADMIN_SECRET }),
    });
    const data = await res.json();
    return data.success;
  } catch (error) {
    console.error('Failed to update site:', error);
    return false;
  }
}

async function startPolling() {
  console.log('🤖 Admin Bot is running... Waiting for commands in Bale.');

  while (true) {
    try {
      const response = await baleRequest('getUpdates', {
        offset: lastUpdateId + 1,
        timeout: 30,
      });

      if (response.ok && response.result.length > 0) {
        for (const update of response.result) {
          lastUpdateId = update.update_id;

          if (
            update.message &&
            update.message.text === '/status' &&
            update.message.chat.id.toString() === CHAT_ID
          ) {
            await baleRequest('sendMessage', {
              chat_id: CHAT_ID,
              text: 'Choose your current availability status:',
              reply_markup: {
                inline_keyboard: [
                  [
                    { text: '🟢 Open to Work', callback_data: 'open' },
                    { text: '🟡 Working on Project', callback_data: 'busy' },
                  ],
                  [{ text: '🔴 Not Available', callback_data: 'closed' }],
                ],
              },
            });
          }

          if (update.callback_query && update.callback_query.from.id.toString() === CHAT_ID) {
            const status = update.callback_query.data;
            const messageId = update.callback_query.message.message_id;

            await baleRequest('answerCallbackQuery', {
              callback_query_id: update.callback_query.id,
              text: 'Updating website...',
            });

            const success = await updateSiteStatus(status);

            if (success) {
              const statusEmojis = { open: '🟢', busy: '🟡', closed: '🔴' };
              const statusTexts = {
                open: 'Open to Work',
                busy: 'Working on a Project',
                closed: 'Not Available',
              };

              await baleRequest('editMessageText', {
                chat_id: CHAT_ID,
                message_id: messageId,
                text: `✅ Status updated successfully!\n\nCurrent Status: ${statusEmojis[status]} ${statusTexts[status]}`,
              });
            } else {
              await baleRequest('answerCallbackQuery', {
                callback_query_id: update.callback_query.id,
                text: 'Failed to update. Check terminal.',
                show_alert: true,
              });
            }
          }
        }
      }
    } catch (error) {
      console.error('Polling error:', error.message);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

startPolling();
