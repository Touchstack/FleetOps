import { apiClient } from "./Config";

export async function apiGetVehicles() {
  return apiClient.get(`/vehicles`);
}
