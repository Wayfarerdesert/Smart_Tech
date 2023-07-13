import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Team from "./components/Team";
import PricingSection from "./components/PricingSection";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
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

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home"

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
