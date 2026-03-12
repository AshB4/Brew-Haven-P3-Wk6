import { Link } from "react-router-dom";
import HeroImg from "../assets/HeroImg.webp";
import ColdBrewKit from "../assets/Cold-Brew-Kit.webp";
import ColumbianRoast from "../assets/Columbian-Roast.webp";
import EspressoBlend from "../assets/Espresso-Blend.webp";
import ProductCard from "../components/Cards/ProdCard";
import SectionDivider from "../components/SectionDivider";

const featuredProducts = [
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

function HomePage() {
  return (
    <main>
      <section className="border-b border-coffee-crema/40 bg-coffee-latte">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 py-24 md:grid-cols-2">
          <div>
            <span className="rounded-full bg-coffee-crema/40 px-4 py-1 text-sm text-coffee-dark">
              Handcrafted Daily
            </span>
            <h1 className="mt-4 text-5xl font-bold leading-tight text-coffee-dark md:text-6xl">
              Experience Brew Haven Coffee
            </h1>
            <p className="mt-3 text-lg text-coffee-roast">
              Slow drip coffee.
              <br />
              Small batch roasts.
            </p>
            <p className="mt-3 text-coffee-mint">
              Fresh beans delivered from roasters around the world.
            </p>
            <Link
              to="/products"
              className="mt-6 inline-block rounded-lg bg-coffee-caramel px-7 py-3 font-semibold text-white shadow-md transition hover:shadow-lg"
            >
              Explore Products
            </Link>
            <p className="mt-6 text-sm text-coffee-roast">
              Ethically sourced beans • Fresh roasted weekly • Delivered
              nationwide
            </p>
          </div>

          <div className="flex justify-center">
            <div className="rounded-2xl bg-white/40 p-4 shadow-md">
              <img
                src={HeroImg}
                alt="coffee in cup with warm cafe vibe"
                className="h-[360px] w-[560px] rounded-xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-28 max-w-7xl px-8 pb-20">
        <SectionDivider title="Our Bestsellers" />

        <section className="grid gap-8 md:grid-cols-3">
          {featuredProducts.map((product) => (
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

export default HomePage;
