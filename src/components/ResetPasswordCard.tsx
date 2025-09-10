import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function ResetPasswordCard() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-5xl font-bold text-blue-400 mb-6 text-center">
        Alteração de senha
      </h2>

      <div className="border-3 shadow-[10px_10px_0px_rgba(156,163,175,1)] rounded-2xl p-8 w-full max-w-md">
        <p className="border-l-6 border-blue-400 pl-4 text-gray-600 mb-5 text-sm">
          Insira sua nova senha nos campos abaixo. A senha deve conter no mínimo{" "}
          <b>
            uma letra maiúscula, uma letra minúscula, um número e um caractere
            especial (como @, !, #, etc.).
          </b>
        </p>

        <form method="Post" className="space-y-4">
          <div className="relative">
            <label htmlFor="password" className="block font-semibold mb-1">
              Digite a nova senha
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="Digite a nova senha"
              className="w-full px-4 py-2 pr-10 border-2 border-gray-700 rounded-full focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[55%] transform"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="relative">
            <label htmlFor="password" className="block font-semibold mb-1">
              Repita a senha
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="confirmPassword"
              placeholder="Repita sua senha"
              className="w-full px-4 py-2 pr-10 border-2 border-gray-700 rounded-full focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-[55%] transform"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-1/2 mx-auto block font-semibold border-3 border-black bg-blue-400 text-white px-10 py-2 rounded-xl shadow-[6px_6px_0px_rgba(0,0,0,1)]"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordCard;
