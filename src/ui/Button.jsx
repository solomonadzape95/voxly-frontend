// eslint-disable-next-line react/prop-types
function Button({ children, type = "md" }) {
  const size = {
    lg: " px-4 py-3 text-md",
    md: " px-3 py-2 text-sm",
  };
  return (
    <button
      className={`bg-[#044FC7] rounded-lg text-white ${size[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
