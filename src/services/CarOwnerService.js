import axios from "axios";
import { apiClient } from "./Config";

export async function apiPostCarOwner(payLoad) {
    return axios({
      method: "post",
      url: "https://engines.fleetopsgh.com/api/carowner_login",
      data: payLoad,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }

  export async function apiAcceptBid(id) {
    return apiClient.put(`/accept/bid/${id}`);  //ask which id
  }

  export async function apiShowAllBids() {
    return apiClient.get(`/showbids`); 
  }

  export async function apiGetCarOwnerDashboard(id) {
    return apiClient.get(`/carowner/${id}/dashboard`); //user_id
  }
  

  export async function apiGetCarOwnerVehicles(id) {
    return apiClient.get(`/carowner/${id}/listings`); //user_id
  }


  export async function apiAssignCar(payLoad, id) {
    return axios({
      method: "put",
      url:  `https://engines.fleetopsgh.com/api/assign-vehicle/${id}`, //ask which id 
      data: payLoad, // driver_id
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }


  export async function apiShowCollectionForm(payLoad) {
    return axios({
      method: "post",
      url:  `https://engines.fleetopsgh.com/api/showvcform`,
      data: payLoad, // driver_id & vehicle_id
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }

  export async function apiPostVehicleForm(payLoad) {  //dont implement until clear
    return axios({
      method: "post",
      url:  `https://engines.fleetopsgh.com/api/checkvcform`,
      data: payLoad, // table payload
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }

  export async function apiPostDriverReviews(payLoad) { 
    return axios({
      method: "post",
      url:  `https://engines.fleetopsgh.com/api/driver/review`,
      data: payLoad, //rating & driver_id
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }


  export async function apiPostVehicleReviews(payLoad) { 
    return axios({
      method: "post",
      url:  `https://engines.fleetopsgh.com/api/vehicle/review`,
      data: payLoad, //rating & vehicle_id
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }

  export async function apiPostVehicleRetrieval(payLoad) { 
    return axios({
      method: "post",
      url:  `https://engines.fleetopsgh.com/api/retrieve/vehicle`,
      data: payLoad, //reason & vehicle_id
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }

 












