
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

type IconName = keyof typeof LucideIcons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  fallback?: IconName;
  className?: string;
}

const iconVariants = cva("", {
  variants: {
    variant: {
      default: "",
      solid: "fill-current",
      outline: "stroke-current fill-none",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    {
      name,
      size = 20,
      color,
      strokeWidth = 2,
      fallback = "CircleAlert",
      className,
      ...props
    },
    ref
  ) => {
    const LucideIcon = LucideIcons[name] || LucideIcons[fallback];

    return (
      <LucideIcon
        ref={ref}
        size={size}
        strokeWidth={strokeWidth}
        className={cn(iconVariants(), className)}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";

export { Icon, type IconProps, type IconName };
export default Icon;
