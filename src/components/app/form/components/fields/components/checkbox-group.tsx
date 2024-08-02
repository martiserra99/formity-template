import { useId } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

import { cn } from "@/utils";

import Field from "@/components/app/ui/field";
import Input from "@/components/app/ui/input";

interface CheckboxGroupProps {
  label: string;
  value: string[];
  onChange: (value: string[]) => void;
  options: { value: string; label: string }[];
  direction: "horizontal" | "vertical";
  error: { message: string } | undefined;
}

export default function CheckboxGroup({ label, value, onChange, options, direction, error }: CheckboxGroupProps) {
  const id = useId();
  return (
    <Field id={id} label={label} error={error}>
      <div
        className={cn("peer flex flex-col gap-4", {
          "sm:flex-row": direction === "horizontal",
        })}
      >
        {options.map((option) => (
          <Input
            key={option.value}
            as="button"
            props={{
              type: "button",
              value: option.value,
              onClick: () => {
                if (value.includes(option.value)) {
                  onChange(value.filter((v) => v !== option.value).sort());
                } else {
                  onChange([...value, option.value].sort());
                }
              },
            }}
            className={cn(
              "group flex cursor-pointer items-center gap-2 text-sm focus:outline-none sm:text-base",
              { "border-neutral-500": value.includes(option.value) },
              { "border-red-500": error },
            )}
          >
            {option.label}
            <CheckIcon
              className={cn("pointer-events-none ml-auto size-4 fill-white/50 sm:size-5", {
                "fill-white/100": value.includes(option.value),
              })}
            />
          </Input>
        ))}
      </div>
    </Field>
  );
}
