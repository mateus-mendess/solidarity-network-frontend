import { useNavigate } from "react-router-dom";


function ForgotPasswordCard() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    //api
    navigate("/verify-code");
  }


    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h2 className="text-5xl font-bold text-blue-400 mb-6 text-center">
          Redefinição de senha
        </h2>

        <div className="border-3 shadow-[10px_10px_0px_rgba(156,163,175,1)] rounded-2xl p-8 w-full max-w-md">
          <p className="border-l-6 border-blue-400 pl-4 text-gray-600 mb-5 text-sm">
            Enviaremos um link de recuperação para o e-mail informado. Para sua
            segurança, o endereço de e-mail deve ser o mesmo utilizado no
            momento do cadastro.
          </p>

          <form method="Post" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                className="w-full border rounded-full px-4 py-2"
              />
            </div>
            
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

export default ForgotPasswordCard;