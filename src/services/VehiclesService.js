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
  return apiClient.post(`/driver/login`, data);
}

export async function apiDriverSignUp(data) {
  return apiClient.post(`/driver/signup`, data);
}

export async function apiVerifyOtp(data, id) {
  return apiClient.post(`/verify/otp/${id}`, data);
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

export const nextPage = async (url) => {
    try {
      const res = axios.get(url)
      return res
    } catch (error) {
      console.log("This is load more error =>>", error)
      return error
    }
}

//new Endpoints
export async function apiGetAvailableVehicles() {
  return apiClient.get(`/availablecars`);
}

export async function apiGetVehicleDetails(id) {
  return apiClient.get(`/vehicledetails/${id}`); //vehicle_id
}


export async function apiGetDriverBids(id) {
  return apiClient.get(`/driver/${id}/bids`);  //driver_id
}

export async function apiPlaceDriverBids(payLoad) {
  return axios({
    method: "put",
    url: "https://engines.fleetopsgh.com/api/place_a_bid",
    data: payLoad  //vehicle_id & driver_id
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function apiCancelDriverBids(id) {
  return apiClient.put(`/cancel/bid/${id}`);  //ask which id is this
}

export async function apiDriverReBid(payLoad) {
  return axios({
    method: "get",
    url: "https://engines.fleetopsgh.com/api/rebid",
    data: payLoad  //bid_id & driver_id
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function apiPostVehicleReturn(payLoad) { 
  return axios({
    method: "post",
    url:  `https://engines.fleetopsgh.com/api/return/vehicle`,
    data: payLoad, //reason & vehicle_id
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function apiGetDriverDashboard(id) {
  return apiClient.get(`/driver/${id}/dashboard`);  //driver id
}

//new Endpoints