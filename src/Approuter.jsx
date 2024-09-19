import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navigation from './Components/nav/Navigation'
import HeroSection from "./Components/Hero/HeroSection";

const Approuter = () => {
  return (
    <>
        <Router>
            <Navigation/>
            <HeroSection/>
            <Routes>
                <Route path="/">
                    
                </Route>
            </Routes>
        </Router>
    </>
  );
};

export default Approuter;