import { useEffect } from 'react'
import useUserCMS from '../../hooks/Admin/useUserCMS'

const AdminUserCMS = () => {
    const { getAllUsers, allUsers, deleteUsers } = useUserCMS()

    useEffect(() => {
        getAllUsers()
    }, [])

    if (!allUsers) {
        return <h2>There is no users</h2>
    }


    return (
        <div className='render-user-div'>

            {
                allUsers.map((user) => {
                    return (
                        <div className='render-user-admin' key={user.id}>
                            <h2><span className='render-user-info'>Name:</span> {user.name}</h2>
                            <p><span className='render-user-info'>Email:</span> {user.email}</p>
                            <p><span className='render-user-info'>Role:</span> {user.role}</p>
                            <p><span className='render-user-info'>Provider:</span> {user.provider}</p>
                            <p><span className='render-user-info'>Stripe customer ID:</span> {user.stripeCustomerId}</p>
                            <p><span className='render-user-info'>Created:</span> {user.createdAt.slice(0, 10)}</p>
                            <button onClick={async () => { await deleteUsers(user.id); await getAllUsers() }}>Delete User</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AdminUserCMS
