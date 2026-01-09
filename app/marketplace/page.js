export const metadata = {
  title: "Marketplace - Linktree Clone",
  description: "Explore add-ons, icons, and widgets in our marketplace."
};
import React from "react";

const marketplaceItems = [
  { title: "Social Media Icons Pack", desc: "Get a set of icons for all social media platforms.",img: "/madara.jpg" },
  { title: "Button Styles Pack", desc: "Professional button designs for your links.",img: "/garou.jpg" },
  { title: "Link Analytics Widgets", desc: "Add analytics widgets to your page.", img: "/aizen.jpg" },
];

const MarketplacePage = () => {
  return (
    <div className="min-h-screen lg:py-40 py-35 pb-10 lg:p-10 p-4 bg-red-500">
      <h1 className="text-4xl font-bold mb-6">Marketplace</h1>
      <p className="text-gray-900 mb-8 text-lg font-semibold">
        Explore products and add-ons to improve your Linktree page.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {marketplaceItems.map((item, i) => (
          <div key={i} className="bg-white rounded-xl hover:scale-105 transition transform cursor-pointer shadow p-5 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
            <div className="">
              <img className="w-full h-40 object-cover rounded-lg" src={item.img} alt="" />
            </div>
            <p className="mt-2 font-semibold text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;
