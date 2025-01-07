import React from "react";

const services = [
  {
    category: "Application",
    items: [
      { name: "Gel", price: "700 shillings" },
      { name: "Matte Gel", price: "800 shillings" },
      { name: "French", price: "900 shillings" },
      { name: "Gel Ombre", price: "1000 shillings" },
    ],
  },
  {
    category: "Manicure",
    items: [
      { name: "Plains Ins", price: "500 shillings" },
      { name: "Gents", price: "500 shillings" },
      { name: "Regular Ins (including scrubbing)", price: "1000 shillings" },
    ],
  },
  {
    category: "Pedicure",
    items: [
      { name: "Normal Plains", price: "800 shillings" },
      { name: "Regular P.G", price: "1500 shillings" },
      { name: "Gents", price: "1000 shillings" },
      { name: "Signature", price: "2000 shillings" },
      { name: "Jelly", price: "2500 shillings" },
    ],
  },
  {
    category: "Overlay",
    items: [
      { name: "Nature Builder Gel", price: "1500 shillings" },
      { name: "Natural Acrylic", price: "2000 shillings" },
      { name: "Tips + Overlay", price: "2000 shillings" },
      { name: "Extended", price: "2500 shillings" },
    ],
  },
  {
    category: "Nail Extensions",
    items: [
      { name: "Tips Gel Plain", price: "1500 shillings" },
      { name: "Acrylic + Gel", price: "3000 shillings" },
      { name: "Acrylic Powder", price: "3500 shillings" },
      { name: "Sculpting", price: "4500 shillings" },
    ],
  },
  {
    category: "Infill/Refill",
    items: [
      { name: "Builder", price: "1500 shillings" },
      { name: "Acrylic", price: "2000 shillings" },
    ],
  },
  {
    category: "Toe Nails",
    items: [
      { name: "Toe Gel", price: "700 shillings" },
      { name: "Overlay Gel", price: "1500 shillings" },
      { name: "Tips Gel", price: "1500 shillings" },
      { name: "Acrylic Gel", price: "2000 shillings" },
      { name: "Acrylic Powder", price: "2000 shillings" },
    ],
  },
];

const ServicesPage = () => {
  return (
    <section id="service" className="py-12 bg-gray-200">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-[rgba(0,89,40,0.852)]">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-yellow-400 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-[rgba(0,89,40,0.852)]">
                {service.category}
              </h2>
              <ul>
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between py-2 border-b last:border-none"
                  >
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
