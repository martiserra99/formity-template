import clsx from "clsx";

interface NextProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Next({ onClick, children, className }: NextProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "block w-full rounded-xl bg-indigo-500 px-6 py-4 text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-black",
        className,
      )}
    >
      {children}
    </button>
  );
}
