import axios from 'axios';

const apiRoute = 'http://api.additivasia.io/api/v1/assignment/employees';
const ENDPOINTS = {
    getRFQURL: (searchQuery) => `${apiRoute}/${searchQuery}`,
}

export const getRFQData = (payload) => {
    return new Promise((resolve, reject) => {
        axios.get(ENDPOINTS.getRFQURL(payload))
        .then(res => {
            resolve(res.data);
        })
        .catch(error => {
            reject(error);
        })
    })
    
}