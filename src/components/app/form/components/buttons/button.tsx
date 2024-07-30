import { cn } from "@/utils";

import { useAnimate } from "../../animate";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  const { animate } = useAnimate();
  return (
    <button
      className={cn(
        "block w-full rounded-xl bg-indigo-500 px-6 py-4 text-white hover:bg-indigo-400",
        "focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-black",
        "disabled:bg-indigo-500 disabled:opacity-60",
      )}
      disabled={animate !== "none"}
    >
      {children}
    </button>
  );
}
