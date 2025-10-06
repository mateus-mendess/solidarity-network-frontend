import FormContainer from "@/components/FormContainer";

export default function VolunteerRegisterStep4() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      <FormContainer>
        <form
          action=""
          method="post"
          className="flex flex-col gap-4 text-black"
        >
          <h2 className="font-bold text-center mb-2">Autorização:</h2>
          <p>
            Declaro, para os devidos fins, que me inscrevo como voluntário(a),
            de forma espontânea, sem qualquer tipo de remuneração, conforme
            previsto na Lei nº 9.608/1998.
          </p>
          <p>
            Estou ciente de que as atividades voluntárias não geram vínculo
            empregatício ou obrigações trabalhistas, previdenciárias ou afins.
          </p>
          <p>
            Autorizo o uso dos meus dados pessoais exclusivamente para fins
            relacionados à gestão e à comunicação das ações voluntárias, em
            conformidade com a Lei Geral de Proteção de Dados (Lei nº
            13.709/2018).
          </p>
          <p>
            Comprometo-me a atuar com responsabilidade, respeito e ética em
            todas as atividades desenvolvidas junto à instituição.
          </p>

          <label className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              className="w-5 h-5 accent-blue-500 border-gray-400"
            />
            <span className="text-sm font-semibold">
              Li e concordo com os termos acima.
            </span>
          </label>
        </form>
      </FormContainer>
    </div>
  );
}
