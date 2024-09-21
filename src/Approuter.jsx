import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from "./Components/footer/Footer";
import Navigation from './Components/nav/Navigation'
import HeroSection from "./Components/Hero/HeroSection";
import About from "./Components/sections/about/About";
import Contact from "./Components/sections/contact/Contact";
import Tripcatalogue from "./Components/sections/tripcatalogue/Tripcatalogue";
import Tourreview from './Components/sections/tourreview/Tourreview'
import Destination from "./Components/destination/destination";
import Review from "./Components/Review/Review";


const Approuter = () => {
  return (
    <>
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/">
                    <Route path="/" index element={<HeroSection/>}/>
                    <Route path="/" index element={<Destination/>}/>
                    <Route path="/" index element={<Review/>}/> 
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/tripcatalogue" element={<Tripcatalogue/>}/>
                    <Route path="/tourreview" element={<Tourreview/>}/>
                </Route>
            </Routes>

            <Footer/>
        </Router>
    </>
  );
};

export default Approuter;