import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use(async config => {
  const token = localStorage.getItem("token");

    const publicEndpoints = [
      "/auth/login",
      "/volunteer/register",
      "/organization/register",
    ];

    const isPublic = publicEndpoints.some((url) => config.url?.includes(url));

  if (!isPublic && token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;