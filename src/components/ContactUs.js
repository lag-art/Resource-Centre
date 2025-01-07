import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="py-12 bg-[rgba(0,89,40,0.852)] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Contact Details */}
          <div>
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p>Running Hours: 8 AM - 8 PM, All Day Every Day</p>
            <p className="mt-4">📍 Location: Your Nail Salon's Address</p>
            <p>📞 Phone: +254 700 000 000</p>
            <p>✉ Email: trendy@nailsspot.com</p>
          </div>

          {/* Inquiry Form */}
          <form className="w-full max-w-md">
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-yellow-400 rounded"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-yellow-400 rounded"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-yellow-400 rounded"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
