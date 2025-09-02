import { useState } from "react";

const SearchBar = ({ buscarFilmesPorTitulo }) => {
  const [titulo, setTitulo] = useState("");

  const handleClick = () => {
    if (titulo.trim() !== "") {
      buscarFilmesPorTitulo(titulo);
    }
  };

  return (
    <div className="flex w-full sm:w-1/2 mx-auto border rounded bg-[#f2f2f2] mt-4 p-2">
      <input
        type="text"
        placeholder="Buscar Filmes..."
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="flex-1 p-2 bg-transparent focus:outline-none"
      />
      <button
        onClick={handleClick}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
