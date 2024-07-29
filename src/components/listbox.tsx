import { useState } from "react";
import {
  Listbox as HeadlessListbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

interface ListboxProps {
  options: { value: string; label: string }[];
  value: string | null;
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
        className={clsx(
          "bg-white/5 border-white/10 data-[focus]:bg-red-400 relative block w-full rounded-xl border px-6 py-4 text-left text-base text-white",
          "data-[active]:ring-white/10 active:outline-none data-[active]:ring-2 data-[active]:ring-offset-2 data-[active]:ring-offset-black",
          className,
        )}
      >
        {option ? option.label : placeholder}
        <ChevronDownIcon
          className="fill-white/50 pointer-events-none absolute right-3 top-1/2 size-6 -translate-y-1/2"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className="border-white/10 bg-white/5 w-[var(--button-width)] rounded-xl border p-1 [--anchor-gap:8px] focus:outline-none"
      >
        {options.map((option) => (
          <ListboxOption
            key={option.value}
            value={option.value}
            className="data-[focus]:bg-white/10 group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-2"
          >
            <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
            <div className="text-sm text-white">{option.label}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </HeadlessListbox>
  );
}
