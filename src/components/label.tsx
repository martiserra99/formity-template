import clsx from "clsx";

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function Label({ children, className }: LabelProps) {
  return (
    <p className={clsx("text-indigo-400 text-sm font-medium", className)}>
      {children}
    </p>
  );
}
