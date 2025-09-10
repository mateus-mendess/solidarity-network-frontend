import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-200 px-10 py-8 mt-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        <div className="ml-10">
          <h1 className="text-4xl font-bold text-gray-800 tracking-[1.5px]">
            SOLIDARY NETWORK
          </h1>
          <p className="text-gray-600 mt-2">
            Conectando voluntários e organizações por um mundo mais solidário
          </p>
        </div>

        <nav className="flex space-x-16 ml-20">
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-900">
                ONG
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                BLOG
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                VOLUNTÁRIOS
              </a>
            </li>
          </ul>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-900">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                TERMOS DE USO
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                POLÍTICA DE PRIVACIDADE
              </a>
            </li>
          </ul>
        </nav>

        <div className="ml-10">
          <p className="text-gray-600 mb-2">SIGA-NOS</p>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-gray-600 h-6 w-6 hover:scale-110 transition" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-gray-600 h-6 w-6 hover:scale-110 transition" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-gray-600 h-6 w-6 hover:scale-110 transition" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-4 text-center text-gray-600 text-sm">
        © 2025 - Desenvolvido por Mateus Mendes
      </div>
    </footer>
  );
}

export default Footer;
