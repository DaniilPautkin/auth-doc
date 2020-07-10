import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/users/'
})

export const authAPI = {
    register(name: string, email: string, password: string, password2: string) {
        return instance.post('register', { name, email, password, password2 })
    },
    login(email: string, password: string) {
        return instance.post('login', { email, password })
    }
}
