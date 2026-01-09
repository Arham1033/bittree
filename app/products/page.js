export const metadata = {
  title: "Products - Linktree Clone",
  description: "Discover Linktree products and add-ons to improve your page."
};
import React from "react";

const products = [
  { name: "Pro Link Analytics", price: "$5/month", desc: "Track clicks and views on all your links.", img: "/bmw.jpg" },
  { name: "Custom Domain", price: "$10/month", desc: "Use your own domain instead of linktree.com.", img: "/goku.jpg" },
  { name: "Advanced Themes", price: "$7/month", desc: "More stylish templates for your links.",img: "/porsche.jpg", },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen lg:py-40 py-35 pb-10 lg:p-10 p-4 bg-green-500">
      <h1 className="text-4xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-5 hover:shadow-lg cursor-pointer hover:scale-105 transition transform">
            <h2 className="text-2xl font-semibold mb-3">{p.name}</h2>
            <div>
            <img className="w-full h-40 bg-white object-cover rounded-lg" src={p.img} alt="" />
            </div>
            <p className="text-gray-600 mt-2">{p.desc}</p>
            <p className="mt-3 font-bold text-indigo-600">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
