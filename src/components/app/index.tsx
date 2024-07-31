"use client";

import type { Value } from "expry";

import { ReactElement, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Form from "./form";
import Result from "./result";

export default function App() {
  const [result, setResult] = useState<Value | null>(null);

  function handleReturn(result: Value) {
    setResult(result);
  }

  let component: ReactElement;

  if (result) {
    component = (
      <motion.div
        key="result"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Result result={result} onRestart={() => setResult(null)} />
      </motion.div>
    );
  } else {
    component = (
      <motion.div
        key="form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Form onReturn={handleReturn} />
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {component}
    </AnimatePresence>
  );
}
