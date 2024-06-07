import logo from "../../../public/logo.png";
export default function NoProjectSelected() {
  return (
    <main className="mt-24 text-center mx-auto w-2/3">
      <img src={logo} alt="logo image" className="w-16 h-16 m-auto" />
      <h2 className="my-4 font-bold text-stone-500 text-xl">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <button className="mt-8 text-xs md:text-base rounded-md px-4 py-2 bg-stone-700 text-stone-400 hover:text-stone-100 hover:bg-stone-600">
        create new project
      </button>
    </main>
  );
}
