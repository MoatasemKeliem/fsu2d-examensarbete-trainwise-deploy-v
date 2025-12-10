import { useNavigate } from 'react-router-dom'
import type { IRegister } from '../model/IRegister'
import axios from "axios"
import { Backend_URL } from '../utils'

const useAccount = () => {
    const navigate = useNavigate()

    const registerUser = async (payload: IRegister) => {
        try {
            await axios.post(`${Backend_URL}/native-auth/register`, payload, { withCredentials: true })
            navigate("/login")
        } catch (error) {
            console.error("Couldn't register user", error)
        }
    }



    return { registerUser }
}

export default useAccount
