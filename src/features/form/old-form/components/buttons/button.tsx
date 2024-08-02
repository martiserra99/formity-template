import Button from "@/features/form/old-components/button";

import { useAnimate } from "../../animate";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Next({ children }: ButtonProps) {
  const { animate } = useAnimate();
  return <Button disabled={animate !== "none"}>{children}</Button>;
}
