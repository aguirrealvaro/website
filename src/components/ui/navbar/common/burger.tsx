import { FunctionComponent } from "react";
import { Menu } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { IconButton } from "@/components/ui/icon-button";

export const Burger: FunctionComponent = () => {
  return (
    <div className="hidden sm:block">
      <IconButton>
        <Icon icon={Menu} />
      </IconButton>
    </div>
  );
};
