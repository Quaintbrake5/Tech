import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from "./Components/Footer";
import Navigation from './Components/Navigation'
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Tripcatalogue from "./Components/Tripcatalogue";
import Tourreview from './Components/Tourreview'
// import Destination from "./Components/destination/destination";
// import Review from "./Components/Review/Review";


const Approuter = () => {
  return (
    <>
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/">
                    <Route path="/" index element={<HeroSection/>}/>
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