import Button from "../components/Button";

function ProductCard() {
  return (
    <div className="bg-white shadow p-4 rounded">

      <img
        src="https://picsum.photos/300"
        className="rounded mb-4"
      />

      <h3 className="text-xl font-bold">
        Colombian Roast
      </h3>

      <p className="text-sm text-gray-500">
        Smooth medium roast coffee
      </p>

      <p className="font-semibold mt-2">
        $18
      </p>

      <Button text="Add to Cart" />
    </div>
  );
}

export default ProductCard;