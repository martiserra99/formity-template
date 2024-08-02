import { cn } from "@/utils";

const sizes = {
  row: {
    md: cn("flex-col sm:flex-row"),
    sm: cn("flex-col"),
  },
};

interface RowProps {
  size: "md" | "sm";
  items: React.ReactNode[];
}

export default function Row({ size, items }: RowProps) {
  return <div className={cn("flex gap-4", sizes.row[size])}>{items}</div>;
}
