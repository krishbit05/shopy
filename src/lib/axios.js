import axios from "axios";

const API_BASE_URL =
	import.meta.env.VITE_API_BASE_URL || "https://shopy-b.onrender.com/api";

const axiosInstance = axios.create({
	baseURL: API_BASE_URL,
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
