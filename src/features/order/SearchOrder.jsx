import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const naviagte = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    naviagte(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Serach order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="py-2text-sm w-28 rounded-full bg-yellow-100 px-4 transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
