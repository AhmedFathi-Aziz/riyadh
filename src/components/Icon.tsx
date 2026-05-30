import type { HTMLAttributes } from "react";

type IconProps = HTMLAttributes<HTMLSpanElement> & {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  filled?: boolean;
};

const sizeClass = {
  sm: "text-[20px]",
  md: "text-[24px]",
  lg: "text-[32px]",
  xl: "text-[40px]",
} as const;

/** Material Symbol — always LTR so glyph names render correctly in Arabic pages. */
export function Icon({
  name,
  size = "md",
  filled = false,
  className = "",
  ...props
}: IconProps) {
  return (
    <span
      className={`material-symbols-outlined shrink-0 ${sizeClass[size]} ${
        filled ? "material-symbols-filled" : ""
      } ${className}`}
      aria-hidden={props["aria-hidden"] ?? true}
      {...props}
    >
      {name}
    </span>
  );
}
