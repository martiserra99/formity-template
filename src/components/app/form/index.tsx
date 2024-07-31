import { Formity, OnReturn } from "formity";

import components from "./components";
import schema from "./schema";

interface FormProps {
  onReturn: OnReturn;
}

export default function Form({ onReturn }: FormProps) {
  return (
    <div className="relative h-screen">
      <Formity components={components} schema={schema} onReturn={onReturn} />
    </div>
  );
}
