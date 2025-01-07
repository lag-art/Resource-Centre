import React, { useState } from "react";

// Importing images
import TrendyLogo from "../images/logo.jpg";
import KevNails from "../profile/kevnails.jpeg";
import NailedByMash from "../profile/nailedbymash.jpeg";
import NailsRamos from "../profile/nailsramos.jpeg";
import NailsAite from "../profile/nailsaite.jpeg";
import IanNails from "../profile/iannails.jpeg";
import NailedByManesh from "../profile/maneshnails.jpeg";
import KamwanaNails from "../profile/kamwana.jpeg";
import TonyNails from "../profile/tonynails.jpeg";
import Mristi from "../profile/mristi.jpeg";

const Booking = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  // List of services
  const services = [
    "Gel",
    "Matte Gel",
    "French",
    "Gel Ombre",
    "Plain Ins",
    "Gents Manicure",
    "Reg Ins + Scrubbing",
    "Normal Plain",
    "Regular P.G",
    "Gents Pedicure",
    "Signature",
    "Jelly",
    "Natural Builder Gel",
    "Natural Acrylic",
    "Tips + Overlay",
    "Extended",
    "Tips Gel Plain",
    "Acrylic + Gel",
    "Acrylic Powder",
    "Sculpting",
    "Builder Infill/Refill",
    "Acrylic Infill/Refill",
    "Toe Gel",
    "Overlay Gel",
    "Tips Gel",
    "Acrylic Gel",
    "Acrylic Powder",
  ];

  // WhatsApp numbers mapping
  const whatsappContacts = [
    { img: TrendyLogo, name: "Trendy Nails Shop", number: "++254 792 979705" },
    { img: KevNails, name: "Kev Nails", number: "+254 742 491838" },
    { img: NailedByMash, name: "Nailed By Mash", number: "+254 792 979705" },
    { img: NailsRamos, name: "Nails Ramos", number: "+254 741 634523" },
    { img: NailsAite, name: "Nails Aite", number: "++254 711 631997" },
    { img: IanNails, name: "Ian Nails", number: "+254 742 993319" },
    { img: NailedByManesh, name: "Nailed By Manesh", number: "+254 745 609020" },
    { img: KamwanaNails, name: "Kamwana Nails", number: "+254 705 572704" },
    { img: TonyNails, name: "Tony Uki", number: "+254 718 813555" },
    { img: Mristi, name: "Ricky ", number: "+254 704 401043" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, service, date, time } = formData;

    if (name && phone && service && date && time) {
      setShowPopup(true);
    } else {
      alert("Please fill out all the fields before proceeding.");
    }
  };

  const handleWhatsAppRedirect = (number) => {
    const { name, phone, service, date, time } = formData;
    const message = `Hello, my name is ${name}. I would like to book a ${service} service on ${date} at ${time}. My phone number is ${phone}.`;
    const whatsappUrl = `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(
      message
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
    });

    setShowPopup(false); // Close pop-up after redirect
  };

  return (
    <section id="booking" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[rgba(0,89,40,0.852)] mb-8">
          Book an Appointment
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Select Service
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="" disabled>
                Choose a service
              </option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-900 text-white px-6 py-3 rounded-md hover:bg-yellow-400 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </form>
        {showPopup && (
          <div
            className="fixed top-20 right-4 bg-white p-6 rounded-lg shadow-xl border border-gray-200 z-50 w-72 animate-fade-in"
            style={{ maxHeight: "85vh", overflowY: "auto" }}
          >
            <h3 className="text-lg font-bold mb-4 text-center">
              Choose your Tech
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {whatsappContacts.map((contact, index) => (
                <div
                  key={index}
                  className="border p-2 text-center cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300"
                  onClick={() => handleWhatsAppRedirect(contact.number)}
                >
                  <img
                    src={contact.img}
                    alt={contact.name}
                    className="w-16 h-16 mx-auto rounded-full"
                  />
                  <p>{contact.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Booking;
