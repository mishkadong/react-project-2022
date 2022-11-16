import { Routes, Route } from "react-router-dom";

import "./App.scss";
import MainLayout from "./pages/MainLayout";
import Main from "./pages/Main";
import Accessories from "./pages/Accessories";
import Brands from "./pages/Brands";
import Clothing from "./pages/Clothing";
import Dresses from "./pages/Dresses";
import NewIn from "./pages/NewIn";
import Sale from "./pages/Sale";
import Shoes from "./pages/Shoes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/dresses" element={<Dresses />} />
          <Route path="/new_in" element={<NewIn />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/shoes" element={<Shoes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
