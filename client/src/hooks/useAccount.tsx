import { useNavigate } from 'react-router-dom'
import type { IRegister } from '../model/IRegister'
import axios from "axios"
import type { ILogin } from '../model/ILogin'

const useAccount = () => {
    const navigate = useNavigate()
    const Backend_URL = import.meta.env.VITE_API_URL;


    const registerUser = async (payload: IRegister) => {
        try {
            const response = await axios.post(`${Backend_URL}/native-auth/register`, payload, { withCredentials: true })
            if (response.status === 200) {
                navigate("/login")
            }
        } catch (error) {
            console.error("Couldn't register user", error)
            throw new Error()
        }
    }

    const loginUser = async (payload: ILogin) => {
        try {
            const response = await axios.post(`${Backend_URL}/native-auth/login`, payload, { withCredentials: true })
            if (response.status === 200) {
                navigate("/dashboard");
                window.location.reload();
            }


        } catch (error) {
            console.error("Couldn't login user", error)
            throw new Error()
        }
    }


    const LogoutUser = async () => {
        try {
            await axios.post(`${Backend_URL}/native-auth/logout`, {}, { withCredentials: true })
            navigate("/")
            window.location.reload()
        } catch (error) {
            console.error("Couldn't logout user", error)
            throw new Error()
        }
    }

    const loginWithGoogle = () => {
        window.location.href = `${Backend_URL}/auth/google`
    }

    const loginWithDiscord = () => {
        window.location.href = `${Backend_URL}/auth/discord`
    }


    return { registerUser, loginUser, loginWithGoogle, loginWithDiscord, LogoutUser }
}

export default useAccount
