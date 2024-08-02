import { ChangeEvent, useId } from "react";

import { cn } from "@/utils";

import Field from "@/components/app/ui/field";
import Input from "@/components/app/ui/input";

interface TextFieldProps {
  size: "md" | "sm";
  type: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error: { message: string } | undefined;
}

export default function TextField({ size, type, label, value, onChange, error }: TextFieldProps) {
  const id = useId();
  return (
    <Field
      size={size}
      id={id}
      label={label}
      labelClassName={cn(
        "peer-placeholder-shown:top-[17px] peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:before:bg-transparent",
        "peer-focus:-top-[9px] sm:peer-focus:-top-[11px] peer-focus:text-xs sm:peer-focus:text-sm peer-focus:before:bg-neutral-950",
      )}
      error={error}
    >
      <Input
        size={size}
        as="input"
        props={{
          id: id,
          type: type,
          value: value,
          onChange: (e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
          },
          placeholder: label,
        }}
        className={cn(
          "peer placeholder-transparent focus:border-neutral-500 focus:outline-none focus:ring-transparent",
          { "border-red-500 focus:border-red-500": error },
        )}
      />
    </Field>
  );
}
