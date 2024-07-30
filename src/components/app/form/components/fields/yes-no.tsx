import { useFormContext, Controller } from "react-hook-form";

import RadioGroup from "./components/radio-group";

const options = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

interface YesNoProps {
  name: string;
}

export default function YesNo({ name }: YesNoProps) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <RadioGroup
          options={options}
          value={field.value ? "yes" : "no"}
          onChange={(value) => field.onChange(value === "yes" ? true : false)}
          direction="horizontal"
          error={error}
        />
      )}
    />
  );
}
