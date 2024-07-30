import clsx from "clsx";

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function Label({ children, className }: LabelProps) {
  return (
    <p className={clsx("text-sm font-medium text-indigo-400", className)}>
      {children}
    </p>
  );
}
