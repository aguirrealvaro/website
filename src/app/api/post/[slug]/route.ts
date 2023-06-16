import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

type ParamsType = {
  params: {
    slug: string;
  };
};

export async function GET(_: Request, { params }: ParamsType) {
  const { slug } = params;

  const postExist = await prisma.post.findUnique({ where: { slug } });

  if (!postExist) {
    return NextResponse.json({ error: "Post does not exists" }, { status: 401 });
  }

  const post = await prisma.post.findUnique({
    where: {
      id: postExist.id,
    },
    include: {
      likes: true,
    },
  });

  return NextResponse.json(post);
}

export async function PUT(_: Request, { params }: ParamsType) {
  const { slug } = params;

  const postExist = await prisma.post.findUnique({ where: { slug } });

  if (!postExist) {
    return NextResponse.json({ error: "Post does not exists" }, { status: 401 });
  }

  const post = await prisma.post.update({
    where: {
      id: postExist.id,
    },
    data: {
      views: { increment: 1 },
    },
  });

  return NextResponse.json(post);
}
