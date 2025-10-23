import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
      {/* Header Title */}
      <h1 className="text-4xl font-bold text-[#38a169] mb-8">
        KENDAL FELL EXPLORER
      </h1>

      {/* Point Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <div className="flex items-center mb-4">
          {/* Number Icon with breathing animation */}
          <div
            className="flex items-center justify-center bg-[#fa8072] text-white rounded-full w-16 h-16 mr-4 text-3xl font-extrabold breathing"
          >
            3
          </div>
          <h2 className="text-2xl font-bold">The Summerhouse</h2>
        </div>

        {/* Image Placeholder */}
        <div className="mb-4">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Placeholder for custom illustration of The Summerhouse"
            className="w-full rounded"
          />
        </div>

        {/* Interpretation Text */}
        <div className="text-gray-800">
          <p>
            In the corner of Boundary Bank House, beside the footpath, is a rather spectacular summerhouse built in the {
            <span className="font-bold text-[#fa8072]">French chateau style</span>}-a rare sight on the Fell! It is distinctly tall, narrow, and features a steeply pitched roof. A little further down the footpath, you can catch incredible views over the huge Kendal Fell Quarry. This summerhouse serves as a reminder of the historical elegance and the rich, hidden stories embedded in this landscape.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-6 text-center">
          <a
            href="#"
            className="inline-block bg-[#38a169] text-white py-2 px-4 rounded hover:bg-[#2f855a] transition-colors"
          >
            Explore the Full Kendal Fell Trail
          </a>
        </div>
      </div>
    </div>
  );
};

// Render the App component into the root div
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;