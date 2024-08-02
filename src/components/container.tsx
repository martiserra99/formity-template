interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="h-[520px] w-[650px] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
      {children}
    </div>
  );
}
