export const metadata = {
  title: "Pricing - Linktree Clone",
  description: "Check out our subscription plans and features for your Linktree page."
};

import React from "react";

const plans = [
  { name: "Free", price: "$0", features: ["Basic template", "Limited links"] },
  { name: "Pro", price: "$5/month", features: ["Advanced templates", "Custom domain", "Analytics"] },
  { name: "Business", price: "$15/month", features: ["Team accounts", "Priority support", "Full customization"] },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen lg:py-40 py-35 pb-10 lg:p-10 p-4 bg-cyan-500">
      <h1 className="text-4xl font-bold mb-6">Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-5 hover:scale-105 transform hover:shadow-lg transition cursor-pointer">
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="text-indigo-600 font-bold text-xl mt-2">{plan.price}</p>
            <ul className="mt-3 list-disc list-inside text-gray-700">
              {plan.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
