import axios from "axios";

//No se si usar esto.
export const getFoods = async function () {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then(function (response) {
      // handle success
      console.log(response.data.results);
      return response.data.results;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
