import { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { OnBack } from "formity";

import { ChevronLeftIcon } from "@heroicons/react/20/solid";

import { useAnimate } from "../../animate";

import { cn } from "@/utils";

interface BackProps {
  onBack: OnBack;
}

export default function Back({ onBack }: BackProps) {
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
        "block rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10",
        "focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2 focus:ring-offset-black",
        "disabled:bg-white/5 disabled:opacity-60",
      )}
      disabled={animate !== "none"}
    >
      <ChevronLeftIcon className="pointer-events-none size-5 fill-white" />
    </button>
  );
}
