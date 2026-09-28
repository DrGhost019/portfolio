import { NextResponse } from 'next/server';

export async function GET() {
  const gistUrl = process.env.GIST_RAW_URL;

  console.log('🔍 DEBUG: GIST_RAW_URL is:', gistUrl);

  if (!gistUrl) {
    console.error('❌ ERROR: Missing GIST_RAW_URL in .env.local');
    return NextResponse.json({ error: 'Missing Gist URL' }, { status: 500 });
  }

  try {
    const response = await fetch(`${gistUrl}?t=${Date.now()}`, {
      cache: 'no-store',
    });

    console.log('🔍 DEBUG: Gist response status:', response.status);

    if (!response.ok) {
      const text = await response.text();
      console.error('❌ ERROR: Gist fetch failed. Status:', response.status, 'Body:', text);
      return NextResponse.json({ error: 'Failed to fetch from Gist' }, { status: 500 });
    }

    const data = await response.json();
    console.log('✅ DEBUG: Gist data received:', data);

    return NextResponse.json({ status: data.status || 'open' });
  } catch (error) {
    console.error('❌ ERROR: Failed to fetch status from Gist:', error);
    return NextResponse.json({ error: 'Failed to fetch status' }, { status: 500 });
  }
}
