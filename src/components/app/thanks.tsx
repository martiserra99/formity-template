import { cn } from "@/utils";

import Logo from "../logo";

interface ThanksProps {
  onRestart: () => void;
}

export default function Thanks({ onRestart }: ThanksProps) {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex max-w-2xl flex-col items-center text-center">
        <h1 className="mb-4 text-4xl font-medium text-white">
          Thanks for answering the questions
        </h1>
        <p className="mb-6 text-base text-neutral-500">
          Thank you very much for having answered all these questions. If you
          want to start again from the beginning, click on the button below.
        </p>
        <button
          onClick={onRestart}
          className={cn(
            "block rounded-xl bg-indigo-500 px-6 py-4 text-white hover:bg-indigo-400",
            "focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-black",
          )}
        >
          Start again
        </button>
      </div>
    </div>
  );
}
