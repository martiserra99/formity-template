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
        "bg-indigo-500 hover:opacity-95 active:opacity-90 rounded-xl px-8 py-3 text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}
