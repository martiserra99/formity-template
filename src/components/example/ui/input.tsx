import { ElementType } from "react";

import { cn } from "@/utils";

const sizes = {
  input: {
    md: "text-sm sm:text-base",
    sm: "text-sm",
  },
};

interface InputProps<T extends ElementType> {
  size: "md" | "sm";
  as: T;
  props?: any;
  children?: React.ReactNode;
  className?: React.ReactNode;
}

export default function Input<T extends ElementType>({
  size,
  as: Component,
  props,
  children,
  className,
}: InputProps<T>) {
  return (
    <Component
      className={cn(
        "block w-full rounded-full border border-neutral-800 bg-neutral-950 px-7 py-4 text-left text-white",
        sizes.input[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
