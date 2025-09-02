import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="font-bold text-lg">
        Movie Explorer
      </Link>
      <nav className="flex gap-4">
        <Link
          to="/"
          className={`hover:underline ${location.pathname === "/" ? "font-bold" : ""}`}
        >
          Buscar
        </Link>
        <Link
          to="/favorites"
          className={`hover:underline ${location.pathname === "/favorites" ? "font-bold" : ""}`}
        >
          Favoritos ⭐
        </Link>
      </nav>
    </header>
  );
};

export default Header;
