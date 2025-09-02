import MovieCard from './MovieCard';

const MovieList = ({ filmes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
      {filmes.length > 0 ? (
        filmes.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          Nenhum filme encontrado.
        </p>
      )}
    </div>
  );
};

export default MovieList;
