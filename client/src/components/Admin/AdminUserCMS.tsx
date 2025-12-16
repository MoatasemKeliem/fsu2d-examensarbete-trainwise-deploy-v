import { useEffect } from 'react'
import useUserCMS from '../../hooks/Admin/useUserCMS'

const AdminUserCMS = () => {
    const { getAllUsers, allUsers } = useUserCMS()

    useEffect(() => {
        getAllUsers()
    }, [])

    if (!allUsers) {
        return <h2>There is no users</h2>
    }


    return (
        <div>
            {
                allUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <h2>Name: {user.name}</h2>
                            <p>email: {user.email}</p>
                            <p>Role: {user.role}</p>
                            <p>Provider: {user.provider}</p>
                            <p>Stripe customer ID: {user.stripeCustomerId}</p>
                            <p>Created: {user.createdAt.slice(0, 10)}</p>
                            <button>Delete User</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AdminUserCMS
