import { useNavigate } from 'react-router-dom'
import type { IRegister } from '../model/IRegister'
import axios from "axios"
import { Backend_URL } from '../utils'
import type { ILogin } from '../model/ILogin'

const useAccount = () => {
    const navigate = useNavigate()

    const registerUser = async (payload: IRegister) => {
        try {
            await axios.post(`${Backend_URL}/native-auth/register`, payload, { withCredentials: true })
            navigate("/login")
        } catch (error) {
            console.error("Couldn't register user", error)
            throw new Error()
        }
    }

    const loginUser = async (payload: ILogin) => {
        try {
            await axios.post(`${Backend_URL}/native-auth/login`, payload, { withCredentials: true })
            navigate("/dashboard")
        } catch (error) {
            console.error("Couldn't login user", error)
            throw new Error()
        }
    }

    const loginWithGoogle = () => {
        window.location.href = `${Backend_URL}/auth/google`
    }

    const loginWithDiscord = () => {
        window.location.href = `${Backend_URL}/auth/discord`
    }


    return { registerUser, loginUser, loginWithGoogle, loginWithDiscord }
}

export default useAccount
