import { useState } from "react"
import AdminUserCMS from "../../components/Admin/AdminUserCMS"
import ArticleForm from "../../components/Admin/ArticleForm"
import AdminTrainingPlanCMS from "../../components/Admin/AdminTrainingPlanCMS"
import AdminNutritionPlanCMS from "../../components/Admin/AdminNutritionPlanCMS"
import AdminTrainingLogsCMS from "../../components/Admin/AdminTrainingLogsCMS"

const Admin = () => {
    const [show, setShow] = useState("article")

    return (
        <div>

            <div className="admin-dashboard">
                {
                    show === "article" ? <div className="admin-content">
                        <h2>Create Articles</h2>
                    </div>
                        : show === "users" ? <div className="admin-content">
                            <h2>All users</h2>

                        </div>
                            : show === "training-plan" ? <div className="admin-content">
                                <h2>All users training plans</h2>

                            </div>
                                : show === "nutrition-plan" ? <div className="admin-content">
                                    <h2>All users nutrition plans</h2>

                                </div>
                                    : show === "training-log" ? <div className="admin-content">
                                        <h2>All users training logs</h2>

                                    </div>
                                        : show === "view-articles" ? <div className="admin-content">
                                            <h2>All articles</h2>

                                        </div> : ""
                }
            </div>
            <div className="admin-button-div">
                <button onClick={() => { setShow("article") }}>Create Article</button>
                <button onClick={() => { setShow("users") }}>Users</button>
                <button onClick={() => { setShow("training-plan") }}>Training Plan</button>
                <button onClick={() => { setShow("nutrition-plan") }}>Nutrition Plan</button>
                <button onClick={() => { setShow("training-log") }}>Training Log</button>
                <button onClick={() => { setShow("view-articles") }}>Articles</button>
            </div>

            {
                show === "article" ? <ArticleForm />
                    : show === "users" ? <AdminUserCMS />
                        : show === "training-plan" ? <AdminTrainingPlanCMS />
                            : show === "nutrition-plan" ? <AdminNutritionPlanCMS />
                                : show === "training-log" ? <AdminTrainingLogsCMS />
                                    : show === "view-articles" ? ""
                                        : <ArticleForm />
            }




        </div>
    )
}

export default Admin
