import ColdBrewKit from "../assets/Cold-Brew-Kit.webp";
import CoffeeLeafBg from "../assets/Coffee-Leafs.webp";
import ColumbianRoast from "../assets/Columbian-Roast.webp";
import EspressoBlend from "../assets/Espresso-Blend.webp";
import ProductCard from "../components/Cards/ProdCard";

const products = [
  {
    title: "Columbian Roast",
    image: ColumbianRoast,
    description: "Smooth medium roast with caramel notes.",
    price: "18",
  },
  {
    title: "Espresso Blend",
    image: EspressoBlend,
    description: "Bold and balanced blend for rich crema.",
    price: "20",
  },
  {
    title: "Cold Brew Kit",
    image: ColdBrewKit,
    description: "Everything you need for easy cold brew.",
    price: "35",
  },
];

function ProductsPage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${CoffeeLeafBg})`,
        backgroundSize: "100%",
      }}
    >
      <div className="absolute inset-0 bg-coffee-latte/75"></div>
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-center text-4xl font-bold text-coffee-dark">
          Products
        </h1>
        <p className="mt-2 text-center text-coffee-roast">
          Explore our seasonal beans, signature blends, and brew gear.
        </p>

        <div className="my-10 flex items-center justify-center gap-4">
          <span className="h-[2px] w-20 bg-coffee-crema"></span>
          <h2 className="text-center text-xl font-semibold text-coffee-dark">
            Our Bestsellers
          </h2>
          <span className="h-[2px] w-20 bg-coffee-crema"></span>
        </div>

        <section className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default ProductsPage;
