import { useId } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

import { cn } from "@/utils";

interface CheckboxGroupProps {
  label: string;
  value: string[];
  onChange: (value: string[]) => void;
  options: { value: string; label: string }[];
  direction: "horizontal" | "vertical";
  error: { message: string } | undefined;
}

export default function CheckboxGroup({
  label,
  value,
  onChange,
  options,
  direction,
  error,
}: CheckboxGroupProps) {
  const id = useId();
  return (
    <div className="space-y-1">
      <div className="relative">
        <div
          className={cn(
            "peer flex gap-4",
            { "flex-col": direction === "vertical" },
            { "flex-row": direction === "horizontal" },
          )}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              value={option.value}
              onClick={() => {
                if (value.includes(option.value)) {
                  onChange(value.filter((v) => v !== option.value));
                } else {
                  onChange([...value, option.value]);
                }
              }}
              className={cn(
                "group flex w-full cursor-default items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-7 py-4 text-left text-base text-white focus:outline-none",
                "active:border-neutral-600 active:ring-transparent",
                { "border-neutral-500": value.includes(option.value) },
                { "border-red-500 active:border-red-500": error },
              )}
            >
              {option.label}
              <CheckIcon
                className={cn(
                  "pointer-events-none ml-auto size-5 fill-white/50",
                  { "fill-white/100": value.includes(option.value) },
                )}
              />
            </button>
          ))}
        </div>
        <label
          htmlFor={id}
          className={cn(
            "absolute -top-[11px] left-[29px] block text-sm text-neutral-500 transition-all",
            "before:absolute before:left-0 before:right-0 before:top-[11px] before:h-px before:bg-neutral-950",
            { "text-red-500": error },
          )}
        >
          <span className="relative z-10">{label}</span>
        </label>
      </div>
      {error && <p className="ml-7 text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
