"use client";

import Label from "@/components/label";
import Heading from "@/components/heading";
import Text from "@/components/text";
import Button from "@/components/button";
import TextField from "@/components/text-field";
import Listbox from "@/components/listbox";
import RadioGroup from "@/components/radio-group";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <div className="w-96 space-y-4">
        <Label>HOLA</Label>
        <Heading>My App</Heading>
        <Text>My App is a great app</Text>
        <Button>HOLA</Button>
        <TextField value="Hola" onChange={(value) => console.log(value)} />
        <Listbox
          options={[
            { value: "football", label: "Football" },
            { value: "basketball", label: "Basketball" },
          ]}
          value={undefined}
          placeholder="Select a sport"
          onChange={(value) => console.log(value)}
        />
        <RadioGroup
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
          value={undefined}
          onChange={(value) => console.log(value)}
          direction="horizontal"
        />
      </div>
    </div>
  );
}
