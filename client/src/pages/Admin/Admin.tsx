import { useState } from "react"
import AdminUserCMS from "../../components/Admin/AdminUserCMS"
import ArticleForm from "../../components/Admin/ArticleForm"
import AdminTrainingPlanCMS from "../../components/Admin/AdminTrainingPlanCMS"
import AdminNutritionPlanCMS from "../../components/Admin/AdminNutritionPlanCMS"

const Admin = () => {
    const [show, setShow] = useState("article")

    return (
        <div>
            <h1>Admin</h1>
            <button onClick={() => { setShow("article") }}>Article</button>
            <button onClick={() => { setShow("users") }}>Users</button>
            <button onClick={() => { setShow("training-plan") }}>Training Plan</button>
            <button onClick={() => { setShow("nutrition-plan") }}>Nutrition Plan</button>

            {
                show === "article" ? <ArticleForm />
                    : show === "users" ? <AdminUserCMS />
                        : show === "training-plan" ? <AdminTrainingPlanCMS />
                            : show === "nutrition-plan" ? <AdminNutritionPlanCMS />
                                : <ArticleForm />
            }




        </div>
    )
}

export default Admin
