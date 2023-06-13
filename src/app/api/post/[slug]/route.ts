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
      views: true,
      likes: true,
    },
  });

  return NextResponse.json(post);
}
