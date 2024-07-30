import clsx from "clsx";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export default function Text({ children, className }: TextProps) {
  return (
    <p className={clsx("text-base text-neutral-500", className)}>{children}</p>
  );
}
