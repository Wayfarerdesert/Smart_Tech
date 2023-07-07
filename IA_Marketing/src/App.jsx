import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import { AboutUs } from "./components/HeroSection";
import Team from "./components/Team";
import ContactForm from "./components/Contact";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-red-300">
      <div>
        <NavBar />
        <AboutUs />
        <Team />
        <PricingSection/>
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}

export default App;
