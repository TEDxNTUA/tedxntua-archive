// src/app/api/proxy-image/route.js

import { NextResponse } from 'next/server';

export async function GET(request) {
  // Extract query parameters from the request URL
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
  }

  const driveUrl = `https://drive.google.com/uc?export=view&id=${id}`;

  try {
    const response = await fetch(driveUrl);
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch image' }, { status: response.status });
    }

    const contentType = response.headers.get('Content-Type') || 'image/jpeg';
    const cacheControl = 'public, max-age=86400';
    const data = await response.arrayBuffer();

    // Set up headers for the response
    const headers = new Headers();
    headers.set('Content-Type', contentType);
    headers.set('Cache-Control', cacheControl);
    headers.set('Access-Control-Allow-Origin', '*');

    return new NextResponse(data, { headers });
  } catch (error) {
    console.error('Error fetching image:', error);
    return NextResponse.json({ error: 'Error fetching the image' }, { status: 500 });
  }
}
