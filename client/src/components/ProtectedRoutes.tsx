import axios from 'axios'
import { useEffect, useState } from 'react'
import { Backend_URL } from '../utils'
import { Navigate } from 'react-router-dom'
import type { IProtectedRoutes } from '../model/IProtectedRoutes'

const ProtectedRoutes = ({ children, usersRole }: IProtectedRoutes) => {
    const [isAuth, setIsAuth] = useState(false)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const response = await axios.get(`${Backend_URL}/native-auth/verify`, { withCredentials: true })
                setIsAuth(true)
                setRole(response.data.role)
                setLoading(false)
            } catch (error) {
                setIsAuth(false)
                setRole(null)
                setLoading(false)
            }
        }
        verifyUser()
    }, [])

    if (loading) {
        return (
            <div>
                <span className="loader"></span>
                <h2>Authenticating user. Please wait...</h2>
            </div>
        )
    }

    if (!isAuth) {
        return (
            <Navigate to={"/login"} />
        )
    }

    if (usersRole && role !== usersRole) {
        return (
            <Navigate to={"/unauthorized"} />
        )
    }


    return (
        <div>
            {children}
        </div>
    )
}

export default ProtectedRoutes
