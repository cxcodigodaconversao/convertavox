export function Button({ children, onClick, size = "md" }) {
  return (
    <button
      onClick={onClick}
      className={"bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 " + (size === "sm" ? "text-xs" : "")}
    >
      {children}
    </button>
  );
}