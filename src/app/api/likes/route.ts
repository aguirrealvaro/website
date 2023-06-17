import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET() {
  const likes = await prisma.likes.findMany();

  return NextResponse.json(likes);
}
