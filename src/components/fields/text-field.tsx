import { cn } from "@/utils";

interface TextFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: { message: string } | undefined;
}

export default function TextField({
  value,
  onChange,
  placeholder,
  error,
}: TextFieldProps) {
  return (
    <div className="space-y-1">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "block w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-neutral-500",
          "focus:outline-none focus:ring focus:ring-white/10 focus:ring-offset-2 focus:ring-offset-black",
          { "border-red-500 focus:ring-red-500": error },
        )}
      />
      {error && <p className="ml-6 text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
