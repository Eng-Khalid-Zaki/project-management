import Button from "./Button.jsx";
export default function Aside({
  onAddNewProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 md:w-72 bg-stone-900 text-stone-50 px-8 py-16 rounded-r-xl">
      <h2 className="font-bold text-xl uppercase text-stone-200 mb-8">
        Your Projects
      </h2>
      <div>
        <Button onClick={onAddNewProject}>+ Add Project</Button>
      </div>

      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "text-left px-2 py-1 w-full rounded-sm my-1 hover:bg-stone-800 hover:text-stone-200";
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
