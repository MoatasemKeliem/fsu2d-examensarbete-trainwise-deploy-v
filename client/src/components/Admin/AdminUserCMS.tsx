import React, { useEffect } from 'react'
import useUserCMS from '../../hooks/Admin/useUserCMS'

const AdminUserCMS = () => {
    const { getAllUsers, allUsers } = useUserCMS()

    useEffect(() => {
        getAllUsers()
    }, [])

    if (!allUsers) {
        return <h2>There is no users</h2>
    }

    console.log(allUsers)

    return (
        <div>
        </div>
    )
}

export default AdminUserCMS
