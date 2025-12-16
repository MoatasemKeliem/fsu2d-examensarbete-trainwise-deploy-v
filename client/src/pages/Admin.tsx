import { useState } from "react"
import AdminUserCMS from "../components/Admin/AdminUserCMS"
import ArticleForm from "../components/Admin/ArticleForm"

const Admin = () => {
    const [show, setShow] = useState("article")

    return (
        <div>
            <h1>Admin</h1>
            <button onClick={() => { setShow("article") }}>Article</button>
            <button onClick={() => { setShow("users") }}>Users</button>

            {
                show === "article" ? <ArticleForm /> : show === "users" ? <AdminUserCMS /> : <ArticleForm />
            }




        </div>
    )
}

export default Admin
