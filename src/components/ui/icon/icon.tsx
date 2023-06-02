"use client";

import { FunctionComponent, useEffect, useState } from "react";
import { LucideIcon, LucideProps } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  size?: string | number;
  color?: string;
} & LucideProps;

export const Icon: FunctionComponent<IconProps> = ({
  icon: IconComponent,
  size = 20,
  ...restProps
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <IconComponent size={size} {...restProps} />;
};
