import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
  const ipAddress = request.headers["x-forwarded-for"] || "0.0.0.0";

  return NextResponse.json({ ipAddress });
}
