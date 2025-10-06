import FormContainer from "@/components/FormContainer";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function VolunteerRegisterStep3() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      <FormContainer>
        <form className="flex flex-col gap-6 text-black">

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold text-sm mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="exemplo@email.com"
                className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col relative">
              <label htmlFor="password" className="font-bold text-sm mb-1">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[55%] transform"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex flex-col relative">
              <label
                htmlFor="confirmPassword"
                className="font-bold text-sm mb-1"
              >
                Confirmar senha
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-gray-300 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-[55%] transform"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* --- Texto reduzido de Autorização --- */}
          <div className="text-sm text-gray-700 mt-4">
            <p className="mb-2 text-justify">
              Declaro que atuarei como voluntário(a) de forma espontânea e sem
              remuneração, conforme a Lei nº 9.608/1998. Autorizo o uso dos meus
              dados pessoais apenas para fins relacionados às atividades do
              sistema.
            </p>

            <label className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-500 border-gray-400"
                required
              />
              <span className="text-sm font-semibold">
                Li e concordo com os termos acima.
              </span>
            </label>
          </div>
        </form>
      </FormContainer>
    </div>
  );
}
