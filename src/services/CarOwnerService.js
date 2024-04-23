import axios from "axios";

export async function apiPostCarOwner(payLoad) {
    return axios({
      method: "post",
      url: "https://engines.fleetopsgh.com/api/clientlogin",
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