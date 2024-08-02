import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/utils";

export default function Button({ className, children, ...props }: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(
        "block w-full rounded-full bg-indigo-500 px-6 py-4 text-sm text-white hover:bg-indigo-400 sm:text-base",
        "focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-black",
        "disabled:bg-indigo-500 disabled:opacity-60",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
