import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceSection from "./components/ServiceSection";
import Gallery from "./components/Gallery";
import BookingForm from "./components/Booking";
import FloatingArrow from "./components/FloatingArrow"
import Home from "./components/Home"

function App() {
  return (
    <div>
      <Header />
      
      <main>
        <Home />
        <ServiceSection />
        <Gallery />
        <BookingForm />
      </main>
      <Footer />
      <FloatingArrow />
      
      
    </div>
  );
}

export default App;
