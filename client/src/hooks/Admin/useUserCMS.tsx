import axios from 'axios'
import { useState } from 'react'
import type { IUser } from '../../model/Admin/IUsers'

const useUserCMS = () => {
    const [allUsers, setAllUsers] = useState<IUser[]>([])
    const Backend_URL = import.meta.env.VITE_API_URL;


    const getAllUsers = async () => {
        try {
            const response = await axios.get(`${Backend_URL}/admin/user`, { withCredentials: true })
            const data = response.data.users
            setAllUsers(data)
        } catch (error) {
            console.error("Couldn't generate article: ", error)
            throw new Error()
        }
    }

    const deleteUsers = async (id: string) => {
        try {
            await axios.delete(`${Backend_URL}/admin/user/${id}`, { withCredentials: true })
        } catch (error) {
            console.error("Couldn't delete article: ", error)
            throw new Error()
        }
    }



    return {
        getAllUsers, deleteUsers,
        allUsers
    }
}

export default useUserCMS
