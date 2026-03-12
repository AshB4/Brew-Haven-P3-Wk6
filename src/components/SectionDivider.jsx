export default function SectionDivider({ title }) {
  return (
    <div className="my-10 flex items-center justify-center gap-4">
      <span className="h-[2px] flex-1 bg-coffee-crema"></span>

      <h2 className="text-center text-xl font-semibold text-coffee-dark">
        {title}
      </h2>

      <span className="h-[2px] flex-1 bg-coffee-crema"></span>
    </div>
  );
}
