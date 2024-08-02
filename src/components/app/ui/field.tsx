import { useId } from "react";

import { cn } from "@/utils";

interface FieldProps {
  children: React.ReactNode;
  id: string;
  label: string;
  labelClassName?: string;
  error: { message: string } | undefined;
}

export default function Field({ children, id, label, labelClassName, error }: FieldProps) {
  return (
    <div className="space-y-1">
      <div className="relative">
        {children}
        <label
          htmlFor={id}
          className={cn(
            "absolute -top-[9px] left-[29px] block select-none text-xs text-neutral-500 transition-all sm:-top-[11px] sm:left-[29px] sm:text-sm",
            "before:absolute before:left-0 before:right-0 before:top-[9px] before:h-px before:bg-neutral-950 sm:before:top-[11px]",
            { "text-red-500": error },
            labelClassName,
          )}
        >
          <span className="relative z-10">{label}</span>
        </label>
      </div>
      {error && <p className="ml-7 text-xs text-red-500 sm:text-sm">{error.message}</p>}
    </div>
  );
}
