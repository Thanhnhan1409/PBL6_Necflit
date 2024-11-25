import { ILoginData, ISignupData } from '@/types'
import axiosApiInstance from '../plugins/api'
import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_API_URL
export const refreshAccessToken = async () => {
    const refresh_token = localStorage.getItem('refresh_token')
    const data = {
        refreshToken: refresh_token,
    }
    return await axios.post('/auth/refresh-tokens', data)
}
export const loginApi = async (data: ILoginData) => {
    return await axiosApiInstance.post('/users/login', data)
}

export const registerApi = async (data: ISignupData) => {
    return await axiosApiInstance.post('/users', data)
}
