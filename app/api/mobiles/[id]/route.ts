import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../prisma.db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const model_id = searchParams.get("id");

  console.log(model_id);
  //   const phones = await prisma.phone.findMany({
  //     select: {
  //       id: true,
  //       brand: true,
  //       model: true,
  //       variants: true,
  //       img_url: true,
  //       updatedAt: true,
  //       model_id: true,
  //       status: true,
  //       title: true,
  //     },
  //     take: 12,
  //   });
  return NextResponse.json({});
}
