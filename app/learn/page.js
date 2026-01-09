export const metadata = {
  title: "Learn - Linktree Clone",
  description: "Tutorials and guides to help you get the most out of your Linktree page."
};

import React from "react";

const tutorials = [
  { title: "Getting Started with Linktree", desc: "Learn how to create your first page.", img: "/template4.jpg" },
  { title: "Designing Templates", desc: "Tips to customize your page style and layout.", img: "/template5.webp" },
  { title: "Advanced Features", desc: "Explore analytics, custom domains, and integrations.", img: "/template6.jpg" },
];

const LearnPage = () => {
  return (
    <div className="min-h-screen lg:py-40 py-35 pb-10 lg:p-10 p-4 bg-purple-500">
      <h1 className="text-4xl font-bold mb-6 text-white">Learn</h1>
      <p className="text-white mb-8 text-lg font-semibold">Check out tutorials and guides to maximize your Linktree page.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
        {tutorials.map((tut, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition hover:scale-105 cursor-pointer transform">
            <h2 className="text-2xl mb-3 font-semibold">{tut.title}</h2>
            <div className="">
              <img className="h-40 w-full rounded-lg object-cover" src={tut.img} alt="" />
            </div>
            <p className="mt-2 text-gray-600">{tut.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
