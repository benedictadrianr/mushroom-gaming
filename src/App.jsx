import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { Product } from "./components/Product";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <Routes>
          <Route path="/mushroom-gaming" element={<Home />} />
          <Route
            path="/mushroom-gaming/product/:productType"
            element={<Product />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
