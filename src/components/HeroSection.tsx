import mainImage from "../assets/img_principal_solidarity.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-0">
      <div className="max-w-2xl space-y-10 ml-10 relative top-15">
        <h1 className="text-6xl font-bold text-blue-400 mb-7">
          SOLIDARY NETWORK
        </h1>
        <p className="text-lg text-justify text-black leading-relaxed mb-4 max-w-[605px]">
          Aqui, você encontra causas sociais próximas de você, descobre projetos
          sérios que precisam de voluntários e pode se engajar em ações que
          fazem a diferença de forma simples e segura. Além disso, oferecemos um
          espaço para compartilhar histórias inspiradoras e mostrar como
          pequenos gestos de solidariedade se multiplicam em grandes mudanças.
        </p>
        <p className="text-lg text-justify text-black max-w-[605px]">
          Seja você um voluntário em busca de oportunidades ou uma ONG em busca
          de visibilidade, o Solidarity Network é o lugar certo para criar
          conexões que transformam. Junte-se a essa rede e ajude a construir um
          futuro mais justo, humano e colaborativo.
        </p>

        <div className="flex">
          <button>
            <Link
              to={"/volunteer/register"}
              className="border-3 border-black bg-blue-400 text-white px-10 py-3 rounded-xl shadow-[6px_6px_0px_rgba(0,0,0,1)]"
            >
              <b>Quero ser voluntário</b>
            </Link>
          </button>

          <button>
            <Link
              to={"/volunteer/register"}
              className="className= border-3 border-black text-blue-400 px-10 py-3 ml-30 rounded-xl shadow-[6px_6px_0px_rgba(0,0,0,1)]"
            >
              <b>cadastrar minha ONG</b>
            </Link>
          </button>
        </div>
      </div>

      <div className="mt-10 md:mt-0 md:ml-10 mr-30">
        <img
          src={mainImage}
          alt=""
          className="w-full max-w-md rounded-lg relative top-20"
        />
      </div>
    </section>
  );
}

export default HeroSection;
