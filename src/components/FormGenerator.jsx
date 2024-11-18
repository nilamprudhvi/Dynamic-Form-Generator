import React, { useState } from "react";

const FormGenerator = ({ schema }) => {
  // Destructure schema to extract fields, formTitle, and formDescription
  const { formTitle, formDescription, fields } = schema;

  // State to store the form values
  const [formData, setFormData] = useState(() => {
    const initialFormData = {};
    fields.forEach((field) => {
      initialFormData[field.id] = "";
    });
    return initialFormData;
  });

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the formData to an API or process it further
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">{formTitle}</h2>
      <p className="mb-4">{formDescription}</p>
      
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id} className="mb-4">
            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required={field.required}
              placeholder={field.placeholder}
              value={formData[field.id] || ""}
              onChange={handleChange}
            />
          </div>
        ))}
        
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormGenerator;
