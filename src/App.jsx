import "./App.css";
import Navbar from "./components/navbar";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";

function App() {
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/favorites" element={<Favorites></Favorites>} />
          <Route path="//recipe-item/:id" element={<Details></Details>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
