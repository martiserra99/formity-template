import { useFormContext, Controller } from "react-hook-form";

import TextField from "../fields/text-field";

interface TextFieldProps {
  name: string;
  placeholder?: string;
  className?: string;
}

export default function RHFTextField({
  name,
  placeholder,
  className,
}: TextFieldProps) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          value={field.value}
          onChange={field.onChange}
          placeholder={placeholder}
          error={error}
          className={className}
        />
      )}
    />
  );
}
