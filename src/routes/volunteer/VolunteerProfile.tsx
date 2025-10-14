import { useState } from "react";
import Button from "@/components/Button";

export default function VolunteerProfile() {
  const [tab, setTab] = useState("edit");

  return (
    <div className="flex justify-center items-start gap-16 mt-10">
      {/* Lado esquerdo - Perfil */}
      <div className="flex flex-col items-center border-2 rounded-2xl p-8 shadow-md w-[320px] h-[500px]">
        <img
          src="https://via.placeholder.com/150"
          alt="Foto de perfil"
          className="w-36 h-36 rounded-xl mb-4"
        />
        <h2 className="text-xl font-semibold text-center">
          Luiz Gustavo Nascimento
        </h2>

        <div className="mt-4 text-left">
          <p className="font-medium mb-1">Ações preferidas</p>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span> Educação
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span> Saúde
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span> Assistência
            </li>
          </ul>
        </div>

        <div className="mt-auto">
          <Button variant="delete">Excluir perfil</Button>
        </div>
      </div>

      {/* Lado direito - Abas e formulário */}
      <div className="flex flex-col gap-4 w-[500px]">
        {/* Abas */}
        <div className="flex justify-between text-base font-medium">
          <button onClick={() => setTab("actions")}>Ações sociais</button>
          <button onClick={() => setTab("stories")}>Minhas histórias</button>
          <button
            onClick={() => setTab("edit")}
            className={tab === "edit" ? "font-bold text-blue-500" : ""}
          >
            Editar
          </button>
        </div>

        {tab === "edit" && (
          <div className="border-2 rounded-2xl p-8 shadow-md h-[500px]">
            <form className="space-y-5">
              <div>
                <label className="block font-medium">Trabalho:</label>
                <input
                  type="text"
                  placeholder="Ex: Professor, Estudante, Engenheiro..."
                  className="border-2 rounded-full w-full px-4 py-2"
                />
              </div>

              <div>
                <label className="block font-medium">Telefone:</label>
                <input
                  type="text"
                  placeholder="(00) 0 0000-0000"
                  className="border-2 rounded-full w-full px-4 py-2"
                />
              </div>

              <div>
                <label
                  htmlFor="profilePhoto"
                  className="font-bold text-sm text-black mt-4"
                >
                  Foto de perfil
                </label>
                <input
                  id="profilePhoto"
                  name="profilePhoto"
                  type="file"
                  accept="image/*"
                  className="block w-full text-sm text-gray-700 border pr-5 border-gray-300 rounded-full cursor-pointer focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-200 hover:file:bg-gray-300"
                />
              </div>
            </form>

            <div className="flex justify-center mt-8">
              <Button variant="primary">Salvar alterações</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
