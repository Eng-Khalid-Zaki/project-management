import { useState } from "react";
export default function NewTask({ onAdd }) {
  const [enteredValue, setEnteredValue] = useState("");
  function handleEnteredValue(event) {
    setEnteredValue(event.target.value);
  }
  function handleClick() {
    onAdd(enteredValue);
    setEnteredValue("");
  }

  return (
    <div className="flex gap-4">
      <input
        type="text"
        className="w-64 bg-stone-200  px-2 py-1 rounded-sm"
        onChange={handleEnteredValue}
      />
      <button
        className="text-stone-700 hover:text-stone-950 px-2 py-1 rounded-sm"
        onClick={handleClick}
      >
        Add task
      </button>
    </div>
  );
}
