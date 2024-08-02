import BaseButton from "@/components/app/ui/button";

import { useAnimate } from "../../animate";

interface ButtonProps {
  size: "md" | "sm";
  children: React.ReactNode;
}

export default function Button({ size, children }: ButtonProps) {
  const { animate } = useAnimate();
  return (
    <BaseButton size={size} disabled={animate !== "none"}>
      {children}
    </BaseButton>
  );
}
