import logo from "../../assets/logo.png";
import Button from "./Button.jsx";
export default function NoProjectSelected({ onAddNewProject }) {
  return (
    <main className="mt-24 text-center mx-auto w-2/3">
      <img src={logo} alt="logo image" className="w-16 h-16 m-auto" />
      <h2 className="my-4 font-bold text-stone-500 text-xl">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <Button onClick={onAddNewProject}>Create New Project</Button>
    </main>
  );
}
