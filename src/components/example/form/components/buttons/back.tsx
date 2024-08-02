import { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { OnBack, useFormity } from "formity";

import { ChevronLeftIcon } from "@heroicons/react/20/solid";

import { useAnimate } from "../../animate";

import { cn } from "@/utils";

const sizes = {
  icon: {
    md: "size-4 sm:size-5",
    sm: "size-4",
  },
};

interface BackProps {
  size: "md" | "sm";
  onBack: OnBack;
}

export default function Back({ size, onBack }: BackProps) {
  const { getValues } = useFormContext();
  const { animate, setAnimate } = useAnimate();

  const handleClick = useCallback(() => {
    setAnimate("back");
    setTimeout(() => onBack(getValues()), 0);
  }, [onBack, setAnimate, getValues]);

  return (
    <button
      onClick={handleClick}
      className={cn(
        "block rounded-full border border-neutral-800 bg-neutral-950 px-6 py-2 hover:bg-neutral-800",
        "focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2 focus:ring-offset-black",
        "disabled:bg-neutral-950 disabled:opacity-60",
      )}
      disabled={animate !== "none"}
    >
      <ChevronLeftIcon className={cn("pointer-events-none fill-white", sizes.icon[size])} />
    </button>
  );
}
