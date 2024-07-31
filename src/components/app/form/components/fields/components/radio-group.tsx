import { useId } from "react";
import { Radio, RadioGroup as HeadlessRadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

import { cn } from "@/utils";

import Field from "@/components/app/ui/field";

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
    <Field id={id} label={label} error={error}>
      <HeadlessRadioGroup
        value={value}
        onChange={onChange}
        className={cn(
          "peer flex gap-4",
          { "flex-col": direction === "vertical" },
          { "flex-row": direction === "horizontal" },
        )}
      >
        {options.map((option) => (
          <Radio
            key={option.value}
            value={option.value}
            className={cn(
              "group flex w-full cursor-default items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-7 py-4 text-left text-base text-white focus:outline-none",
              "active:border-neutral-600 active:ring-transparent",
              "data-[checked]:border-neutral-500",
              {
                "border-red-500 active:border-red-500 data-[focus]:ring-red-500":
                  error,
              },
            )}
          >
            {option.label}
            <CheckIcon className="pointer-events-none ml-auto size-5 fill-white/50 group-data-[checked]:fill-white/100" />
          </Radio>
        ))}
      </HeadlessRadioGroup>
    </Field>
  );
}
