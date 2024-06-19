import NewTask from "./NewTask.jsx";
export default function Task({ onAdd, onDelete, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-800 bm-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="py-4 text-stone-950">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="mt-2 p-4 bg-stone-100">
          {tasks.map((task) => (
            <li className="my-2 py-1 px-2 flex justify-between" key={task.id}>
              <span>{task.text}</span>
              <button
                className="text-stone-600 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
