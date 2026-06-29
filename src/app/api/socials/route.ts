import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const socials = await prisma.socialLink.findMany({
      orderBy: { updatedAt: 'desc' }
    });
    return NextResponse.json(socials);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch social links' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const social = await prisma.socialLink.create({
      data: {
        platform: body.platform,
        url: body.url,
        isActive: body.isActive,
      }
    });
    return NextResponse.json(social);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create social link' }, { status: 500 });
  }
}
