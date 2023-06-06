import { FunctionComponent } from "react";
import Image from "next/image";
import { Typography, buttonVariants } from "@/components/ui";
import { cn } from "@/utils/cn";

type SingleProjectType = {
  title: string;
  description: string;
  image: string;
  projectLink: string;
  codeLink: string;
};

const SingleProject: FunctionComponent<SingleProjectType> = ({
  title,
  description,
  image,
  projectLink,
  codeLink,
}) => {
  return (
    <div>
      <Image
        src={image}
        alt={`${title} Picture`}
        width={600}
        height={300}
        className="mb-4 rounded shadow-lg"
      />
      <Typography.H4>{title}</Typography.H4>
      <Typography.Paragraph>{description}</Typography.Paragraph>
      <div className="flex gap-4">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants())}
        >
          View Project
        </a>
        <a
          href={codeLink}
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
