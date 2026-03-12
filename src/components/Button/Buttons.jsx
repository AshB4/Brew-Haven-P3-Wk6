export default function Buttons({ text, onClick, variant = "primary" }) {

  const base =
    "px-4 py-2 rounded font-semibold transition";

  const styles = {
    primary: "bg-coffee-roast text-white hover:bg-coffee-dark",
    secondary: "bg-coffee-crema text-coffee-dark hover:bg-coffee-roast hover:text-white"
  };

  return (
    <button
      className={`${base} ${styles[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}