import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://engines.fleetopsgh.com/api",
  headers: { Accept: "application/json" },
});

export const config = {
  VEHICLE_IMG_URL: "http://engines.fleetopsgh.com/uploads/photo/",
};
