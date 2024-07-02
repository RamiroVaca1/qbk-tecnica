
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.club-administration.qa.qubika.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;