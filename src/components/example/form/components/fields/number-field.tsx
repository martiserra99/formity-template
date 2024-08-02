import { useFormContext, Controller } from "react-hook-form";

import TextField from "./components/text-field";

interface NumberFieldProps {
  size: "md" | "sm";
  name: string;
  label: string;
}

export default function NumberField({ size, name, label }: NumberFieldProps) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          size={size}
          type="number"
          label={label}
          value={field.value === "" ? "" : String(field.value)}
          onChange={(value) => field.onChange(value === "" ? "" : Number(value))}
          error={error}
        />
      )}
    />
  );
}
