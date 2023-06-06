import { FunctionComponent } from "react";
import { RoughNotation } from "react-rough-notation";
import { Typography } from "@/components/ui";

const IntroductionText: FunctionComponent = () => {
  return (
    <div className="mb-8">
      <Typography.H2 className="mb-4">Hello, there!</Typography.H2>
      <Typography.Paragraph>
        I&apos;m Alvaro, a developer based in Buenos Aires, Argentina. With over 4 years
        ofexperience in web development, I specialize in{" "}
        <RoughNotation type="highlight" color="#0ea5e9" show>
          front-end
        </RoughNotation>{" "}
        development while also having a solid background in back-end technologies.
      </Typography.Paragraph>
      <Typography.Paragraph>
        I&apos;m passionate about modern web architectures, building{" "}
        <RoughNotation type="box" color="#ec4899" show>
          user-friendly
        </RoughNotation>{" "}
        and simple digital products. I believe in writing{" "}
        <RoughNotation type="underline" color="#f59e0b" show>
          clean and efficient code
        </RoughNotation>{" "}
        that&apos;s easy to{" "}
        <RoughNotation type="circle" color="#14b8a6" show>
          maintain and scale
        </RoughNotation>
        .
      </Typography.Paragraph>
      <Typography.Paragraph>
        I specialize in working with technologies such as{" "}
        <RoughNotation type="underline" color="#84cc16" show>
          React, TypeScript, Next, React Query, Styled Components, Tailwind and Node
        </RoughNotation>
        , among others. I am always willing to learn and stay up-to-date with the latest trends
        and technologies.
      </Typography.Paragraph>
      <Typography.Paragraph>
        I&apos;ll be sharing some of my personal projects and publishing articles about topics
        that interest me and things I&apos;ve learned throughout my career.
      </Typography.Paragraph>
      <Typography.Paragraph>
        I&apos; m currently looking for a new role as a front end developer.{" "}
        <RoughNotation type="circle" color="#6366f1" show>
          Hire me?
        </RoughNotation>
      </Typography.Paragraph>
    </div>
  );
};

export { IntroductionText };
