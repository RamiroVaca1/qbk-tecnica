
import apiClient from './apiClient';

const registerUser = async (email: string, password: string, roles: string[]) => {
    try {
        const signupRequest = {
            email,
            password,
            roles,
        };

        const response = await apiClient.post('/api/auth/register', signupRequest);
        console.log('User registered:', response.data);

        return response.data;
    } catch (error) {
        console.error('Error registering user:', error.response?.data || error.message);
        throw error;
    }

};


export default registerUser;
