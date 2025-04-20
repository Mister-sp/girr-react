import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
});

// Exemple d'appel API pour récupérer les shows
export async function getShows() {
  const { data } = await api.get("/shows");
  return data;
}

// Exemple d'appel API pour récupérer le détail d'un show
export async function getShowById(id: string) {
  const { data } = await api.get(`/shows/${id}`);
  return data;
}

// Ajoute d'autres fonctions selon les endpoints du backend

export default api;
