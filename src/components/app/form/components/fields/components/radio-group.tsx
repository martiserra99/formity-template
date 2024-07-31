import { useId } from "react";
import { Radio, RadioGroup as HeadlessRadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

import { cn } from "@/utils";

import Field from "@/components/app/ui/field";
import Input from "@/components/app/ui/input";

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
        className={cn("peer flex flex-col gap-4", {
          "flex-row": direction === "horizontal",
        })}
      >
        {options.map((option) => (
          <Input
            key={option.value}
            as={Radio}
            props={{ value: option.value }}
            className={cn(
              "group flex cursor-default items-center gap-2 focus:outline-none data-[checked]:border-neutral-500",
            )}
          >
            {option.label}
            <CheckIcon className="pointer-events-none ml-auto size-5 fill-white/50 group-data-[checked]:fill-white/100" />
          </Input>
        ))}
      </HeadlessRadioGroup>
    </Field>
  );
}
