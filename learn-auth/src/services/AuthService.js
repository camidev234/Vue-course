import { ref } from "vue";
import axios from 'axios';


class AuthService {
    constructor() {
        this.token = ref('');
        this.error = ref('');
    }

    getToken() {
        return this.token;
    }

    getError() {
        return this.error;
    }

    async login(email, password) {
        try {
            // http://127.0.0.1:8000/api/login

            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            };

            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email: email,
                password: password
            }, 
            { headers });

            if(response.status === 401 ) {
                this.error.value = 'Login failed';
                return false;
            }

            this.token.value = response.data.access_token;
            
            return true;

        } catch (error) {
            this.error.value = 'Login failed';
            return false;
        }
    }
}

export default AuthService