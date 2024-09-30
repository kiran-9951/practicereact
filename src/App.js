
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./PAGES/HOME/home";
import Menu from "./PAGES/MENU/menu";
import Contact from "./PAGES/CONTACT/contact";


function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">HOME</Link>
 
        <Link to="/menu">MENU</Link>

        <Link to="/contact">CONTACT</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
