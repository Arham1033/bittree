export const metadata = {
  title: "Templates - Linktree Clone",
  description: "Choose from a variety of templates to create your Linktree page quickly."
};

import React from "react";

const templates = [
  {
    name: "Classic Linktree",
    description: "A clean, minimal template with a simple list of links.",
    img: "/template1.jpg",
  },
  {
    name: "Social Media Grid",
    description: "Displays your links in a modern card grid layout.",
    img: "/template2.jpg",
  },
  {
    name: "Profile Focused",
    description: "Highlights your profile picture with your top links.",
    img: "/template3.jpg",
  },
];

const TemplatesPage = () => {
  return (
    <div className="min-h-screen lg:py-40 py-35 pb-10 lg:p-10 p-4 bg-yellow-300">
      <h1 className="text-4xl font-bold mb-6">Templates</h1>
      <p className="mb-8 text-gray-900 font-semibold text-lg">
        Choose a template to design your Linktree page quickly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4 hover:scale-105 transition transform cursor-pointer">
            <img
              src={template.img}
              alt={template.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="font-semibold text-xl">{template.name}</h2>
            <p className="text-gray-600 mt-2">{template.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatesPage;
