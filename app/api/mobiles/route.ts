import { NextResponse } from "next/server";
import { prisma } from "../prisma.db";

export async function GET() {
  const phones = await prisma.phone.findMany({
    select: {
      id: true,
      brand: true,
      model: true,
      variants: true,
      img_url: true,
      updatedAt: true,
      model_id: true,
      status: true,
      title: true,
    },
    take: 12,
  });
  return NextResponse.json(phones);
}
