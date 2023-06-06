import { FunctionComponent } from "react";
import Image from "next/image";
import { Typography, buttonVariants } from "@/components/ui";
import { cn } from "@/utils/cn";

type SingleProjectType = {
  title: string;
  description: string;
};

const SingleProject: FunctionComponent<SingleProjectType> = ({ title, description }) => {
  return (
    <div>
      <Image
        src="/components.webp"
        alt="UI Kit picture"
        width={600}
        height={300}
        className="mb-4 rounded shadow-lg"
      />
      <Typography.H4>{title}</Typography.H4>
      <Typography.Paragraph>{description}</Typography.Paragraph>
      <div className="flex gap-4">
        <a
          href="https://ui-kit7.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants())}
        >
          View Project
        </a>
        <a
          href="https://github.com/aguirrealvaro/ui-kit"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outlined" }))}
        >
          View Source Code
        </a>
      </div>
    </div>
  );
};

export { SingleProject };
