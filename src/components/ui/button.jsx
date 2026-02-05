export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`rounded-2xl px-6 py-3 font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
}
