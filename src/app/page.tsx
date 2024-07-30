"use client";

import MainLayout from "@/components/layout/main-layout";
import Logo from "@/components/logo";
import Powered from "@/components/powered";
import Back from "@/components/buttons/back";
import Label from "@/components/typography/label";
import Heading from "@/components/typography/heading";
import Description from "@/components/typography/description";
import Next from "@/components/buttons/next";
import TextField from "@/components/fields/text-field";
import Listbox from "@/components/fields/listbox";
import RadioGroup from "@/components/fields/radio-group";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Logo className="absolute left-4 top-4" />
      <MainLayout
        back={<Back />}
        label="Label"
        heading="Heading"
        description="Description"
        fields={[
          <TextField
            key="text-field"
            value="Hola"
            onChange={(value) => console.log(value)}
          />,
        ]}
        button={<Next>Next</Next>}
      />
      <Powered className="absolute bottom-4 right-4" />
    </div>
  );
  // return (
  //   <>
  //     <Powered />
  //     <div className="flex h-full flex-col items-center justify-center gap-2">
  //       <div className="w-96 space-y-4">
  //         <Back />
  //         <Label>HOLA</Label>
  //         <Heading>My App</Heading>
  //         <Description>My App is a great app</Description>
  //         <Button>HOLA</Button>
  //         <TextField value="Hola" onChange={(value) => console.log(value)} />
  //         <Listbox
  //           options={[
  //             { value: "football", label: "Football" },
  //             { value: "basketball", label: "Basketball" },
  //           ]}
  //           value={undefined}
  //           placeholder="Select a sport"
  //           onChange={(value) => console.log(value)}
  //         />
  //         <RadioGroup
  //           options={[
  //             { value: "yes", label: "Yes" },
  //             { value: "no", label: "No" },
  //           ]}
  //           value="no"
  //           onChange={(value) => console.log(value)}
  //           direction="horizontal"
  //         />
  //       </div>
  //     </div>
  //   </>
  // );
}
