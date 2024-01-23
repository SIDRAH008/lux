import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./pages/header";
import ServicePage from "./pages/services";
import PropertyPage from "./pages/properties";
import Chatbot from "./pages/chatbot";
import MortgageCalculator from "./pages/mortgage";
import Contact from "./pages/contact";
import Dashbord from "./pages/Dashbord/login";


const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/properties" element={<PropertyPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path ="/login" element ={<Dashbord/>} />
          <Route path="/mortgage" element={<MortgageCalculator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
