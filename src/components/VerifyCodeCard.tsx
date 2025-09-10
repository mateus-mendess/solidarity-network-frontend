import { useNavigate } from "react-router-dom";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "./ui/input-otp";

function VerifyCodeCard() {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      //api
      navigate("/reset-password");
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h2 className="text-5xl font-bold text-blue-400 mb-6 text-center">
          Verificação de cadastro
        </h2>

        <div className="border-3 shadow-[10px_10px_0px_rgba(156,163,175,1)] rounded-2xl p-8 w-full max-w-md">
          <p className="border-l-6 border-blue-400 pl-4 text-gray-600 mb-5 text-sm">
            Digite o código de verificação que enviamos para o seu e-mail. Caso
            não tenha recebido, verifique a pasta de spam ou solicite um novo
            código.
          </p>

          <form method="Post" onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col items-center">
              <label htmlFor="otp" className="block font-semibold mb-3 text-lg">
                Código de verificação
              </label>

              <InputOTP maxLength={6} className="">
                <InputOTPGroup>
                  <InputOTPSlot
                    index={0}
                    className="w-14 h-14 text-2xl border-gray-500"
                  />
                  <InputOTPSlot
                    index={1}
                    className="w-14 h-14 text-2xl border-gray-500"
                  />
                  <InputOTPSlot
                    index={2}
                    className="w-14 h-14 text-2xl  border-gray-500"
                  />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot
                    index={3}
                    className="w-14 h-14 text-2xl  border-gray-500"
                  />
                  <InputOTPSlot
                    index={4}
                    className="w-14 h-14 text-2xl  border-gray-500"
                  />
                  <InputOTPSlot
                    index={5}
                    className="w-14 h-14 text-2xl  border-gray-500"
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <button
              type="button"
              onClick={() => console.log("Reenviar código")}
              className="block mx-auto text-blue-500 hover:underline font-medium"
            >
              Reenviar código
            </button>

            <button
              type="submit"
              className="w-1/2 mx-auto block font-semibold border-3 border-black bg-blue-400 text-white px-10 py-2 rounded-xl shadow-[6px_6px_0px_rgba(0,0,0,1)]"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    );
}

export default VerifyCodeCard;