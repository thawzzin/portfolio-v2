import * as PhosphorIcons from "@phosphor-icons/react/ssr";

type IconName = keyof typeof PhosphorIcons;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export function IconButton({ name, size = 24, color = "currentColor" }: IconProps) {
  const PhosphorIcon = PhosphorIcons[name];
  if (!PhosphorIcon) {
    return null; // fallback if icon not found
  }
  return <PhosphorIcon size={size} color={color} weights={new Map()} />;
}
