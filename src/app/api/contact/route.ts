import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // 1. Parse the incoming JSON data from the frontend form
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 2. Retrieve Bale credentials from environment variables
    const botToken = process.env.BALE_BOT_TOKEN;
    const chatId = process.env.BALE_CHAT_ID;

    // 3. Validate that credentials exist
    if (!botToken || !chatId) {
      console.error('Missing Bale credentials in .env.local');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // 4. Format the message for Bale
    const text = `
🟢 New Portfolio Contact Message


👤 Name: ${name}

📧 Email: ${email}

📌 Subject: ${subject || 'No Subject'}


💬 Message:
${message}
    `;

    // 5. Construct the Bale API URL (The only major difference from Telegram!)
    const baleUrl = `https://tapi.bale.ai/bot${botToken}/sendMessage`;

    // 6. Send the request to Bale
    const response = await fetch(baleUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    });

    // 7. Handle Bale API errors
    if (!response.ok) {
      const errorData = await response.text();
      console.error('Bale API Error Response:', errorData);
      throw new Error('Failed to send message to Bale');
    }

    // 8. Return success to the frontend
    return NextResponse.json({ success: true, message: 'Message sent successfully' });

  } catch (error) {
    console.error('Contact Form API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}