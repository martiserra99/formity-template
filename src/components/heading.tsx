import clsx from "clsx";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h1 className={clsx("text-2xl font-medium text-white", className)}>
      {children}
    </h1>
  );
}
