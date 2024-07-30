import { useFormContext, Controller } from "react-hook-form";

import BaseTextField from "./components/text-field";

interface NumberFieldProps {
  name: string;
  placeholder?: string;
}

export default function NumberField({ name, placeholder }: NumberFieldProps) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <BaseTextField
          type="number"
          name={name}
          value={String(field.value)}
          onChange={(value) => field.onChange(Number(value))}
          placeholder={placeholder}
          error={error}
        />
      )}
    />
  );
}
