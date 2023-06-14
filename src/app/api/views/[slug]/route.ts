import { NextResponse } from "next/server";
import { getSession } from "@/utils/get-session";
import prisma from "@/utils/prisma";

type ParamsType = {
  params: {
    slug: string;
  };
};

export async function POST(_: Request, { params }: ParamsType) {
  const currentSessionId = getSession();

  const { slug } = params;

  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) {
    return NextResponse.json({ error: "Post does not exists" }, { status: 401 });
  }

  const newView = await prisma.views.create({
    data: {
      sessionId: currentSessionId,
      postId: post.id,
    },
  });

  return NextResponse.json(newView);
}
