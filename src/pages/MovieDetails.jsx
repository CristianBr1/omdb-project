import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "4fc610df5e01ce19011e16a271c3f8c2";
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`
        );
        if (!res.ok) throw new Error("Erro ao buscar filme");

        const data = await res.json();
        console.log(data)
        setMovie({
          id: data.id,
          title: data.title,
          poster: data.poster_path
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
            : "/no-image.jpg",
          year: data.release_date
            ? new Date(data.release_date).getFullYear()
            : "Desconhecido",
          overview: data.overview || "Sem sinopse disponível",
          genres: data.genres?.map((g) => g.name).join(", ") || "N/A",
          rating: data.vote_average ? data.vote_average.toFixed(1) : "N/A",
        });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovie();
  }, [id]);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  if (error) return <p>Erro: {error}</p>;
  if (!movie) return <p>Carregando...</p>;

  return (
    <div className="flex flex-col items-center">
      <div className="p-4 flex flex-col items-center gap-3 w-200 bg-white rounded shadow">
        <button
          onClick={handleBack}
          className="self-start px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Voltar
        </button>

        <img src={movie.poster} alt={movie.title} className="rounded-lg" />
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-gray-500">{movie.year}</p>
        <p><strong>Gêneros:</strong> {movie.genres}</p>
        <p><strong>Nota:</strong> {movie.rating}</p>
        <p className="mt-4">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
