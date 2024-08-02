import { ChangeEvent, useId } from "react";

import { cn } from "@/utils";

import Field from "@/components/app/ui/field";
import Input from "@/components/app/ui/input";

const sizes = {
  label: {
    md: cn(
      "peer-placeholder-shown:text-sm peer-focus:-top-[9px] peer-focus:text-xs",
      "sm:peer-placeholder-shown:text-base sm:peer-focus:-top-[11px] sm:peer-focus:text-sm",
    ),
    sm: cn("peer-placeholder-shown:text-sm peer-focus:-top-[9px] peer-focus:text-xs"),
  },
};

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
        "peer-placeholder-shown:top-[17px] peer-placeholder-shown:before:bg-transparent peer-focus:before:bg-neutral-950",
        sizes.label[size],
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
