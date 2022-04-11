import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.spaceflightnewsapi.net/v3'
  });

  api.get('/articles')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });