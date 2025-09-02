import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const [filmes, setFilmes] = useState([]);

  const API_KEY = import.meta.env.VITE_API_KEY; // sua chave
  const BASE_URL = "https://api.themoviedb.org/3";

  // Carregar filmes populares
  async function carregarFilmes(page = 1) {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`;

    try {
      const resposta = await fetch(url);
      const dados = await resposta.json();

      const filmes = dados.results.map((filme) => ({
        id: filme.id,
        title: filme.title,
        poster: `https://image.tmdb.org/t/p/w500${filme.poster_path}`,
        year: filme.release_date
          ? new Date(filme.release_date).getFullYear()
          : "Desconhecido",
      }));

      setFilmes(filmes);
      return filmes;
    } catch (erro) {
      console.error("Erro ao buscar filmes:", erro);
    }
  }

  // Buscar filmes por título
  async function buscarFilmesPorTitulo(titulo) {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(
      titulo
    )}`;

    try {
      const resposta = await fetch(url);
      const dados = await resposta.json();

      if (dados.results) {
        setFilmes(
          dados.results.map((filme) => ({
            id: filme.id,
            title: filme.title,
            poster: `https://image.tmdb.org/t/p/w500${filme.poster_path}`,
            year: filme.release_date
              ? new Date(filme.release_date).getFullYear()
              : "Desconhecido",
          }))
        );
      } else {
        setFilmes([]);
      }
    } catch (erro) {
      console.error("Erro ao buscar filmes:", erro);
    }
  }

  useEffect(() => {
    carregarFilmes();
  }, []);

  return (
    <Router>
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 p-4">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  filmes={filmes}
                  carregarFilmes={carregarFilmes}
                  buscarFilmesPorTitulo={buscarFilmesPorTitulo}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
