import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://engines.fleetopsgh.com/api",
  headers: { Accept: "application/json" },
});

export const apiClientMarketing = axios.create({
  baseURL: "https://fleetops-k3g7.onrender.com/api",
  headers: { Accept: "application/json" },
});

export const config = {
  VEHICLE_IMG_URL: "http://engines.fleetopsgh.com/uploads/photo/",
};
