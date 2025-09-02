import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useState, useEffect } from "react";

const MovieCard = ({ title, poster, year, id }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [isFavorite, setIsFavorite] = useState(false);

  // checa se já está favoritado
  useEffect(() => {
    setIsFavorite(favorites.some((f) => f.id === id));
  }, [favorites, id]);

  const toggleFavorite = (e) => {
    e.preventDefault(); // evita abrir link
    e.stopPropagation();

    if (isFavorite) {
      setFavorites(favorites.filter((f) => f.id !== id));
    } else {
      setFavorites([...favorites, { id, title, poster, year }]);
    }
  };

  return (
    <Link to={`/movie/${id}`} className="block">
      <div className="relative flex flex-col gap-3 bg-white border-0 rounded overflow-hidden shadow hover:shadow-lg transition-shadow">
        {/* botão favoritar */}
        <button
          onClick={toggleFavorite}
          className={`absolute top-2 right-2 p-2 rounded-full shadow ${
            isFavorite ? "bg-yellow-400 text-white" : "bg-white text-gray-600"
          }`}
        >
          {isFavorite ? "★" : "☆"}
        </button>

        {poster ? (
          <img src={poster} alt={title} className="w-full h-64 object-cover" />
        ) : (
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">Sem imagem</span>
          </div>
        )}

        <div className="p-2 text-center">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-500">{year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
