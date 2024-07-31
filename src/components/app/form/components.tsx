import { Fragment } from "react";
import {
  Components,
  Step,
  DefaultValues,
  Resolver,
  OnNext,
  OnBack,
} from "formity";
import { Value } from "expry";

import Form from "./components/form";
import FormLayout from "./components/form-layout";
import Button from "@/components/app/form/components/buttons/button";
import Back from "@/components/app/form/components/buttons/back";
import TextField from "./components/fields/text-field";
import NumberField from "./components/fields/number-field";
import Listbox from "./components/fields/listbox";
import YesNo from "./components/fields/yes-no";
import Select from "./components/fields/select";

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
  button: {
    text: string;
  };
  back: {
    onBack: OnBack;
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
    options: { value: string; label: string }[];
  };
  yesNo: {
    name: string;
  };
  select: {
    name: string;
    options: { value: string; label: string }[];
  };
};

const components: Components<Parameters> = {
  form: ({ step, defaultValues, resolver, onNext, children }, render) => (
    <Form
      step={step}
      defaultValues={defaultValues}
      resolver={resolver}
      onNext={onNext}
    >
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
  button: ({ text }) => <Button>{text}</Button>,
  back: ({ onBack }) => <Back onBack={onBack} />,
  textField: ({ name, label }) => <TextField name={name} label={label} />,
  numberField: ({ name, label }) => <NumberField name={name} label={label} />,
  listbox: ({ name, options }) => <Listbox name={name} options={options} />,
  yesNo: ({ name }) => <YesNo name={name} />,
  select: ({ name, options }) => <Select name={name} options={options} />,
};

export default components;
