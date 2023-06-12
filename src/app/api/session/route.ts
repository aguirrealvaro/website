import { createHash } from "crypto";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET() {
  const sessions = await prisma.session.findMany();

  return NextResponse.json(sessions);
}

export async function POST() {
  //const ipAddress = request.headers["x-forwarded-for"] || "0.0.0.0";

  const headersList = headers();
  const ipAddress = headersList.get("x-forwarded-for") || "0.0.0.0";

  const currentUserId = createHash("md5")
    .update(ipAddress + (process.env.IP_ADDRESS_SALT || ""), "utf8")
    .digest("hex");

  const newSession = await prisma.session.create({
    data: {
      id: currentUserId,
    },
  });

  return NextResponse.json(newSession);
}
