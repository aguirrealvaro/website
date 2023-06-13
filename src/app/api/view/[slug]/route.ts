import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

type ParamsType = {
  params: {
    slug: string;
  };
};

export async function GET(_: Request, { params }: ParamsType) {
  const { slug } = params;

  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) {
    return NextResponse.json({ error: "Post does not exists" }, { status: 401 });
  }

  const views = await prisma.view.findMany({ where: { postId: post.id } });

  return NextResponse.json(views);
}

export async function POST(_: Request, { params }: ParamsType) {
  const { slug } = params;

  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) {
    return NextResponse.json({ error: "Post does not exists" }, { status: 401 });
  }

  const newView = await prisma.view.create({
    data: {
      sessionId: "29eea006b596b70a382bfddc9ed2467e",
      postId: post.id,
    },
  });

  return NextResponse.json(newView);
}
