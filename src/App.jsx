import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import "./index.css";
import "./App.css";

const navLinkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-semibold transition sm:text-base ${
    isActive
      ? "bg-coffee-roast text-coffee-latte"
      : "text-white hover:bg-coffee-roast hover:text-coffee-latte"
  }`;

function App() {
  return (
    <div className="min-h-screen">
      <nav className="w-full bg-coffee-dark px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 sm:gap-6">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coffee-crema text-sm font-extrabold text-coffee-dark">
              BH
            </span>
            <span className="text-xl font-bold text-white">
              Brew Haven
            </span>
          </NavLink>

          <div className="flex items-center gap-4 sm:gap-6">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/products" className={navLinkClass}>
              Products
            </NavLink>
            <NavLink to="/checkout" className={navLinkClass}>
              Checkout
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
