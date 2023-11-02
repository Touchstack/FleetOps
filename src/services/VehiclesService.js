import axios from "axios";
import { apiClient, apiClientMarketing } from "./Config";

export async function apiGetVehicles() {
  return apiClient.get(`/vehicles`);
}

export async function apiGetVehicleById(id) {
  return apiClient.get(`/vehicle/${id}`);
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

export async function apiVerifyOtp(data) {
  return apiClientMarketing.post(`/verify/otp`, data);
}

export async function apiRegisterDriver(data) {
  return apiClientMarketing.post(`/drivers/register`, data);
}

export async function apiSelectVehicle(data) {
  return apiClientMarketing.post(`/drivers/select_vehicle`, data);
}

export async function apiGetSelectedVehicle(id) {
  return apiClientMarketing.get(`/drivers/vehicle/${id}`);
}

export async function apiPostDriver(bodyFormData) {
  return axios({
    method: "post",
    url: "https://engines.fleetopsgh.com/api/user",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
