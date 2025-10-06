import { useState } from "react";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import BreadcrumbSteps from "@/components/BreadcrumbStepsProps";
import VolunteerRegisterStep1 from "./steps/VolunteerRegisterStep1";
import VolunteerRegisterStep2 from "./steps/VolunteerRegisterStep2";
import VolunteerRegisterStep3 from "./steps/VolunteerRegisterStep3";

export default function VolunteerRegisterWizard() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

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
      {step === 1 && <VolunteerRegisterStep1 />}
      {step === 2 && <VolunteerRegisterStep2 />}
      {step === 3 && <VolunteerRegisterStep3 />}
      <div className="flex justify-center gap-4">
        <Button variant="secondary" onClick={handleBack} className="w-[200px]">
          Voltar
        </Button>

        {step < 4 ? (
          <Button variant="primary" onClick={nextStep} className="w-[200px]">
            Avançar
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={() => alert("Cadastro concluído!")}
            className="w-[200px]"
          >
            Cadastrar
          </Button>
        )}
      </div>
    </div>
  );
}
