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

import Form from "@/components/form";
import FormLayout from "@/components/form-layout";
import Next from "@/components/buttons/next";
import Back from "@/components/buttons/back";
import RHFTextField from "@/components/react-hook-form/rhf-text-field";

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
    next: Value;
  };
  next: {
    text: string;
  };
  back: {
    onBack: OnBack;
  };
  textField: {
    label: string;
    name: string;
    placeholder: string;
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
  formLayout: ({ back, label, heading, description, fields, next }, render) => (
    <FormLayout
      back={render(back)}
      label={label}
      heading={heading}
      description={description}
      fields={fields.map((field, index) => (
        <Fragment key={index}>{render(field)}</Fragment>
      ))}
      next={render(next)}
    />
  ),
  next: ({ text }) => <Next>{text}</Next>,
  back: ({ onBack }) => <Back onBack={onBack} />,
  textField: ({ name, placeholder }) => (
    <RHFTextField name={name} placeholder={placeholder} />
  ),
};

export default components;
