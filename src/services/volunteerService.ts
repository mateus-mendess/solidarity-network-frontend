import api from "@/api/api";

export async function getVolunteerProfile() {
  const response = await api.get("/volunteer/profile");
  return response.data;
}
