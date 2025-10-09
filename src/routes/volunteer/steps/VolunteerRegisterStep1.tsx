import FormContainer from "@/components/FormContainer";
import { type volunteer } from "@/types/volunteer";

interface Step1Props {
  formData: volunteer;
  updateFormData: (data: Partial<volunteer>) => void;
}

export default function VolunteerRegisterStep1({formData, updateFormData}: Step1Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      <FormContainer>
        <form action="" method="post" className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="cpf" className="font-bold text-sm text-black mb-1">
              CPF
            </label>
            <input
              id="cpf"
              name="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={formData.cpf}
              onChange={(e) => updateFormData({cpf: e.target.value})}
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="font-bold text-sm text-black mb-1"
            >
              Nome
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.name}
              onChange={(e) => updateFormData({name: e.target.value})}
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="font-bold text-sm text-black mb-1"
            >
              Sobrenome
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => updateFormData({lastName: e.target.value})}
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="birthDate"
              className="font-bold text-sm text-black mb-1"
            >
              Data de nascimento
            </label>
            <input
              id="birthday"
              name="birthday"
              type="date"
              value={formData.birthday}
              onChange={(e) => updateFormData({birthday: e.target.value})}
              placeholder="dd/mm/aaaa"
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="gender"
              className="font-bold text-sm text-black mb-1"
            >
              Gênero
            </label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={(e) => updateFormData({gender: e.target.value})}
              className="border border-gray-300 rounded-full px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Selecione...</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="other">Outro</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="font-bold text-sm text-black mb-1"
            >
              Telefone
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={(e) => updateFormData({phone: e.target.value})}
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </form>
      </FormContainer>
    </div>
  );
}
