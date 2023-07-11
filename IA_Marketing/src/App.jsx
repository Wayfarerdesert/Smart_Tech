import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Team from "./components/Team";
import PricingSection from "./components/PricingSection";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
// import React, { useRef } from 'react';

// function App() {
//   const homeRef = useRef(null);
//   const teamRef = useRef(null);
//   const pricingRef = useRef(null);
//   const contactRef = useRef(null);

//   const scrollToSection = (ref) => {
//     ref.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <main>
//       <NavBar scrollToSection={scrollToSection} />
//       <Home ref={homeRef} />
//       <Team ref={teamRef} />
//       <PricingSection ref={pricingRef} />
//       <ContactForm ref={contactRef} />
//       <Footer />
//     </main>
//   );
// }

// export default App;

function App() {
  return (
    <main >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/PricingSection" element={<PricingSection />} />
          <Route path="/Contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
