export default function Aside() {
  return (
    <aside className="w-1/3 md:w-72 bg-stone-900 text-stone-50 px-8 py-16 rounded-r-xl">
      <h2 className="font-bold text-xl uppercase text-stone-200 mb-8">
        Your Projects
      </h2>
      <button className="rounded-md px-4 py-2 bg-stone-800 text-stone-500 hover:text-stone-300 hover:bg-stone-500">
        + Add Project
      </button>
    </aside>
  );
}
