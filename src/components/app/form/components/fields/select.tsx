import { useFormContext, Controller } from "react-hook-form";

import RadioGroup from "./components/radio-group";

interface SelectProps {
  size: "normal" | "small";
  name: string;
  label: string;
  options: { value: string; label: string }[];
  direction: "horizontal" | "vertical";
}

export default function Select({ size, name, label, options, direction }: SelectProps) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <RadioGroup
          size={size}
          label={label}
          value={field.value}
          onChange={field.onChange}
          options={options}
          direction={direction}
          error={error}
        />
      )}
    />
  );
}
