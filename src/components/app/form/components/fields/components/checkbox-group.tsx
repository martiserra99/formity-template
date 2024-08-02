import { useId } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

import { cn } from "@/utils";

import Field from "@/components/app/ui/field";
import Input from "@/components/app/ui/input";

const sizes = {
  container: {
    md: (direction: "x" | "y") => cn("flex-col", { "sm:flex-row": direction === "x" }),
    sm: () => cn("flex-col"),
  },
  icon: {
    md: cn("size-4 sm:size-5"),
    sm: cn("size-4"),
  },
};

interface CheckboxGroupProps {
  size: "md" | "sm";
  label: string;
  value: string[];
  onChange: (value: string[]) => void;
  options: { value: string; label: string }[];
  direction: "x" | "y";
  error: { message: string } | undefined;
}

export default function CheckboxGroup({ size, label, value, onChange, options, direction, error }: CheckboxGroupProps) {
  const id = useId();
  return (
    <Field size={size} id={id} label={label} error={error}>
      <div className={cn("peer flex gap-4", sizes.container[size](direction))}>
        {options.map((option) => (
          <Input
            key={option.value}
            size={size}
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
              "group flex cursor-pointer items-center gap-2 focus:outline-none",
              { "border-neutral-500": value.includes(option.value) },
              { "border-red-500": error },
            )}
          >
            {option.label}
            <CheckIcon
              className={cn("pointer-events-none ml-auto fill-white/50", sizes.icon[size], {
                "fill-white/100": value.includes(option.value),
              })}
            />
          </Input>
        ))}
      </div>
    </Field>
  );
}
