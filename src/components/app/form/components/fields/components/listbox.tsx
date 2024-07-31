import { useId } from "react";
import {
  Listbox as HeadlessListbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

import { cn } from "@/utils";

interface ListboxProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  error: { message: string } | undefined;
}

export default function Listbox({
  label,
  value,
  onChange,
  options,
  error,
}: ListboxProps) {
  const id = useId();
  const option = options.find((option) => option.value === value)!;
  return (
    <div className="space-y-1">
      <HeadlessListbox value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton
            className={cn(
              "peer flex w-full items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-7 py-4 text-left text-base text-white focus:outline-none",
              "focus:border-neutral-600 focus:ring-transparent data-[active]:border-neutral-600 data-[active]:ring-transparent",
              {
                "border-red-500 focus:border-red-500 data-[active]:border-red-500":
                  error,
              },
            )}
          >
            {option.label}
            <ChevronDownIcon
              className="pointer-events-none ml-auto size-6 fill-white/50"
              aria-hidden="true"
            />
          </ListboxButton>
          <label
            htmlFor={id}
            className={cn(
              "absolute -top-[11px] left-[29px] block text-sm text-neutral-500 transition-all",
              "before:absolute before:left-0 before:right-0 before:top-[11px] before:h-px before:bg-neutral-950",
              { "text-red-500": error },
            )}
          >
            <span className="relative z-10">{label}</span>
          </label>
        </div>
        <ListboxOptions
          anchor="bottom"
          transition
          className="w-[var(--button-width)] rounded-3xl border border-neutral-800 bg-neutral-950 px-1 py-1 [--anchor-gap:8px] focus:outline-none"
        >
          {options.map((option) => (
            <ListboxOption
              key={option.value}
              value={option.value}
              className="group relative z-10 flex cursor-default select-none items-center gap-2 rounded-full px-3 py-2 data-[focus]:bg-white/10"
            >
              <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
              <div className="text-sm text-white">{option.label}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </HeadlessListbox>
      {error && <p className="ml-7 text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
