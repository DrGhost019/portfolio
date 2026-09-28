import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { status, secret } = body;

    if (secret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized: Invalid secret' }, { status: 401 });
    }

    const allowedStatuses = ['open', 'busy', 'closed'];
    if (!status || !allowedStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status value' }, { status: 400 });
    }

    const gistId = process.env.GIST_ID;
    const fileName = process.env.GIST_FILENAME;
    const token = process.env.GITHUB_TOKEN;

    if (!gistId || !fileName || !token) {
      console.error('❌ Missing Gist ID, Filename, or Token in .env.local');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const githubApiUrl = `https://api.github.com/gists/${gistId}`;

    const response = await fetch(githubApiUrl, {
      method: 'PATCH',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        files: {
          [fileName]: {
            content: JSON.stringify({ status }, null, 2)
          }
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ GitHub API rejected the request.');
      console.error('Status Code:', response.status);
      console.error('Error Body:', errorText);
      throw new Error(`Failed to update GitHub Gist: ${response.status}`);
    }

    revalidatePath('/');

    return NextResponse.json({ 
      success: true, 
      message: 'Status updated successfully', 
      newStatus: status 
    });

  } catch (error) {
    console.error('Admin API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}