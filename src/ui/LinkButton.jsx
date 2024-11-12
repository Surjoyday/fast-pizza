import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to, ...props }) {
  const naviagte = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (!to)
    return (
      <button onClick={() => naviagte(-1)} className={className}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
