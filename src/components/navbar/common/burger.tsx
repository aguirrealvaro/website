import { ButtonHTMLAttributes, FunctionComponent } from "react";
import { Menu, X } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { IconButton } from "@/components/ui/icon-button";

type BurgerProps = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Burger: FunctionComponent<BurgerProps> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  ...restProps
}) => {
  const icon = isMobileMenuOpen ? X : Menu;

  return (
    <div className="hidden sm:block">
      <IconButton onClick={toggleMobileMenu} {...restProps}>
        <Icon icon={icon} />
      </IconButton>
    </div>
  );
};
