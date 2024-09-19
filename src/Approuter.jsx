import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from "./Components/footer/Footer";

const Approuter = () => {
  return (
    <>
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/">
                   
                </Route>
            </Routes>
            <Footer/>
        </Router>
    </>
  );
};

export default Approuter;