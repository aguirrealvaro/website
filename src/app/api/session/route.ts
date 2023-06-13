import { NextResponse } from "next/server";
import { getSession } from "@/app/api/utils";
import prisma from "@/utils/prisma";

export async function POST() {
  const currentSessionId = getSession();
  const sessionExists = await prisma.session.findUnique({ where: { id: currentSessionId } });

  if (sessionExists) {
    return NextResponse.json({ error: "Session exists" }, { status: 401 });
  }

  const newSession = await prisma.session.create({
    data: {
      id: currentSessionId,
    },
  });

  return NextResponse.json(newSession);
}
