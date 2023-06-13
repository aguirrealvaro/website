import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET() {
  const views = await prisma.view.findMany();

  return NextResponse.json(views, { status: 400 });
}
