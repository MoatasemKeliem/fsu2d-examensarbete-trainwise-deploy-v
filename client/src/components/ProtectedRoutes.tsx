import axios from 'axios'
import { useEffect, useState } from 'react'
import { Backend_URL } from '../utils'
import { Navigate, useNavigate } from 'react-router-dom'
import type { IProtectedRoutes } from '../model/IProtectedRoutes'
import WrongPlan from './WrongPlan'

const ProtectedRoutes = ({ children, usersRole }: IProtectedRoutes) => {
    const authirzation = [
        "basic",
        "premium",
        "admin"
    ]
    const [isAuth, setIsAuth] = useState({
        isAuthenticated: false,
        role: null,
        loading: true,
        subscriptionStatus: "inactive",
        planName: "basic"
    })
    const navigate = useNavigate()


    useEffect(() => {
        const verifyUser = async () => {
            try {
                const response = await axios.get(`${Backend_URL}/native-auth/verify`, { withCredentials: true })
                setIsAuth({
                    isAuthenticated: true,
                    role: response.data.role,
                    loading: false,
                    subscriptionStatus: response.data.subscriptionStatus,
                    planName: response.data.planName

                })
            } catch (error) {
                setIsAuth({
                    isAuthenticated: false,
                    role: null,
                    loading: false,
                    subscriptionStatus: "inactive",
                    planName: "basic"

                })
            }
        }
        verifyUser()
    }, [])


    if (isAuth.loading) {
        return (
            <div>
                <span className="loader"></span>
                <h2>Authenticating user. Please wait...</h2>
            </div>
        )
    }

    if (!isAuth.isAuthenticated) {
        return (
            <Navigate to={"/login"} replace />
        )
    }

    if (isAuth.role === "user" && isAuth.subscriptionStatus === "inactive") {
        return (
            <Navigate to={"/pricing"} replace />

        )
    }


    if (isAuth.role === "admin") {
        return (<div>
            {children}
        </div>)
    }


    if (usersRole) {
        const userLevel = authirzation.indexOf(isAuth.planName)
        const requiredRole = authirzation.indexOf(usersRole)

        if (userLevel < requiredRole) {
            setTimeout(() => {
                navigate("/dashboard")
            }, 4000)
            return <WrongPlan />
        }

    }

    return (
        <div>
            {children}
        </div>
    )
}

export default ProtectedRoutes
