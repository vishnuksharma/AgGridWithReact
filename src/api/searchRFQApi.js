import axios from 'axios';

const apiRoute = '/api/table/list';
const ENDPOINTS = {
    getRFQURL: (searchQuery) => `${apiRoute}`,
}

export const getRFQTableData = () => {
    return new Promise((resolve, reject) => {
        axios.get(ENDPOINTS.getRFQURL())
        .then(res => {
            resolve(res.data);
        })
        .catch(error => {
            reject(error);
        })
    })
    
}