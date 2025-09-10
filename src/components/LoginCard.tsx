import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import AccountTypeSelectorCard from "./AccountTypeSelectorCard";
import Modal from "../components/Modal";

function LoginCard() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-3 shadow-[10px_10px_0px_rgba(156,163,175,1)] rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-6xl text-center font-bold text-blue-400">Login</h2>

        <form method="Post" className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              className="mt-1 w-full px-4 py-2 border-2 rounded-full border-gray-700 focus:outline-none"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="Digite sua senha"
              className="mt-1 w-full px-4 py-2 pr-10 border-2 rounded-full border-gray-700 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[40%] transform"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            <div className="text-right mt-2">
              <Link
                to="/forgot-password"
                className=" text-blue-500 font-medium hover:underline"
              >
                Esqueceu sua senha?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className=" w-1/2 mx-auto block font-semibold border-3 border-black bg-blue-400 text-white px-10 py-2 rounded-xl shadow-[6px_6px_0px_rgba(0,0,0,1)]"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-gray-600 mt-5">
          Ainda não possui uma conta?
          <button
            onClick={() => setOpen(true)}
            className="text-blue-500 font-medium hover:underline"
          >
            Cadastre-se
          </button>
        </p>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <AccountTypeSelectorCard />
      </Modal>
    </div>
  );
}

export default LoginCard;
