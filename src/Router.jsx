import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./pages/header";
import ServicePage from "./pages/services";
import Chatbot from "./pages/chatbot";
import Contact from "./pages/contact";
import PropertyList from "./pages/properties";
import Footer from "./component/footer";
import Login from "./pages/login";
import Listing from "./pages/listing";
import CreateListing from "./component/createlisting";
import Mortgage from "./pages/Mortgage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createlisting" element={<CreateListing />} />
          <Route path="/mortgage" element={<Mortgage />} />
        
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
