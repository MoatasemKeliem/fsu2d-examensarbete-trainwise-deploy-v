import axios from "axios"
import { useState, useEffect } from "react"
import { Backend_URL } from "../utils"

const useAuth = () => {
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        role: null,
        loading: true,
        name: null,
        subscriptionStatus: "inactive",
        planName: "basic",
        subscriptionId: null
    })


    useEffect(() => {
        const verifyUser = async () => {
            try {
                const response = await axios.get(`${Backend_URL}/native-auth/verify`, { withCredentials: true })
                setAuth({
                    isAuthenticated: true,
                    role: response.data.role,
                    loading: false,
                    name: response.data.name,
                    subscriptionStatus: response.data.subscriptionStatus,
                    planName: response.data.planName,
                    subscriptionId: response.data.subscriptionId
                })

            } catch (error) {
                setAuth({
                    isAuthenticated: false,
                    role: null,
                    loading: false,
                    name: null,
                    subscriptionStatus: "inactive",
                    planName: "basic",
                    subscriptionId: null

                })
            }
        }
        verifyUser()
    }, [])

    console.log(auth)

    return auth
}

export default useAuth
