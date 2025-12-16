import { useState } from "react"
import AdminUserCMS from "../components/Admin/AdminUserCMS"
import ArticleForm from "../components/Admin/ArticleForm"
import AdminTrainingPlanCMS from "../components/Admin/AdminTrainingPlanCMS"

const Admin = () => {
    const [show, setShow] = useState("article")

    return (
        <div>
            <h1>Admin</h1>
            <button onClick={() => { setShow("article") }}>Article</button>
            <button onClick={() => { setShow("users") }}>Users</button>
            <button onClick={() => { setShow("training-plan") }}>Training Plan</button>

            {
                show === "article" ? <ArticleForm /> : show === "users" ? <AdminUserCMS /> : show === "training-plan" ? <AdminTrainingPlanCMS /> : <ArticleForm />
            }




        </div>
    )
}

export default Admin
