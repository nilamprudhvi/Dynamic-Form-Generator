export interface FieldOption {
  value: string; // The internal value of the option
  label: string; // The display label for the option
}

export interface Field {
  id: string; // Unique identifier for the field
  type: string; // Type of field, e.g., text, email, etc.
  label: string; // Display label for the field
  required: boolean; // Indicates if the field is mandatory
  placeholder?: string; // Placeholder text for input fields
  options?: FieldOption[]; // Options for dropdown, radio, etc.
  validation?: {
    pattern?: string; // Regex pattern for validation
    message?: string; // Error message to show if validation fails
  };
}

export interface FormSchema {
  formTitle: string; // Title of the form
  formDescription: string; // Description of the form
  fields: Field[]; // Array of form fields
}
