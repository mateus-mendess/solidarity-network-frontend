import api from "@/api/api";
import {  type volunteer } from "@/types/volunteer";

export const VolunteerService = {
  getProfile: async () => {
    const response = await api.get("/volunteer/profile");
    return response.data;
  },

  updateProfile: async (data: volunteer) => {
    const response = await api.put("/volunteer/profile", data);
    return response.data;
  },

  deleteProfile: async () => {
    await api.delete("/volunteer");
  },

  createVolunteer: async (data: volunteer) => {
    const response = await api.post("/volunteer/register", data);
    return response.data;
  },
};

