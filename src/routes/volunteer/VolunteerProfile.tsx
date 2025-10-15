import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import DeleteVolunteerModal from "@/components/DeleteVolunteerModal";
import { VolunteerService } from "@/services/volunteerService";
import { type VolunteerResponse } from "@/types/volunteerResponse";
import { Pencil } from "lucide-react";

export default function VolunteerProfile() {
  const [volunteer, setVolunteer] = useState<VolunteerResponse | null>(null);
   const [isDeleteOpen, setDeleteOpen] = useState(false);

   const navigate = useNavigate();

   const handleDelete = async () => {
     try {
       await VolunteerService.deleteProfile(); // faz o delete no backend
       // limpa qualquer dado do usuário se estiver no localStorage
       localStorage.removeItem("token");

       // redireciona para a home (ou login, como preferir)
       navigate("/");
     } catch (error) {
       console.error("Erro ao excluir perfil:", error);
     }
   };


  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await VolunteerService.getProfile();
        setVolunteer(data);
      } catch (err) {
        console.error("Erro ao buscar perfil do voluntário:", err);
      }
    }
    fetchProfile();
  }, []);

  if (!volunteer) {
    return <p className="text-center mt-20">Carregando perfil...</p>;
  }

  return (
    <div className="flex justify-center items-start gap-16 mt-10">
      <div className="flex flex-col items-center border rounded-2xl p-8 shadow-md w-[320px] h-[500px] bg-white">
        <img
          src={volunteer.profilePhoto}
          alt={`${volunteer.name} ${volunteer.lastName}`}
          className="w-36 h-36 rounded-xl mb-4 object-cover"
        />
        <h2 className="text-lg font-semibold text-center mb-4">
          {volunteer.name} {volunteer.lastName}
        </h2>
        <div className="mt-4 text-left">
          {" "}
          <p className="font-medium mb-1">Ações preferidas</p>{" "}
          <ul className="space-y-1">
            {" "}
            <li className="flex items-center gap-2">
              {" "}
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>{" "}
              Educação{" "}
            </li>{" "}
            <li className="flex items-center gap-2">
              {" "}
              <span className="w-3 h-3 rounded-full bg-red-500"></span> Saúde{" "}
            </li>{" "}
            <li className="flex items-center gap-2">
              {" "}
              <span className="w-3 h-3 rounded-full bg-green-500"></span>{" "}
              Assistência{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>

      <div className="border rounded-2xl p-8 shadow-md w-[480px] h-[500px] bg-white relative">
        <button
          className="absolute top-6 right-6 text-blue-500 hover:text-gray-500 transition-colors"
          title="Editar perfil"
        >
          <Pencil size={30} />
        </button>

        <div className="space-y-6 mt-10 text-gray-800">
          <div className="flex justify-between">
            <p className="font-medium text-gray-600">Data de nascimento:</p>
            <p className="font-semibold">
              {volunteer.birthday
                ? new Date(volunteer.birthday).toLocaleDateString("pt-BR")
                : "Não informado"}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-600">Gênero:</p>
            <p className="font-semibold">
              {volunteer.gender || "Não informado"}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-600">Telefone:</p>
            <p className="font-semibold">
              {volunteer.phone || "Não informado"}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-600">Profissão:</p>
            <p className="font-semibold">{volunteer.work || "Não informado"}</p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button variant="delete" onClick={() => setDeleteOpen(true)}
          >Excluir perfil
          </Button>
        </div>
      </div>
      <Modal isOpen={isDeleteOpen} onClose={() => setDeleteOpen(false)}>
        <DeleteVolunteerModal
          isOpen={isDeleteOpen}
          onClose={() => setDeleteOpen(false)}
          onConfirm={handleDelete}
        />
      </Modal>
    </div>
  );
}
