interface RowProps {
  items: React.ReactNode[];
}

export default function Row({ items }: RowProps) {
  return <div className="flex flex-row gap-2">{items}</div>;
}
