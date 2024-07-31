import type { Schema } from "formity";

const schema: Schema = [
  {
    form: {
      defaultValues: {
        name: ["", []],
        surname: ["", []],
        age: ["", []],
      },
      resolver: {
        name: [
          [{ "#$ne": ["#$name", ""] }, "Required"],
          [{ "#$lt": [{ "#$strLen": "#$name" }, 20] }, "No more than 20 chars"],
        ],
        surname: [
          [{ "#$ne": ["#$surname", ""] }, "Required"],
          [{ "#$lt": [{ "#$strLen": "#$surname" }, 20] }, "No more than 20 chars"],
        ],
        age: [
          [{ "#$ne": ["#$age", ""] }, "Required"],
          [{ "#$gte": ["#$age", 10] }, "You must be at least 10 years old"],
          [{ "#$lte": ["#$age", 100] }, "You must be at most 100 years old"],
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
              heading: "Tell us about yourself",
              description: "We would want to know a little bit more about you",
              fields: [
                {
                  row: {
                    items: [
                      {
                        textField: {
                          name: "name",
                          label: "Name",
                        },
                      },
                      {
                        textField: {
                          name: "surname",
                          label: "Surname",
                        },
                      },
                    ],
                  },
                },
                {
                  numberField: {
                    name: "age",
                    label: "Age",
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
        softwareDeveloper: [true, []],
      },
      resolver: {},
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
              heading: "Are you a software developer?",
              description: "We would like to know if you are a software developer.",
              fields: [
                {
                  yesNo: {
                    name: "softwareDeveloper",
                    label: "Software Developer",
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
    cond: {
      if: { $eq: ["$softwareDeveloper", true] },
      then: [
        {
          variables: {
            languagesOptions: [
              { value: "javascript", label: "JavaScript" },
              { value: "python", label: "Python" },
              { value: "go", label: "Go" },
              { value: "rust", label: "Rust" },
            ],
            questions: {
              javascript: "What score would you give to the JavaScript language?",
              python: "What score would you give to the Python language?",
              go: "What score would you give to the Go language?",
              rust: "What score would you give to the Rust language?",
            },
          },
        },
        {
          form: {
            defaultValues: {
              languages: [[], []],
            },
            resolver: {},
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
                    heading: "What are your favourite programming languages?",
                    description: "We would like to know which of the following programming languages you like the most",
                    fields: [
                      {
                        multiSelect: {
                          name: "languages",
                          label: "Languages",
                          options: "$languagesOptions",
                          direction: "vertical",
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
          variables: {
            i: 0,
            languagesScores: [],
          },
        },
        {
          loop: {
            while: { $lt: ["$i", { $size: "$languages" }] },
            do: [
              {
                variables: {
                  language: { $arrayElemAt: ["$languages", "$i"] },
                },
              },
              {
                variables: {
                  question: {
                    $getField: { field: "$language", input: "$questions" },
                  },
                },
              },
              {
                form: {
                  defaultValues: {
                    score: ["3", ["$language"]],
                  },
                  resolver: {},
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
                          heading: "$question",
                          description:
                            "Since you said it is one of your favourite languages, we would like to know how much you like it",
                          fields: [
                            {
                              select: {
                                name: "score",
                                label: "Score",
                                options: [
                                  { value: "5", label: "5" },
                                  { value: "4", label: "4" },
                                  { value: "3", label: "3" },
                                  { value: "2", label: "2" },
                                  { value: "1", label: "1" },
                                ],
                                direction: "vertical",
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
                variables: {
                  i: { $add: ["$i", 1] },
                  languagesScores: {
                    $concatArrays: ["$languagesScores", [{ name: "$language", score: "$score" }]],
                  },
                },
              },
            ],
          },
        },
        {
          return: {
            fullName: { $concat: ["$name", " ", "$surname"] },
            age: "$age",
            softwareDeveloper: "$softwareDeveloper",
            languages: "$languagesScores",
          },
        },
      ],
      else: [
        {
          form: {
            defaultValues: {
              interested: ["maybe", []],
            },
            resolver: {},
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
                    heading: "Would you be interested in learning how to code?",
                    description: "Learning how to code can be a really useful skill.",
                    fields: [
                      {
                        listbox: {
                          name: "interested",
                          label: "Interested",
                          options: [
                            { value: "maybe", label: "Maybe in another time." },
                            { value: "yes", label: "Yes, that sounds good." },
                            { value: "no", label: "No, it is not for me." },
                          ],
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
            fullName: { $concat: ["$name", " ", "$surname"] },
            age: "$age",
            softwareDeveloper: "$softwareDeveloper",
            interested: "$interested",
          },
        },
      ],
    },
  },
];

export default schema;
