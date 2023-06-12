import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET(request: NextApiRequest) {
  const ipAddress = request.headers["x-forwarded-for"] || "0.0.0.0";

  const sessions = await prisma.session.findMany();
  return NextResponse.json({ ipAddress, sessions });
}
