import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import type { IArticleAdmin } from '../../model/Admin/IArticleAdmin'
import { useState } from 'react'
import type { IArticle } from '../../model/render-models/IArticle'

const useArticleAdmin = () => {
    const [allAdminArticles, setAllAdminArticles] = useState<IArticle[]>([])
    const [adminArticleByID, setAdminArticleByID] = useState<IArticle | null>(null)
    const navigate = useNavigate()
    const Backend_URL = import.meta.env.VITE_API_URL;


    const generateArticle = async (payload: IArticleAdmin) => {
        try {
            await axios.post(`${Backend_URL}/ai/generate-article`, payload, { withCredentials: true });
            navigate("/articles")
        } catch (error) {
            console.error("Couldn't generate article: ", error)
            throw new Error()
        }
    }

    const getAllArticlesAdmin = async () => {
        try {
            const resposne = await axios.get(`${Backend_URL}/admin/article`, { withCredentials: true })
            const data = resposne.data
            setAllAdminArticles(data.article)
        } catch (error) {
            console.error("Couldn't get article for admin: ", error)
            throw new Error()
        }
    }

    const getArticleByIdAdmin = async (id: string) => {
        try {
            const resposne = await axios.get(`${Backend_URL}/admin/article/${id}`, { withCredentials: true })
            const data = resposne.data
            setAdminArticleByID(data.article)
        } catch (error) {
            console.error("Couldn't get article for admin: ", error)
            throw new Error()
        }
    }

    const deleteArticleByIdAdmin = async (id: string) => {
        try {
            await axios.delete(`${Backend_URL}/admin/article/${id}`, { withCredentials: true })
            navigate("admin")
        } catch (error) {
            console.error("Couldn't get article for admin: ", error)
            throw new Error()
        }
    }


    return {
        generateArticle, getAllArticlesAdmin, getArticleByIdAdmin, deleteArticleByIdAdmin,
        allAdminArticles, adminArticleByID
    }
}

export default useArticleAdmin
