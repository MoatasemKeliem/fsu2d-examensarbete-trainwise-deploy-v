import { useParams } from "react-router-dom"

const AdminSingleTrainingPlan = () => {
    const { id } = useParams()


    return (
        <div>
            <h2>ADMIN {id}</h2>
        </div>
    )
}

export default AdminSingleTrainingPlan
