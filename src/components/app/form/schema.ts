import type { Schema } from "formity";

const schema: Schema = [
  {
    form: {
      defaultValues: {
        name: ["", []],
      },
      resolver: {
        name: [
          [{ "#$ne": ["#$name", ""] }, "Required"],
          [{ "#$lt": [{ "#$strLen": "#$name" }, 20] }, "No more than 20 chars"],
        ],
      },
      render: {
        form: {
          step: "$step",
          defaultValues: "$defaultValues",
          resolver: "$resolver",
          onNext: "$onNext",
          children: {
            formLayout: {
              heading: "What is your name?",
              fields: [
                {
                  textField: {
                    name: "name",
                    placeholder: "Enter your name",
                  },
                },
              ],
              button: {
                button: { text: "Next" },
              },
            },
          },
        },
      },
    },
  },
  {
    return: {
      name: "$name",
    },
  },
];

export default schema;
