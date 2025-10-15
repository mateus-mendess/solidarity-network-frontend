import Modal from "./Modal";
import Button from "./Button";

interface DeleteVolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
}

export default function DeleteVolunteerModal({ isOpen, onClose, onConfirm }: DeleteVolunteerModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Excluir perfil</h2>
      <p className="mb-6 text-gray-600">
        Tem certeza de que deseja excluir seu perfil? Essa ação não pode ser
        desfeita.
      </p>
      <div className="flex justify-end gap-3">
        <Button variant="primary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="secondary" onClick={onConfirm}>
          Confirmar exclusão
        </Button>
      </div>
    </Modal>
  );
}
