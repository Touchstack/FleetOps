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
  return apiClientMarketing.post(`/verify`, data);
}

export async function apiPostDriver(bodyFormData) {
  return axios({
    method: "post",
    url: "https://engines.fleetopsgh.com/api/user",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((response) => {
      // handle success
      // return setSuccessText(response.data.message);
      return response;
    })
    .catch((error) => {
      // handle error
      /*setErrorText(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message
      );
      setErrorAlert(true);
      setLoading(false);
      return setTimeout(() => setErrorAlert(false), 3000);
     */
      return error;
    });
}
