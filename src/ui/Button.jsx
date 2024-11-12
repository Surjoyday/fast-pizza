import classNames from "classnames";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, ...props }) {
  const btnStyles = classNames({
    "inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-sm":
      type !== "secondary",

    "px-4 py-3 md:px-6 md:py-4": type === "primary",
    "px-4 py-2 md:px-5 md:py-2.5 text-xs": type === "small",

    "inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 text-sm":
      type === "secondary",
  });

  if (to)
    return (
      <Link to={to} className={btnStyles}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} {...props} className={btnStyles}>
      {children}
    </button>
  );
}

export default Button;
