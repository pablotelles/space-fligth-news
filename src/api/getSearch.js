import { api } from "./apiBase"

export const getSearch = (search, setData) => {
    
    api.get(`/articles?title_contains=${search}`)
        .then(function (response) {
            setData(response.data)
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });
}
