import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    let heroSetting = await prisma.heroSetting.findUnique({
      where: { id: 'singleton' }
    });

    if (!heroSetting) {
      heroSetting = await prisma.heroSetting.create({
        data: {
          id: 'singleton',
          heading1Ru: 'Привет! Я',
          heading1En: 'Hello! I am',
          heading2Ru: 'Фронтенд Разработчик',
          heading2En: 'Frontend Developer',
          heading3Ru: 'Создаю красивые и удобные интерфейсы',
          heading3En: 'Building beautiful and user-friendly interfaces',
          descRu: 'Я специализируюсь на React, TypeScript и современных технологиях.',
          descEn: 'I specialize in React, TypeScript, and modern web technologies.',
          badges: ['React', 'TypeScript', 'Tailwind', 'Next.js']
        }
      });
    }

    return NextResponse.json(heroSetting);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch hero settings' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const heroSetting = await prisma.heroSetting.update({
      where: { id: 'singleton' },
      data: {
        heading1Ru: body.heading1Ru,
        heading1En: body.heading1En,
        heading2Ru: body.heading2Ru,
        heading2En: body.heading2En,
        heading3Ru: body.heading3Ru,
        heading3En: body.heading3En,
        descRu: body.descRu,
        descEn: body.descEn,
        badges: body.badges,
      }
    });
    return NextResponse.json(heroSetting);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update hero settings' }, { status: 500 });
  }
}
