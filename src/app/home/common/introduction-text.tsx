import { FunctionComponent } from "react";
import { Typography } from "@/components/ui";

const IntroductionText: FunctionComponent = () => {
  return (
    <div className="mb-8">
      <Typography.H2 className="mb-4">Hello, there!</Typography.H2>
      <Typography.Paragraph>
        I&apos;m Alvaro, a developer based in Buenos Aires, Argentina. With over 4 years
        ofexperience in web development, I specialize in front-end development while also
        having a solid background in back-end technologies.
      </Typography.Paragraph>
      <Typography.Paragraph>
        I&apos;m passionate about modern web architectures, building user-friendly and simple
        digital products. I believe in writing clean and efficient code that&apos;s easy to
        maintain and scale.
      </Typography.Paragraph>
      <Typography.Paragraph>
        I specialize in working with technologies such as React, TypeScript, Next, React Query,
        Styled Components, Tailwind and Node, among others. I am always willing to learn and
        stay up-to-date with the latest trends and technologies.
      </Typography.Paragraph>
      <Typography.Paragraph>
        I&apos;ll be sharing some of my personal projects and publishing articles about topics
        that interest me and things I&apos;ve learned throughout my career.
      </Typography.Paragraph>
      <Typography.Paragraph>
        I&apos; m currently looking for a new role as a front end developer. Hire me?
      </Typography.Paragraph>
    </div>
  );
};

export { IntroductionText };
