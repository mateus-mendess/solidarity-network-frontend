import { useState } from "react";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import BreadcrumbSteps from "@/components/BreadcrumbStepsProps";
import VolunteerRegisterStep1 from "./steps/VolunteerRegisterStep1";
import VolunteerRegisterStep2 from "./steps/VolunteerRegisterStep2";
import VolunteerRegisterStep3 from "./steps/VolunteerRegisterStep3";
import { type volunteer } from "@/types/volunteer";
import api from "@/api/api";

export default function VolunteerRegisterWizard() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<volunteer>({
    cpf: "",
    name: "",
    lastName: "",
    birthday: "",
    gender: "",
    phone: "",
    profilePhoto: null,
    work: "",
    authorized: false,
    email: "",
    password: "",
    confirmPassword: ""
  });

  const updateFormData = (data : Partial<volunteer>) => {
    setFormData((prev) => ({...prev, ...data}));
  };

  const handleSubmit = async () => {
    try {

      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          if (value instanceof File) {
            formDataToSend.append(key, value);
          } else {
            formDataToSend.append(key, String(value));
          }
        }
      });
      
      for (const [key, value] of formDataToSend.entries()) {
        console.log(`${key}:`, value);
      }
      
      await api.post("/volunteer/register", formDataToSend)

      alert("cadastro realizado com sucesso!")
      navigate("/login")
    } catch(error) {
      console.error("Error ao cadastrar voluntário", error)
      alert("Erro ao cadastrar, tente novamente!")
    }
  };

  const steps = ["Dados Pessoais", "Perfil voluntário", "Acesso"];

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));


  const handleBack = () => {
    if (step === 1) {
      navigate("/");
    } else {
      prevStep();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="px-15 pt-6 self-start">
        <BreadcrumbSteps steps={steps} currentStep={step}></BreadcrumbSteps>
      </div>
      {step === 1 && (
        <VolunteerRegisterStep1
          formData={formData}
          updateFormData={updateFormData}
        />
      )}
      {step === 2 && (
        <VolunteerRegisterStep2
          formData={formData}
          updateFormData={updateFormData}
        />
      )}
      {step === 3 && (
        <VolunteerRegisterStep3
          formData={formData}
          updateFormData={updateFormData}
        />
      )}
      <div className="flex justify-center gap-4">
        <Button variant="secondary" onClick={handleBack} className="w-[200px]">
          Voltar
        </Button>

        {step < 3 ? (
          <Button variant="primary" onClick={nextStep} className="w-[200px]">
            Avançar
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={handleSubmit}
            className="w-[200px]"
          >
            Cadastrar
          </Button>
        )}
      </div>
    </div>
  );
}
