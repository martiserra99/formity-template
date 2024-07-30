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
              label: "Formity",
              heading: "What is your name?",
              description: "Tell us your name",
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
    form: {
      defaultValues: {
        age: [20, []],
      },
      resolver: {
        age: [[{ "#$gt": ["#$age", 18] }, "Must be 18 or older"]],
      },
      render: {
        form: {
          step: "$step",
          defaultValues: "$defaultValues",
          resolver: "$resolver",
          onNext: "$onNext",
          children: {
            formLayout: {
              back: {
                back: { onBack: "$onBack" },
              },
              label: "Formity",
              heading: "What is your age?",
              description: "Tell us your age",
              fields: [
                {
                  numberField: {
                    name: "age",
                    placeholder: "Enter your age",
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
    form: {
      defaultValues: {
        sport: ["football", []],
      },
      resolver: {
        sport: [[{ "#$ne": ["#$sport", null] }, "Required"]],
      },
      render: {
        form: {
          step: "$step",
          defaultValues: "$defaultValues",
          resolver: "$resolver",
          onNext: "$onNext",
          children: {
            formLayout: {
              back: {
                back: { onBack: "$onBack" },
              },
              label: "Formity",
              heading: "What is your favourite sport?",
              description: "Tell us your favourite sport",
              fields: [
                {
                  listbox: {
                    name: "sport",
                    options: [
                      { value: "football", label: "Football" },
                      { value: "basketball", label: "Basketball" },
                      { value: "tennis", label: "Tennis" },
                    ],
                    placeholder: "Select your favourite sport",
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
      age: "$age",
      sport: "$sport",
    },
  },
];

export default schema;
