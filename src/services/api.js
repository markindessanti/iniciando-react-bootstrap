import axios from "axios";

const api = axios.create({
	baseURL: "https://digimon-api.vercel.app/api/digimon/level/Rookie"
});

export default api;