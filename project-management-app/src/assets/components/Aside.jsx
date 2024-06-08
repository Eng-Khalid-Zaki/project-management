import Button from "./Button.jsx";
export default function Aside({ onAddNewProject, projects }) {
  return (
    <aside className="w-1/3 md:w-72 bg-stone-900 text-stone-50 px-8 py-16 rounded-r-xl">
      <h2 className="font-bold text-xl uppercase text-stone-200 mb-8">
        Your Projects
      </h2>
      <div>
        <Button onClick={onAddNewProject}>+ Add Project</Button>
      </div>

      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="text-left px-2 py-1 w-full rounded-sm my-1 text-stone-400 hover:bg-stone-800 hover:text-stone-200">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
