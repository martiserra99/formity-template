import { useId } from "react";
import { Radio, RadioGroup as HeadlessRadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

import { cn } from "@/utils";

interface RadioGroupProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  direction: "horizontal" | "vertical";
  error: { message: string } | undefined;
}

export default function RadioGroup({
  label,
  value,
  onChange,
  options,
  direction,
  error,
}: RadioGroupProps) {
  const id = useId();
  return (
    <div className="space-y-1">
      <div className="relative">
        <HeadlessRadioGroup
          value={value}
          onChange={onChange}
          className={cn(
            "peer flex flex-row gap-4",
            { "flex-col": direction === "vertical" },
            { "flex-row": direction === "horizontal" },
          )}
        >
          {options.map((option) => (
            <Radio
              key={option.value}
              value={option.value}
              className={cn(
                "group flex w-full items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-7 py-4 text-left text-base text-white",
                "focus:border-neutral-600 focus:ring-transparent data-[focus]:border-neutral-600 data-[focus]:ring-transparent",
                "data-[checked]:border-neutral-500",
                {
                  "border-red-500 focus:border-red-500 data-[focus]:ring-red-500":
                    error,
                },
              )}
            >
              {option.label}
              <CheckIcon className="pointer-events-none ml-auto size-5 fill-white/50 group-data-[checked]:fill-white/100" />
            </Radio>
          ))}
        </HeadlessRadioGroup>
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
