import clsx from "clsx";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-indigo-500 hover:bg-indigo-400 focus:ring-indigo-400 block w-full rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black",
        className,
      )}
    >
      {children}
    </button>
  );
}
