import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const social = await prisma.socialLink.update({
      where: { id: params.id },
      data: {
        platform: body.platform,
        url: body.url,
        isActive: body.isActive,
      }
    });
    return NextResponse.json(social);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update social link' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.socialLink.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete social link' }, { status: 500 });
  }
}
