import { useFormContext, Controller } from "react-hook-form";

import BaseListbox from "./components/listbox";

interface ListboxProps {
  size: "md" | "sm";
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

export default function Listbox({ size, name, label, options }: ListboxProps) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <BaseListbox
          size={size}
          label={label}
          value={field.value}
          onChange={field.onChange}
          options={options}
          error={error}
        />
      )}
    />
  );
}
