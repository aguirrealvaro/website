import { FunctionComponent, ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer: FunctionComponent<PageContainerProps> = ({ children }) => {
  return <div className="mt-8">{children}</div>;
};

export { PageContainer };
