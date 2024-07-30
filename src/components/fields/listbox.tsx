import {
  Listbox as HeadlessListbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

import { cn } from "@/utils";

interface ListboxProps {
  options: { value: string; label: string }[];
  value: string | undefined;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function Listbox({
  options,
  value,
  onChange,
  placeholder,
  className,
}: ListboxProps) {
  const option = options.find((option) => option.value === value);
  return (
    <HeadlessListbox value={value} onChange={onChange}>
      <ListboxButton
        className={cn(
          "relative block w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-left text-base text-white",
          "focus:outline-none data-[active]:ring-2 data-[active]:ring-white/10 data-[active]:ring-offset-2 data-[active]:ring-offset-black",
          className,
        )}
      >
        {option ? option.label : placeholder}
        <ChevronDownIcon
          className="pointer-events-none absolute right-3 top-1/2 size-6 -translate-y-1/2 fill-white/50"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className="relative w-[var(--button-width)] rounded-xl p-1 [--anchor-gap:8px] focus:outline-none"
      >
        <div className="absolute inset-0 rounded-xl bg-black" />
        <div className="absolute inset-0 rounded-xl border border-white/10 bg-white/5" />
        {options.map((option) => (
          <ListboxOption
            key={option.value}
            value={option.value}
            className="group relative z-10 flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-2 data-[focus]:bg-white/10"
          >
            <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
            <div className="text-sm text-white">{option.label}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </HeadlessListbox>
  );
}
