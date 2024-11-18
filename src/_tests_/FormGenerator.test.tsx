import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormGenerator from "../components/FormGenerator";
import { FormSchema } from "../types/SchemaTypes";

const mockSchema: FormSchema = {
  formTitle: "Test Form",
  formDescription: "Fill in the form below.",
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
      label: "Email",
      required: true,
      placeholder: "Enter your email",
      validation: {
        pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        message: "Invalid email format",
      },
    },
  ],
};

test("renders form with fields", () => {
  render(<FormGenerator schema={mockSchema} />);

  expect(screen.getByText("Test Form")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
});

test("shows validation error for invalid email", () => {
  render(<FormGenerator schema={mockSchema} />);

  fireEvent.change(screen.getByPlaceholderText("Enter your email"), {
    target: { value: "invalid_email" },
  });
  fireEvent.click(screen.getByText("Submit"));

  expect(screen.getByText("Invalid email format")).toBeInTheDocument();
});

test("submits form data", () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  render(<FormGenerator schema={mockSchema} />);

  fireEvent.change(screen.getByPlaceholderText("Enter your name"), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByPlaceholderText("Enter your email"), {
    target: { value: "john@example.com" },
  });
  fireEvent.click(screen.getByText("Submit"));

  expect(consoleSpy).toHaveBeenCalledWith({
    name: "John Doe",
    email: "john@example.com",
  });

  consoleSpy.mockRestore();
});