import { cn } from "@/utils";

const sizes = {
  button: {
    normal: "text-sm sm:text-base",
    small: "text-sm",
  },
};

interface ButtonProps {
  size: "normal" | "small";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({ size, children, className, disabled, onClick }: ButtonProps) {
  return (
    <button
      className={cn(
        "block w-full rounded-full bg-indigo-500 px-6 py-4 text-white hover:bg-indigo-400",
        "focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-black",
        "disabled:bg-indigo-500 disabled:opacity-60",
        sizes.button[size],
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
