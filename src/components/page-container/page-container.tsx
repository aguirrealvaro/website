import { FunctionComponent, ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer: FunctionComponent<PageContainerProps> = ({ children }) => {
  return <div className="mb-8 mt-28">{children}</div>;
};

export { PageContainer };
