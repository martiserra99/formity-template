import clsx from "clsx";

interface PoweredProps {
  className?: string;
}

export default function Powered({ className }: PoweredProps) {
  return (
    <div
      className={clsx(
        "w-max select-none rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm text-white/50",
        className,
      )}
    >
      Powered by Formity
    </div>
  );
}
