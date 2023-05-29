import { FunctionComponent, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export const Button: FunctionComponent<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};
