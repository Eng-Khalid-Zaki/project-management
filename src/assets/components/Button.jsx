export default function Button({ children, ...props }) {
  return (
    <button
      className="rounded-md px-4 py-2 bg-stone-800 text-stone-500 hover:text-stone-300 hover:bg-stone-500"
      {...props}
    >
      {children}
    </button>
  );
}
