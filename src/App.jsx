import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AmazonCart from "./components/AmazonCart";
import Wishlist from "./components/Wishlist";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<AmazonCart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Route>
        </Routes>
      </BrowserRouter>
          </RecoilRoot>
    </>
  );
}

export default App;
