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
        "bg-white/5 hover:bg-white/10 border-white/10 focus:ring-white/10 block rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black",
        className,
      )}
    >
      <ChevronLeftIcon className="pointer-events-none size-5 fill-white" />
    </button>
  );
}
