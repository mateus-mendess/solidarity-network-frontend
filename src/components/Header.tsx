import logo from "../assets/logo_solidarity.png";
import {Search} from "lucide-react";
import {Link} from "react-router-dom";

function Header() {
    return (
      <header className="flex items-center justify-between p-2 border-b border-blue-400">
        <img src={logo} alt="" className="h-25 ml-18" />

        <nav>
          <ul className="flex space-x-10 ml-50 text-gray-600">
            <li>
              <a href="/" className="hover:text-blue-500">
                VOLUNTÁRIO
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-500">
                ONG
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-500">
                BLOG
              </a>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-500">
                ENTRAR
              </Link>
            </li>
          </ul>
        </nav>

        <div className=" relative mr-20">
          <input
            type="text"
            placeholder="Buscar por ONGs"
            className="px-4 py-2 w-100 pr-10 rounded-full border-2 border-blue-400 focus: outline-none"
          />
          <Search className="absolute left-90 top-1/2 -translate-y-1/2 text-blue-400"></Search>
        </div>
      </header>
    );
}

export default Header;