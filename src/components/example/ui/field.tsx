import { cn } from "@/utils";

const sizes = {
  label: {
    md: "-top-[9px] text-xs before:top-[9px] sm:-top-[11px] sm:text-sm sm:before:top-[11px]",
    sm: "-top-[9px] text-xs before:top-[9px]",
  },
  error: {
    md: "text-xs sm:text-sm",
    sm: "text-xs",
  },
};

interface FieldProps {
  size: "md" | "sm";
  children: React.ReactNode;
  id: string;
  label: string;
  labelClassName?: string;
  error: { message: string } | undefined;
}

export default function Field({ size, children, id, label, labelClassName, error }: FieldProps) {
  return (
    <div className="space-y-1">
      <div className="relative">
        {children}
        <label
          htmlFor={id}
          className={cn(
            "absolute left-[29px] block select-none text-neutral-500 transition-all",
            "before:absolute before:left-0 before:right-0 before:h-px before:bg-neutral-950",
            { "text-red-500": error },
            sizes.label[size],
            labelClassName,
          )}
        >
          <span className="relative z-10">{label}</span>
        </label>
      </div>
      {error && <p className={cn("ml-7 text-red-500", sizes.error[size])}>{error.message}</p>}
    </div>
  );
}
