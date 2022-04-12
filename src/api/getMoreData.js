import { api } from "./apiBase"

export const getMoreData = (data, setData, counter) => {
    
    api.get(`/articles?_start=${counter}`)
        .then(function (response) {
            setData([...data, ...response.data])
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });
}
