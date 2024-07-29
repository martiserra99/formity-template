"use client";

import Label from "@/components/label";
import Heading from "@/components/heading";
import Text from "@/components/text";
import Button from "@/components/button";
import TextField from "@/components/text-field";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <div className="w-96 space-y-4">
        <Label>HOLA</Label>
        <Heading>My App</Heading>
        <Text>My App is a great app</Text>
        <Button>HOLA</Button>
        <TextField value="Hola" onChange={(value) => console.log(value)} />
      </div>
    </div>
  );
}
