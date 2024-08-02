interface RowProps {
  items: React.ReactNode[];
}

export default function Row({ items }: RowProps) {
  return <div className="flex flex-col gap-4 sm:flex-row">{items}</div>;
}
