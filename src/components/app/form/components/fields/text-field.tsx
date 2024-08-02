import { useFormContext, Controller } from "react-hook-form";

import BaseTextField from "./components/text-field";

interface TextFieldProps {
  size: "normal" | "small";
  name: string;
  label: string;
}

export default function TextField({ size, name, label }: TextFieldProps) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <BaseTextField
          size={size}
          type="text"
          label={label}
          value={field.value}
          onChange={field.onChange}
          error={error}
        />
      )}
    />
  );
}
