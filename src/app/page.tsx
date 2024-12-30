"use client";

import type { Value } from "expry";

import { useState } from "react";

import Form from "@/form";
import Data from "@/data";

export default function Home() {
  const [result, setResult] = useState<Value | null>(null);

  function handleReturn(result: Value) {
    setResult(result);
  }

  if (result) {
    return <Data data={result} onStart={() => setResult(null)} />;
  }

  return <Form onReturn={handleReturn} />;
}
