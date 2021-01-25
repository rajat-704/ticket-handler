import { baseUrl } from "../shared/baseUrl";

export const fetchPosts = () => {
    return fetch(baseUrl)
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(posts => { return posts; })
        .catch(error => console.log(error));
}