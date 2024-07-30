import clsx from "clsx";

interface TextFieldProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function TextField({
  value,
  onChange,
  placeholder,
  className,
}: TextFieldProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={clsx(
        "block w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:ring focus:ring-white/10 focus:ring-offset-2 focus:ring-offset-black",
        className,
      )}
    />
  );
}
