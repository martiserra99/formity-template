import { useFormContext, Controller } from "react-hook-form";

import BaseTextField from "./components/text-field";

interface TextFieldProps {
  name: string;
  placeholder?: string;
}

export default function TextField({ name, placeholder }: TextFieldProps) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <BaseTextField
          value={field.value}
          onChange={field.onChange}
          placeholder={placeholder}
          error={error}
        />
      )}
    />
  );
}
