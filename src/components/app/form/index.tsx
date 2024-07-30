import { Formity, OnReturn } from "formity";

import Logo from "../../logo";

import components from "./components";
import schema from "./schema";

interface FormProps {
  onReturn: OnReturn;
}

export default function Form({ onReturn }: FormProps) {
  return (
    <div className="relative h-screen">
      <Logo className="absolute left-4 top-4" />
      <Formity components={components} schema={schema} onReturn={onReturn} />
      <div className="absolute bottom-4 right-4 w-max select-none rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm text-white/50">
        Powered by Formity
      </div>
    </div>
  );
}
