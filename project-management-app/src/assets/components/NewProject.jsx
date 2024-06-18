import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";
export default function AddNewProject({ onFinish, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    const newProject = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };
    onFinish(newProject);
  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className="my-4 font-bold text-stone-700 text-xl">
          Invalid Inputs
        </h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you have an invalid input
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you entered valid inputs for all input fields
        </p>
      </Modal>
      <main className="w-[35rem] mt-16">
        <div className="flex flex-row-reverse gap-4 w-full my-4">
          <button
            className="bg-stone-900 text-white rounded py-2 px-4"
            onClick={handleSave}
          >
            Save
          </button>
          <button className="py-2 px-4" onClick={onCancel}>
            Cancel
          </button>
        </div>
        <Input type="text" ref={title} label="Title" />
        <Input type="text" ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </main>
    </>
  );
}
