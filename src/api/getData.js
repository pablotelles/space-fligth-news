import { api } from "./apiBase"

export const getDataApi = (setData) => {
    let counter = 0

api.get(`/articles?_start=${counter}`)
    .then(function (response) {
        setData(response.data)
        counter = +1
        console.log(counter)
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

