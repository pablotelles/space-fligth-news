import { api } from "./apiBase"

export const getDataApi = (setData) => {
api.get('/articles')
    .then(function (response) {
        setData(response.data)
    console.log(response);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .then(function () {
    // always executed
    });
}

