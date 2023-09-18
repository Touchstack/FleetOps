import { apiClient, apiClientMarketing } from "./Config";

export async function apiGetVehicles() {
  return apiClient.get(`/vehicles`);
}

export async function apiRegisterCarOnwer(data) {
  return apiClientMarketing.post(`/carowners`, data);
}

export async function apiDriverLogin(data) {
  return apiClientMarketing.post(`/drivers/login`, data);
}

export async function apiDriverSignUp(data) {
  return apiClientMarketing.post(`/drivers/signup`, data);
}
