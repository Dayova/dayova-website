import {
  HugeiconsIcon,
  type HugeiconsIconProps,
  type IconSvgElement,
} from "@hugeicons/react";

type DayovaIconProps = Omit<
  HugeiconsIconProps,
  "icon" | "size" | "strokeWidth"
> & {
  icon: IconSvgElement;
  size?: number;
  strokeWidth?: number;
};

export function DayovaIcon({
  icon,
  size = 20,
  strokeWidth = 1.8,
  ...props
}: DayovaIconProps) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
}
