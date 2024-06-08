import Input from "./Input.jsx";
import { useRef } from "react";
export default function AddNewProject({ onFinish }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    const newProject = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };
    onFinish(newProject);
  }
  return (
    <main className="w-[35rem] mt-16">
      <div className="flex flex-row-reverse gap-4 w-full my-4">
        <button
          className="bg-stone-900 text-white rounded py-2 px-4"
          onClick={handleSave}
        >
          Save
        </button>
        <button className="py-2 px-4">Cancel</button>
      </div>
      <Input type="text" ref={title} label="Title" />
      <Input type="text" ref={description} label="Description" textarea />
      <Input type="date" ref={dueDate} label="Due Date" />
    </main>
  );
}
