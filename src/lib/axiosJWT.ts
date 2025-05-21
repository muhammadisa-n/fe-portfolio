// src/utils/axiosJWT.ts
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const createAxiosJWT = (
  getToken: () => string | null,
  setToken: (token: string) => void,
  setExpire: (exp: number) => void
) => {
  const instance = axios.create();

  instance.interceptors.request.use(
    async (config) => {
      const token = getToken();
      if (token) {
        const decoded = jwtDecode<{ exp: number }>(token);
        const now = Date.now() / 1000;
        if (decoded.exp < now) {
          const response = await axios.get(`${baseUrl}/auth/refresh-token`, {
            headers: { "x-api-key": apiKey },
            withCredentials: true,
          });
          const newToken = response.data.data.accessToken;
          config.headers.Authorization = `Bearer ${newToken}`;
          setToken(newToken);
          setExpire(jwtDecode<{ exp: number }>(newToken).exp);
        } else {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      config.headers["x-api-key"] = apiKey;
      return config;
    },
    (error) => Promise.reject(error)
  );

  return instance;
};
