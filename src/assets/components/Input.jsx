import { forwardRef } from "react";
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "bg-stone-200 border-b border-stone-300 focus:border-b-stone-600 focus:outline-none w-full p-1 text-stone-600";
  return (
    <p className="my-4 flex flex-col gap-1">
      <label className="uppercase font-bold text-sm text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});
export default Input;
