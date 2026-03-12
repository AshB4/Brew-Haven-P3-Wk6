import { NavLink, Route, Routes } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-semibold transition sm:text-base ${
    isActive
      ? "bg-coffee-roast text-coffee-latte"
      : "text-white hover:bg-coffee-roast hover:text-coffee-latte"
  }`;

function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold sm:text-5xl">Welcome</h1>
      <p className="mt-4 max-w-2xl text-lg text-coffee-roast">
        Welcome to Brew Haven, your neighborhood coffee stop for freshly brewed
        favorites and handcrafted blends.
      </p>
    </main>
  );
}

function ProductsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold sm:text-4xl">Products</h1>
      <p className="mt-4 text-lg text-coffee-roast">
        Explore our seasonal beans, signature blends, and brew gear.
      </p>
    </main>
  );
}

function CheckoutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold sm:text-4xl">Checkout</h1>
      <p className="mt-4 text-lg text-coffee-roast">
        Review your cart and complete your order.
      </p>
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <nav className="w-full bg-coffee-dark px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-4 sm:justify-start sm:gap-6">
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
