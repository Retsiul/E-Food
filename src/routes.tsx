import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Categories from "./pages/List";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<Categories />} />
    </Routes>
  );
};

export default Rotas;
