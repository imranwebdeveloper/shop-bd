import { NextResponse, NextRequest } from "next/server";
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
    take: 16,
    orderBy: {
      updatedAt: "desc",
    },
  });
  return NextResponse.json(phones);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const productsId = body.id;
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
    where: {
      id: {
        in: productsId,
      },
    },
  });
  return NextResponse.json(phones);
}
