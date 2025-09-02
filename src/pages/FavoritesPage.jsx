import MovieCard from "../components/MovieCard";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FavoritesPage = () => {
  const [favorites] = useLocalStorage("favorites", []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🎬 Meus Favoritos</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600">Você ainda não adicionou nenhum filme aos favoritos.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              poster={movie.poster}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
