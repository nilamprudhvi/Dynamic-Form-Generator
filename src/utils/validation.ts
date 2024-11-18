import { FormSchema } from "../types/SchemaTypes";

export const validateSchema = (schema: any): string | null => {
  if (!schema.formTitle || typeof schema.formTitle !== "string") {
    return "Form title is required and must be a string.";
  }
  if (!Array.isArray(schema.fields)) {
    return "Fields must be an array.";
  }
  for (const field of schema.fields) {
    if (!field.id || typeof field.id !== "string") {
      return "Each field must have an 'id' of type string.";
    }
    if (!field.type || typeof field.type !== "string") {
      return "Each field must have a 'type' of type string.";
    }
    if (!field.label || typeof field.label !== "string") {
      return "Each field must have a 'label' of type string.";
    }
  }
  return null;
};