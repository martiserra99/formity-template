import { useFormContext, Controller } from "react-hook-form";

import RadioGroup from "./components/radio-group";

const options = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

interface YesNoProps {
  size: "normal" | "small";
  name: string;
  label: string;
}

export default function YesNo({ size, name, label }: YesNoProps) {
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
          value={field.value ? "yes" : "no"}
          onChange={(value) => field.onChange(value === "yes" ? true : false)}
          options={options}
          direction="horizontal"
          error={error}
        />
      )}
    />
  );
}
