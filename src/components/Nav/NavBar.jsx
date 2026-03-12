export default function Navbar() {
  return (
    <nav className="bg-coffee-dark text-white flex justify-between items-center px-6 py-4">

      <h1 className="text-xl font-bold">
        Brew Haven
      </h1>

      <div className="flex gap-6">

        <a
          href="#"
          className="hover:text-coffee-crema transition"
        >
          Home
        </a>

        <a
          href="#"
          className="hover:text-coffee-crema transition"
        >
          Coffee
        </a>

        <a
          href="#"
          className="hover:text-coffee-crema transition"
        >
          Checkout
        </a>

      </div>

    </nav>
  );
}