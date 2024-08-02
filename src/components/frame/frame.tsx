import { cn } from "@/utils";

interface FrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function Frame({ children, className }: FrameProps) {
  return (
    <div className={cn("w-full rounded-2xl border border-neutral-800 bg-neutral-950", className)}>
      <div className="flex h-12 items-center border-b border-b-neutral-800 px-6">
        <TrafficLightsIcon className="h-3 w-auto fill-neutral-800" />
      </div>
      <div className="aspect-video h-full w-full">{children}</div>
    </div>
  );
}

function TrafficLightsIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  );
}
