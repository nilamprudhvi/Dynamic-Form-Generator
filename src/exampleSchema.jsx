const exampleSchema = {
  formTitle: "Sample Form",
  formDescription: "This is an example schema for demonstration.",
  fields: [
    {
      id: "name",
      type: "text",
      label: "Name",
      required: true,
      placeholder: "Enter your name",
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      required: true,
      placeholder: "Enter your email",
    },
  ],
};

export default exampleSchema;
