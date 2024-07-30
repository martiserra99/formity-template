import { useFormContext, Controller } from "react-hook-form";

import RadioGroup from "./components/radio-group";

interface SelectProps {
  name: string;
  options: { value: string; label: string }[];
}

export default function Select({ name, options }: SelectProps) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <RadioGroup
          options={options}
          value={field.value}
          onChange={field.onChange}
          direction="vertical"
          error={error}
        />
      )}
    />
  );
}
