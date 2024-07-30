import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

interface BackProps {
  onClick?: () => void;
  className?: string;
}

export default function Back({ onClick, className }: BackProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "block rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2 focus:ring-offset-black",
        className,
      )}
    >
      <ChevronLeftIcon className="pointer-events-none size-5 fill-white" />
    </button>
  );
}
