import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import NavBar from "./components/Home/NavBar";
import LandingPage from "./components/Home/LandingPage";
import Team from "./components/Home/Team";
import PricingSection from "./components/Home/PricingSection";
import ContactForm from "./components/Home/Contact";
import Footer from "./components/Home/Footer";

import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";

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
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
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
