"use client";

import FormLayout from "@/components/form-layout";
import Logo from "@/components/logo";
import Powered from "@/components/powered";
import Back from "@/components/buttons/back";
import Next from "@/components/buttons/next";
import TextField from "@/components/fields/text-field";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Logo className="absolute left-4 top-4" />
      <FormLayout
        back={<Back onBack={() => {}} />}
        label="Label"
        heading="Heading"
        description="Description"
        fields={[
          <TextField
            key="text-field"
            value="Hola"
            error={{ message: "Error" }}
            onChange={(value) => console.log(value)}
          />,
        ]}
        next={<Next>Next</Next>}
      />
      <Powered className="absolute bottom-4 right-4" />
    </div>
  );
}
