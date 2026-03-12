function ProductCard({ title, image, price, description }) {
  return (
    <article className="rounded-xl bg-coffee-latte p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-semibold text-coffee-dark">{title}</h3>
      <p className="mt-1 text-sm font-medium text-coffee-roast">${price}</p>

      <div className="mt-2 flex justify-center gap-1">
        <span className="h-2 w-2 rounded-full bg-coffee-roast"></span>
        <span className="h-2 w-2 rounded-full bg-coffee-roast"></span>
        <span className="h-2 w-2 rounded-full bg-coffee-roast"></span>
        <span className="h-2 w-2 rounded-full bg-coffee-crema"></span>
        <span className="h-2 w-2 rounded-full bg-coffee-crema"></span>
      </div>

      <img
        src={image}
        alt={title}
        className="mb-4 mt-4 h-36 w-full rounded-lg object-cover"
      />

      <p className="text-sm text-coffee-roast">{description}</p>

      <div className="mt-5">
        <button
          type="button"
          className="rounded-md bg-coffee-mint px-4 py-2 text-sm text-white shadow-sm hover:opacity-90"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
