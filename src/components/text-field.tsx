import clsx from "clsx";

interface TextFieldProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function TextField({
  value,
  onChange,
  className,
}: TextFieldProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={clsx(
        "bg-white/5 border-white/10 placeholder:text-neutral-500 focus:ring-white/10 block w-full rounded-xl border px-6 py-4 text-white focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-black",
        className,
      )}
    />
  );
}
