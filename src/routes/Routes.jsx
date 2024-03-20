import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home/Home";
import whatsapp from "./../assets/whatsapp.png";

const routes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>

      <div className="fixed bottom-0 right-0 p-6">
        <img
          src={whatsapp}
          alt="WhatsApp"
          className="w-14 h-14 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default routes;
