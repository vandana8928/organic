import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Service from "./component/Service";
import Brand from "./component/Brand";
import Product from "./component/Product";
import MainHome from "./MainHome";
import Topbar from "./component/Topbar";
import Buttombar from "./component/Buttombar";

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
        </Routes>
        <Buttombar />
      </BrowserRouter>
    </div>
  );
}

export default App;
