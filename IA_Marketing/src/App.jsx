import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import AboutUs from "./components/Home";
import Team from "./components/Team";
import PricingSection from "./components/PricingSection";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-red-300">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/PricingSection" element={<PricingSection />} />
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;

// function App() {
//   return (
//     <header>
//       <Router>
//         <NavBar />
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/Profile" element={<Profile />} />
//           <Route path="/Form" element={Form} />
//         </Routes>
//       </Router>
//     </header>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <main className="bg-red-300">
//           <NavBar />
//           <Link to='/'>AboutUs
//           </Link>

//           <Link to="/Team">Team
//           </Link>

//           <Link path="/PricingSection">Pricing
//           </Link>

//           <Link to="/ContactForm">Contact
//           </Link>
//           <Footer />
//       </main>

//       <Switch>
//         <Route path="/" exact element={<AboutUs />} />
//         <Route path="/Team" element={<Team />} />
//         <Route path="/PricingSection" element={<PricingSection />} />
//         <Route path="/ContactForm" element={<ContactForm />} />
//       </Switch>

//     </BrowserRouter>
//   );
// }

// export default App;
