import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    if (!req) {
      throw new Error("Invalid request object");
    }

    const { phoneNumber, password } = await req.json();

    const user = await prisma.user.findFirst({ where: { phoneNumber } });

    if (!user) {
      return new Response("Invalid credentials ", { status: 400 });
    }

    if (user.password != password) {
      return new Response("Invalid credentials", { status: 400 });
    }

    return NextResponse.json({
      user: user,
      access_token:
        "276a8c95ee9812fceefaab285e905c60e1aa6c19845bdd20e9b1894cf1f3b290",
    });
  } catch (error: any) {
    return NextResponse.json({ error: "something wrong" });
  }
}
