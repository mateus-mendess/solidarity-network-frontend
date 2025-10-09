import FormContainer from "@/components/FormContainer";
import type { volunteer } from "@/types/volunteer";

interface Step2Props {
  formData: volunteer;
  updateFormData: (data: Partial<volunteer>) => void;
}

export default function VolunteerRegisterStep2({formData, updateFormData}: Step2Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      <FormContainer>
        <form className="flex flex-col gap-4">

          <label htmlFor="work" className="font-bold text-sm text-black">
            Profissão
          </label>
          <input
            id="work"
            name="work"
            type="text"
            value={formData.work}
            onChange={(e) => updateFormData({work: e.target.value})}
            className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <p className="font-bold text-sm text-black mt-4">Ações desejadas</p>
          <div className="flex flex-col gap-2 ml-2 text-sm text-gray-700">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="actions"
                value="Educação"
                className="w-4 h-4"
              />
              Educação
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="actions"
                value="Saúde"
                className="w-4 h-4"
              />
              Saúde
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="actions"
                value="Assistência"
                className="w-4 h-4"
              />
              Assistência
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="actions"
                value="Social"
                className="w-4 h-4"
              />
              Social
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="actions"
                value="Meio Ambiente"
                className="w-4 h-4"
              />
              Meio Ambiente
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="actions"
                value="Cultura e Arte"
                className="w-4 h-4"
              />
              Cultura e Arte
            </label>
          </div>

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
            onChange={(e) => updateFormData({profilePhoto: e.target.files?.[0] || null})}
            accept="image/*"
            className="block w-full text-sm text-gray-700 border pr-5 border-gray-300 rounded-full cursor-pointer focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-200 hover:file:bg-gray-300"
          />
          
        </form>
      </FormContainer>
    </div>
  );
}
