import { useId } from "react";

import { cn } from "@/utils";

interface TextFieldProps {
  type: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error: { message: string } | undefined;
}

export default function TextField({
  type,
  name,
  label,
  value,
  onChange,
  error,
}: TextFieldProps) {
  const id = useId();
  return (
    <div className="space-y-1">
      <div className="relative">
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={label}
          className={cn(
            "peer block w-full rounded-full border border-neutral-800 bg-neutral-950 px-7 py-4 text-left text-base text-white placeholder-transparent",
            "focus:border-neutral-600 focus:ring-transparent",
            { "border-red-500 focus:border-red-500": error },
          )}
        />
        <label
          htmlFor={id}
          className={cn(
            "absolute -top-[11px] left-[29px] block text-sm text-neutral-500 transition-all",
            "before:absolute before:left-0 before:right-0 before:top-[11px] before:h-px before:bg-neutral-950",
            "peer-placeholder-shown:top-[17px] peer-placeholder-shown:text-base peer-placeholder-shown:before:bg-transparent",
            "peer-focus:-top-[11px] peer-focus:text-sm peer-focus:before:bg-neutral-950",
            { "text-red-500": error },
          )}
        >
          <span className="relative z-10">{label}</span>
        </label>
      </div>
      {error && <p className="ml-6 text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
