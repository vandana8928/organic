import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Service from "./component/Service";
import Brand from "./component/Brand";
import Product from "./component/Product";
import MainHome from "./MainHome";
import Topbar from "./component/Topbar";
import Buttombar from "./component/Buttombar";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Brand" element={<Brand />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Buttombar />
      </BrowserRouter>
    </div>
  );
}

export default App;
