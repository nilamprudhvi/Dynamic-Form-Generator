import React, { useState } from "react";

const JSONEditor = ({ initialData, onChange }) => {
  const [data, setData] = useState(JSON.stringify(initialData, null, 2));
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setData(value);

    try {
      const parsed = JSON.parse(value);
      setError(null);
      onChange(parsed);
    } catch (err) {
      setError("Invalid JSON format.");
    }
  };

  return (
    <div>
      <textarea
        className="w-full h-full p-2 border"
        value={data}
        onChange={handleChange}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default JSONEditor;
