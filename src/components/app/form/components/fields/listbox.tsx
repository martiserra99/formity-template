import { useFormContext, Controller } from "react-hook-form";

import BaseListbox from "./components/listbox";

interface ListboxProps {
  name: string;
  options: { value: string; label: string }[];
}

export default function Listbox({ name, options }: ListboxProps) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <BaseListbox
          options={options}
          value={field.value}
          onChange={field.onChange}
          error={error}
        />
      )}
    />
  );
}
