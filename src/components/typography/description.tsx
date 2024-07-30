import clsx from "clsx";

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Description({ children, className }: DescriptionProps) {
  return (
    <p className={clsx("text-base text-neutral-500", className)}>{children}</p>
  );
}
