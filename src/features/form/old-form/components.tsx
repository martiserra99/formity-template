import { Fragment } from "react";
import { Components, Step, DefaultValues, Resolver, OnNext, OnBack } from "formity";
import { Value } from "expry";

import Form from "./components/form";
import Next from "./components/buttons/button";
import Back from "./components/buttons/back";
import Row from "./components/row";
import TextField from "./components/fields/text-field";
import NumberField from "./components/fields/number-field";
import Listbox from "./components/fields/listbox";
import YesNo from "./components/fields/yes-no";
import Select from "./components/fields/select";
import MultiSelect from "./components/fields/multi-select";

export type Parameters = {
  form: {
    step: Step;
    defaultValues: DefaultValues;
    resolver: Resolver;
    onNext: OnNext;
    children: Value;
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
  form: ({ step, defaultValues, resolver, onNext, children }, render) => (
    <Form step={step} defaultValues={defaultValues} resolver={resolver} onNext={onNext}>
      {render(children)}
    </Form>
  ),
  button: ({ text }) => <Next>{text}</Next>,
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
