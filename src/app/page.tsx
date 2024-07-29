"use client";

import Heading from "@/components/heading";
import Button from "@/components/button";
import TextField from "@/components/text-field";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <div className="w-96 space-y-4">
        <Heading>My App</Heading>
        <Button>HOLA</Button>
        <TextField value="Hola" onChange={(value) => console.log(value)} />
      </div>
    </div>
  );
}
