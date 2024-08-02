import { motion } from "framer-motion";

import { cn } from "@/utils";

const sizes = {
  container: {
    md: cn("min-h-[800px"),
    sm: cn("min-h-[800px]"),
  },
};

interface ScreenProps {
  size: "md" | "sm";
  progress: { total: number; current: number };
  children: React.ReactNode;
}

export default function Screen({ size, progress, children }: ScreenProps) {
  return (
    <div className={cn("relative h-screen w-full", sizes.container[size])}>
      <Progress total={progress.total} current={progress.current} />
      {children}
    </div>
  );
}

interface ProgressProps {
  total: number;
  current: number;
}

function Progress({ total, current }: ProgressProps) {
  return (
    <div className="absolute left-0 right-0 top-0 h-1 bg-indigo-500/50">
      <motion.div className="h-full bg-indigo-500" animate={{ width: `${(current / total) * 100}%` }} />
    </div>
  );
}
