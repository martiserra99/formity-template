import clsx from "clsx";

interface PoweredProps {
  className?: string;
}

export default function Powered({ className }: PoweredProps) {
  return (
    <div
      className={clsx(
        "text-white/50 border-white/10 bg-white/5 w-max select-none rounded-full border px-6 py-2.5 text-sm",
        className,
      )}
    >
      Powered by Formity
    </div>
  );
}
