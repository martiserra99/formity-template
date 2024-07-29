import clsx from "clsx";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export default function Text({ children, className }: TextProps) {
  return (
    <p className={clsx("text-neutral-500 text-base", className)}>{children}</p>
  );
}
