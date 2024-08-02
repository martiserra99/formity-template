import { Fragment } from "react";
import { Components, Step, DefaultValues, Resolver, OnNext, OnBack } from "formity";
import { Value } from "expry";

import { Form, Next, Back, Row, TextField, NumberField, Listbox, YesNo, Select, MultiSelect } from "@/features/form";

import FormLayout from "./form-layout";

type Parameters = {
  form: {
    step: Step;
    defaultValues: DefaultValues;
    resolver: Resolver;
    onNext: OnNext;
    children: Value;
  };
  formLayout: {
    heading: string;
    description: string;
    fields: Value[];
    button: Value;
    back?: Value;
  };
  next: {
    text: string;
  };
  back: {
    onBack: OnBack;
  };
  row: {
    items: Value[];
  };
  textField: {
    name: string;
    label: string;
  };
  numberField: {
    name: string;
    label: string;
  };
  listbox: {
    name: string;
    label: string;
    options: { value: string; label: string }[];
  };
  yesNo: {
    name: string;
    label: string;
  };
  select: {
    name: string;
    label: string;
    options: { value: string; label: string }[];
    direction: "x" | "y";
  };
  multiSelect: {
    name: string;
    label: string;
    options: { value: string; label: string }[];
    direction: "x" | "y";
  };
};

const components: Components<Parameters> = {
  form: ({ step, defaultValues, resolver, onNext, children }, render) => (
    <Form step={step} defaultValues={defaultValues} resolver={resolver} onNext={onNext}>
      {render(children)}
    </Form>
  ),
  formLayout: ({ heading, description, fields, button, back }, render) => (
    <FormLayout
      heading={heading}
      description={description}
      fields={fields.map((field, index) => (
        <Fragment key={index}>{render(field)}</Fragment>
      ))}
      button={render(button)}
      back={back ? render(back) : undefined}
    />
  ),
  next: ({ text }) => <Next>{text}</Next>,
  back: ({ onBack }) => <Back onBack={onBack} />,
  row: ({ items }, render) => (
    <Row
      items={items.map((item, index) => (
        <Fragment key={index}>{render(item)}</Fragment>
      ))}
    />
  ),
  textField: ({ name, label }) => <TextField name={name} label={label} />,
  numberField: ({ name, label }) => <NumberField name={name} label={label} />,
  listbox: ({ name, label, options }) => <Listbox name={name} label={label} options={options} />,
  yesNo: ({ name, label }) => <YesNo name={name} label={label} />,
  select: ({ name, label, options, direction }) => (
    <Select name={name} label={label} options={options} direction={direction} />
  ),
  multiSelect: ({ name, label, options, direction }) => (
    <MultiSelect name={name} label={label} options={options} direction={direction} />
  ),
};

export default components;
