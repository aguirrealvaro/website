import { createHash } from "crypto";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET(request: NextApiRequest) {
  const ipAddress = request.headers["x-forwarded-for"] || "0.0.0.0";

  const currentUserId = createHash("md5")
    .update(ipAddress + (process.env.IP_ADDRESS_SALT || ""), "utf8")
    .digest("hex");

  const sessions = await prisma.session.findMany();

  return NextResponse.json({ ipAddress, currentUserId, sessions });
}
