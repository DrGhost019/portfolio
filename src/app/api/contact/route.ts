import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const botToken = process.env.BALE_BOT_TOKEN;
    const chatId = process.env.BALE_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Missing Bale credentials in .env.local');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const text = `
🟢 New Portfolio Contact Message


👤 Name: ${name}

📧 Email: ${email}

📌 Subject: ${subject || 'No Subject'}


💬 Message:
${message}
    `;

    const baleUrl = `https://tapi.bale.ai/bot${botToken}/sendMessage`;

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

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Bale API Error Response:', errorData);
      throw new Error('Failed to send message to Bale');
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact Form API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
