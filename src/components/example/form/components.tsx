import { Fragment } from "react";
import { Components, Step, DefaultValues, Resolver, OnNext, OnBack } from "formity";
import { Value } from "expry";

import Screen from "./components/screen";
import Form from "./components/form";
import FormLayout from "./components/form-layout";
import Button from "./components/buttons/button";
import Back from "./components/buttons/back";
import Row from "./components/row";
import TextField from "./components/fields/text-field";
import NumberField from "./components/fields/number-field";
import Listbox from "./components/fields/listbox";
import YesNo from "./components/fields/yes-no";
import Select from "./components/fields/select";
import MultiSelect from "./components/fields/multi-select";

type Parameters = {
  screen: {
    progress: { total: number; current: number };
    children: Value;
  };
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
  button: {
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
  screen: ({ progress, children }, render) => (
    <Screen size="md" progress={progress}>
      {render(children)}
    </Screen>
  ),
  form: ({ step, defaultValues, resolver, onNext, children }, render) => (
    <Form step={step} defaultValues={defaultValues} resolver={resolver} onNext={onNext}>
      {render(children)}
    </Form>
  ),
  formLayout: ({ heading, description, fields, button, back }, render) => (
    <FormLayout
      size="md"
      heading={heading}
      description={description}
      fields={fields.map((field, index) => (
        <Fragment key={index}>{render(field)}</Fragment>
      ))}
      button={render(button)}
      back={back ? render(back) : undefined}
    />
  ),
  button: ({ text }) => <Button size="md">{text}</Button>,
  back: ({ onBack }) => <Back size="md" onBack={onBack} />,
  row: ({ items }, render) => (
    <Row
      items={items.map((item, index) => (
        <Fragment key={index}>{render(item)}</Fragment>
      ))}
    />
  ),
  textField: ({ name, label }) => <TextField size="md" name={name} label={label} />,
  numberField: ({ name, label }) => <NumberField size="md" name={name} label={label} />,
  listbox: ({ name, label, options }) => <Listbox size="md" name={name} label={label} options={options} />,
  yesNo: ({ name, label }) => <YesNo size="md" name={name} label={label} />,
  select: ({ name, label, options, direction }) => (
    <Select size="md" name={name} label={label} options={options} direction={direction} />
  ),
  multiSelect: ({ name, label, options, direction }) => (
    <MultiSelect size="md" name={name} label={label} options={options} direction={direction} />
  ),
};

export default components;
