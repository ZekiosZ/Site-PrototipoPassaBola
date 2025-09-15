import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b bg-gray-900 border-t border-gray-800 p-4 flex items-center justify-between shadow-md relative">
      {/* Logo */}
      <div className="flex items-center gap-2 text-white drop-shadow-md">
        <img src="/logo.png" alt="Logo" className="h-12 w-12 rounded-full" />
        <h1 className="text-3xl font-bold">Passa a Bola</h1>
      </div>

      {/* Botão menu (visível só no celular) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white md:hidden z-50"
      >
        {menuOpen ? (
          <span className="material-icons">close</span>
        ) : (
          <span className="material-icons">menu</span>
        )}
      </button>

      {/* Navegação */}
      <nav
        className={`flex flex-col md:flex-row items-center gap-4 fixed md:static top-0 right-0 h-full md:h-auto w-64 md:w-auto bg-gray-900 md:bg-transparent p-6 md:p-0 shadow-lg md:shadow-none transform transition-transform duration-300 ease-in-out z-40
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
        md:translate-x-0`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-md border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition">Início</Link>
        <Link to="/loja" onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-md border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition">Lojas</Link>
        <Link to="/sobre" onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-md border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition">Sobre</Link>
        <Link to="/contato" onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-md border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition">Contato</Link>
        <Link to="/noticias" onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-md border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition">Notícias</Link>
        <Link to="/podcast" onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-md border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition">Podcast</Link>
        <Link to="/peneiras" onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-md border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition">Peneiras</Link>

        {/* Login separado */}
        <Link
          to="/login"
          onClick={() => setMenuOpen(false)}
          className="mt-4 md:mt-0 px-3 py-2 rounded-full border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition flex items-center gap-2"
        >
          <span className="material-icons">login</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
