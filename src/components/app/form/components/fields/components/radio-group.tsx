import { useId } from "react";
import { Radio, RadioGroup as HeadlessRadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

import { cn } from "@/utils";

import Field from "@/components/app/ui/field";
import Input from "@/components/app/ui/input";

interface RadioGroupProps {
  size: "md" | "sm";
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  direction: "horizontal" | "vertical";
  error: { message: string } | undefined;
}

export default function RadioGroup({ size, label, value, onChange, options, direction, error }: RadioGroupProps) {
  const id = useId();
  return (
    <Field size={size} id={id} label={label} error={error}>
      <HeadlessRadioGroup
        value={value}
        onChange={onChange}
        className={cn("peer flex flex-col gap-4", {
          "sm:flex-row": direction === "horizontal",
        })}
      >
        {options.map((option) => (
          <Input
            key={option.value}
            size={size}
            as={Radio}
            props={{ value: option.value }}
            className={cn(
              "group flex cursor-pointer items-center gap-2 focus:outline-none data-[checked]:border-neutral-500",
              { "border-red-500 data-[checked]:border-red-500": error },
            )}
          >
            {option.label}
            <CheckIcon className="pointer-events-none ml-auto size-4 fill-white/50 group-data-[checked]:fill-white/100 sm:size-5" />
          </Input>
        ))}
      </HeadlessRadioGroup>
    </Field>
  );
}
