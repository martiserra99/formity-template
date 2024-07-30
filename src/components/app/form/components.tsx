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

type Parameters = {
  form: {
    step: Step;
    defaultValues: DefaultValues;
    resolver: Resolver;
    onNext: OnNext;
    children: Value;
  };
  formLayout: {
    back?: Value;
    label?: string;
    heading: string;
    description?: string;
    fields: Value[];
    button: Value;
  };
  button: {
    text: string;
  };
  back: {
    onBack: OnBack;
  };
  textField: {
    name: string;
    placeholder: string;
  };
  numberField: {
    name: string;
    placeholder: string;
  };
  listbox: {
    name: string;
    options: { value: string; label: string }[];
    placeholder?: string;
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
  formLayout: (
    { back, label, heading, description, fields, button },
    render,
  ) => (
    <FormLayout
      back={back ? render(back) : undefined}
      label={label}
      heading={heading}
      description={description}
      fields={fields.map((field, index) => (
        <Fragment key={index}>{render(field)}</Fragment>
      ))}
      button={render(button)}
    />
  ),
  button: ({ text }) => <Button>{text}</Button>,
  back: ({ onBack }) => <Back onBack={onBack} />,
  textField: ({ name, placeholder }) => (
    <TextField name={name} placeholder={placeholder} />
  ),
  numberField: ({ name, placeholder }) => (
    <NumberField name={name} placeholder={placeholder} />
  ),
  listbox: ({ name, options, placeholder }) => (
    <Listbox name={name} options={options} placeholder={placeholder} />
  ),
};

export default components;
