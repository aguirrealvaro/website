import { createHash } from "crypto";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

const getSession = () => {
  const headersList = headers();
  const ipAddress = headersList.get("x-forwarded-for") || "0.0.0.0";

  const currentSessionId = createHash("md5")
    .update(ipAddress + (process.env.IP_ADDRESS_SALT || ""), "utf8")
    .digest("hex");

  return currentSessionId;
};

type ParamsType = {
  params: {
    slug: string;
  };
};

export async function GET(_: Request, { params }: ParamsType) {
  const { slug } = params;

  const currentSessionId = getSession();

  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) {
    return NextResponse.json({ error: "Post does not exists" }, { status: 401 });
  }

  const likes = await prisma.likes.findMany({
    where: { postId: post.id, sessionId: currentSessionId },
  });

  const userHasLiked = likes.length > 0;

  return NextResponse.json(userHasLiked);
}

export async function POST(_: Request, { params }: ParamsType) {
  const currentSessionId = getSession();

  const { slug } = params;

  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) {
    return NextResponse.json({ error: "Post does not exists" }, { status: 401 });
  }

  const like = await prisma.likes.findFirst({
    where: { sessionId: currentSessionId, postId: post.id },
  });

  if (like) {
    const deletedLike = await prisma.likes.delete({
      where: { id: like.id },
    });

    return NextResponse.json(deletedLike);
  }

  const newLike = await prisma.likes.create({
    data: {
      sessionId: currentSessionId,
      postId: post.id,
    },
  });

  return NextResponse.json(newLike);
}
