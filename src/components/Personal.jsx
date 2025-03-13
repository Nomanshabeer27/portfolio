// import Hero from "./Hero";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navber";
import About from "./About";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import Skill from "./Skill";
const Portfolio = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/skill' element={<Skill />}  ></Route>
        </Routes>
      </Router>
    </>
  );
};
export default Portfolio;