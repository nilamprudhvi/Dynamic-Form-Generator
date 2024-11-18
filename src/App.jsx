import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormGenerator from "./components/FormGenerator";
import ErrorBoundary from "./components/ErrorBoundary";
import exampleSchema from "./exampleSchema";

const App = () => {
  const [schema, setSchema] = useState(exampleSchema);

  return (
    <ErrorBoundary>
      <div className="flex flex-col md:flex-row h-screen">
        {/* JSON Editor Section */}
        <div className="w-full md:w-1/2 border-r">
          <JSONEditor initialData={schema} onChange={setSchema} />
        </div>
        {/* Form Generator Section */}
        <div className="w-full md:w-1/2">
          <FormGenerator schema={schema} />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
