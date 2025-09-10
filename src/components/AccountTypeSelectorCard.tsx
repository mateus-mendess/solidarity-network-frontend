import logo from "../assets/logo_solidarity.png";
import PersonIcon from "@mui/icons-material/Person";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { Link } from "react-router-dom";

type CardOptionProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonColor?: string;
  textColorButton?: string;
  to: string;
};

function CardOption({ title, description, icon, buttonColor, textColorButton, to }: CardOptionProps) {
  return (
    <article className="border border-gray-300 rounded-xl p-6 w-72 mx-auto text-center shadow-md">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
      <Link
        to={to}
        className={`w-1/2 mt-4 mx-auto block font-semibold border-2 border-black ${buttonColor} ${textColorButton} px-5 py-1 rounded-xl shadow-[3px_3px_0px_rgba(0,0,0,1)]`}
      >
        Continuar
      </Link>
    </article>
  );
}

function AccountTypeSelectorCard() {
  return (
    <section className="max-w-2xl mx-auto text-center p-6">
      <img src={logo} alt="Solidary Network" className="mx-auto mb-6 w-25" />
      <h2 className="text-3xl font-bold mb-8">Como você quer fazer parte?</h2>

      <div className="flex flex-wrap justify-center gap-6">
        <CardOption
          title="Voluntário"
          description="Encontre oportunidades e candidate-se para atuar em causas que fazem sentido para você."
          icon={
            <div className="bg-orange-500 p-4 rounded-lg flex items-center justify-center w-13 h-13">
              <PersonIcon style={{fontSize : "2rem"}} className="text-white" />
            </div>
          }
          buttonColor="bg-blue-400"
          textColorButton="text-white"
          to="/cadastro/voluntario"
        />

        <CardOption
          title="Organização"
          description="Cadastre sua organização e crie oportunidades para mobilizar voluntários."
          icon={<div className=" bg-purple-700 p-4 rounded-lg flex items-center justify-center w-13 h-13">
            <HomeWorkIcon style={{fontSize: "2rem"}} className="text-white"/>
          </div>}
          buttonColor="bg-white"
          textColorButton="text-blue-400"
          to="/cadastro/ong"
        />
      </div>
    </section>
  );
}

export default AccountTypeSelectorCard;
