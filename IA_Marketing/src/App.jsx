// import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //useLocation

import NavBar from "./components/Home/NavBar";
import LandingPage from "./components/Home/LandingPage";
import Team from "./components/Home/Team";
import PricingSection from "./components/Home/PricingSection";
import ContactForm from "./components/Home/Contact";
import Footer from "./components/Home/Footer";
import NotFound from "./components/Home/NotFound";

import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";

// COMPONENTEDE DEL DASHBOARD ============
import ECommerce from "./pages/ECommerce";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Prediction from "./pages/Prediction";

import DefaultLayout from "./layout/DefaultLayout";

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

          <Route path="/user" element={<DefaultLayout />}>
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/settings" element={<Settings />} />

            <Route path="/user/charts" element={<ECommerce />} />

            <Route path="/user/calendar" element={<Calendar />} />
            <Route path="/user/prediction" element={<Prediction />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
export default App;
