import { cn } from "@/utils";

interface ButtonProps extends ButtonPrimitiveProps {
  size: "normal" | "small";
}

export default function Button({ size, ...props }: ButtonProps) {
  if (size === "normal") return <ButtonNormal {...props} />;
  return <ButtonSmall {...props} />;
}

function ButtonNormal({ children, className, disabled, onClick }: ButtonPrimitiveProps) {
  return (
    <ButtonPrimitive className={cn("text-sm sm:text-base", className)} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonPrimitive>
  );
}

function ButtonSmall({ children, className, disabled, onClick }: ButtonPrimitiveProps) {
  return (
    <ButtonPrimitive className={cn("text-sm", className)} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonPrimitive>
  );
}

interface ButtonPrimitiveProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function ButtonPrimitive({ children, className, disabled, onClick }: ButtonPrimitiveProps) {
  return (
    <button
      className={cn(
        "block w-full rounded-full bg-indigo-500 px-6 py-4 text-sm text-white hover:bg-indigo-400",
        "focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-black",
        "disabled:bg-indigo-500 disabled:opacity-60",
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
