// src/components/Pagination.jsx
export default function Pagination({ currentPage, onPageChange }) {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Anterior
      </button>
      <span className="px-2">Página {currentPage}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Próxima
      </button>
    </div>
  );
}
