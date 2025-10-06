import MainLayout from "@/layouts/MainLayout";
import VolunteerRegisterWizard from "@/routes/volunteer/VolunteerRegisterWizard";

export default function VolunteerRegisterPage() {
  return (
    <div>
      <MainLayout>
        <VolunteerRegisterWizard />
      </MainLayout>
    </div>
  );
}
