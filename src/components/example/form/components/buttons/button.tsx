import BaseButton from "@/components/example/ui/button";

import { useAnimate } from "../../animate";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  const { animate } = useAnimate();
  return <BaseButton disabled={animate !== "none"}>{children}</BaseButton>;
}
