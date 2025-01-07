import React from "react";

// Import images
import nails1 from "../images/nails1.jpg";
import nails2 from "../images/nails2.jpg";
import nails3 from "../images/nails3.jpg";
import nails4 from "../images/nails4.jpg";
import nails5 from "../images/nails5.jpg";
import nails6 from "../images/nails6.jpg";
import nails7 from "../images/nails7.jpg";
import nails8 from "../images/nails8.jpg";
import nails9 from "../images/nails9.jpg";
import nails10 from "../images/nails10.jpg";

const GalleryPage = () => {
  const images = [
    nails1,
    nails2,
    nails3,
    nails4,
    nails5,
    nails6,
    nails7,
    nails8,
    nails9,
    nails10,
  ];

  return (
    <section id="gallery" className="py-12 bg-green-50">
      <div  className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-[rgba(0,89,40,0.852)]">Our Work</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded shadow">
              <img
                src={image}
                alt={`Nail Art ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
