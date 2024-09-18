import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navigation from './Components/nav/Navigation'

const Approuter = () => {
  return (
    <>
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/">
                    
                </Route>
            </Routes>
        </Router>
    </>
  );
};

export default Approuter;