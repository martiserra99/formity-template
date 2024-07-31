import { useId } from "react";

import { cn } from "@/utils";

import Field from "@/components/app/ui/field";

interface TextFieldProps {
  type: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error: { message: string } | undefined;
}

export default function TextField({
  type,
  label,
  value,
  onChange,
  error,
}: TextFieldProps) {
  const id = useId();
  return (
    <Field
      id={id}
      label={label}
      labelClasses={cn(
        "peer-placeholder-shown:top-[17px] peer-placeholder-shown:text-base peer-placeholder-shown:before:bg-transparent",
        "peer-focus:-top-[11px] peer-focus:text-sm peer-focus:before:bg-neutral-950",
      )}
      error={error}
    >
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label}
        className={cn(
          "peer block w-full rounded-full border border-neutral-800 bg-neutral-950 px-7 py-4 text-left text-base text-white placeholder-transparent focus:outline-none",
          "focus:border-neutral-600 focus:ring-transparent",
          { "border-red-500 focus:border-red-500": error },
        )}
      />
    </Field>
  );
}
