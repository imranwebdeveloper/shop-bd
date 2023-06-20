import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../prisma.db";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const phone: any = await prisma.phone.findFirst({
    where: { model_id: params.id },
  });
  if (!phone) {
    return NextResponse.error();
  }

  return NextResponse.json(phone);
}
