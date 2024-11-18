import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import JSONEditor from "../components/JSONEditor";

const mockData = {
  formTitle: "Sample Form",
  fields: [
    {
      id: "name",
      type: "text",
      label: "Name",
      required: true,
    },
  ],
};

test("renders JSON editor", () => {
  render(<JSONEditor initialData={mockData} onChange={jest.fn()} />);

  expect(screen.getByText("JSON Editor")).toBeInTheDocument();
  expect(screen.getByText('"formTitle": "Sample Form"')).toBeInTheDocument();
});

test("handles valid JSON updates", async () => {
  const mockOnChange = jest.fn();
  const user = userEvent.setup();

  render(<JSONEditor initialData={mockData} onChange={mockOnChange} />);

  // Simulate editing the JSON schema
  await user.click(screen.getByText('"formTitle": "Sample Form"'));
  await user.type(screen.getByText('"formTitle": "Sample Form"'), " Updated");

  expect(mockOnChange).toHaveBeenCalled();
});

test("displays error for invalid JSON", async () => {
  const user = userEvent.setup();
  render(<JSONEditor initialData={mockData} onChange={jest.fn()} />);

  // Simulate an invalid JSON edit
  await user.click(screen.getByText('"formTitle": "Sample Form"'));
  await user.type(screen.getByText('"formTitle": "Sample Form"'), "{");

  expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
});