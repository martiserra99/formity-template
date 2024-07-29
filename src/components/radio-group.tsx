import { Radio, RadioGroup as HeadlessRadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

interface RadioGroupProps {
  options: { value: string; label: string }[];
  value: string | undefined;
  onChange: (value: string) => void;
  direction: "horizontal" | "vertical";
  className?: string;
}

export default function RadioGroup({
  options,
  value,
  onChange,
  direction,
  className,
}: RadioGroupProps) {
  return (
    <HeadlessRadioGroup
      value={value}
      onChange={onChange}
      className={clsx(
        "flex flex-row gap-4",
        direction === "horizontal" ? "flex-row" : "flex-col",
        className,
      )}
    >
      {options.map((option) => (
        <Radio
          key={option.value}
          value={option.value}
          className={clsx(
            "bg-white/5 border-white/10 group relative block w-full rounded-xl border px-6 py-4 text-left text-base text-white",
            "data-[focus]:ring-white/10 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-offset-2 data-[focus]:ring-offset-black",
            "data-[checked]:border-white/50",
          )}
        >
          {option.label}
          <CheckIcon className="fill-white/50 pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 group-data-[checked]:fill-white/100" />
        </Radio>
      ))}
    </HeadlessRadioGroup>
  );
}
