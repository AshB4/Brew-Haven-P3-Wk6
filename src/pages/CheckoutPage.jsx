import BeansImg from "../assets/Pile-Of-Coffe-Beans.webp";

function CheckoutPage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BeansImg})` }}
    >
      <div className="absolute inset-0 bg-coffee-latte/85"></div>

      <section className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-12">
        <div className="w-full max-w-xl rounded-xl bg-coffee-latte p-8 shadow-xl">
          <h1 className="text-center text-4xl font-bold text-coffee-dark">
            Payment Details
          </h1>
          <p className="mt-2 text-center text-coffee-roast">
            Complete your purchase securely.
          </p>

          <form className="mt-8 space-y-4">
            <input
              className="input-style"
              type="text"
              placeholder="Cardholder Name"
            />
            <input
              className="input-style"
              type="text"
              placeholder="Card Number"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                className="input-style"
                type="text"
                placeholder="Expiration Date"
              />
              <input className="input-style" type="text" placeholder="CVV" />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-coffee-caramel px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-coffee-roast"
            >
              Pay Now
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default CheckoutPage;
