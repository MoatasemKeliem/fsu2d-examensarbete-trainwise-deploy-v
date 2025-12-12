import axios from 'axios'
import { useEffect, useState } from 'react'
import { Backend_URL } from '../utils'
import { Navigate } from 'react-router-dom'
import type { IProtectedRoutes } from '../model/IProtectedRoutes'

const ProtectedRoutes = ({ children, usersRole }: IProtectedRoutes) => {
    const [isAuth, setIsAuth] = useState({
        isAuthenticated: false,
        role: null,
        loading: true
    })


    useEffect(() => {
        const verifyUser = async () => {
            try {
                const response = await axios.get(`${Backend_URL}/native-auth/verify`, { withCredentials: true })
                setIsAuth({
                    isAuthenticated: true,
                    role: response.data.role,
                    loading: false
                })
            } catch (error) {
                setIsAuth({
                    isAuthenticated: false,
                    role: null,
                    loading: false
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

    if (usersRole && isAuth.role !== usersRole) {
        return (
            <Navigate to={"/unauthorized"} replace />
        )
    }


    return (
        <div>
            {children}
        </div>
    )
}

export default ProtectedRoutes
