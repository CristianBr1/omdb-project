import { memo, useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

const Home = ({ filmes, carregarFilmes, buscarFilmesPorTitulo }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    carregarFilmes(page);
  }, [page]);

  if (!filmes) return <p>Carregando...</p>;

  return (
    <div className="Home p-4">
      {/* Barra de busca só na Home */}
      <SearchBar buscarFilmesPorTitulo={buscarFilmesPorTitulo} />

      <MovieList filmes={filmes} />
      <Pagination currentPage={page} onPageChange={setPage} />
    </div>
  );
};

export default memo(Home);
