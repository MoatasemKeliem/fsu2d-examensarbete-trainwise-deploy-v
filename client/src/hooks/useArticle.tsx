import axios from 'axios'
import { useState } from 'react'
import type { IArticle } from '../model/render-models/IArticle'
import { useNavigate } from 'react-router-dom'

const useArticle = () => {
    const [allArticles, setAllArticles] = useState<IArticle[]>([])
    const [articleById, setArticleById] = useState<IArticle | null>(null)
    const navigate = useNavigate()
    const Backend_URL = import.meta.env.VITE_API_URL;


    const getAllArticles = async () => {
        try {
            const response = await axios.get(`${Backend_URL}/article`, { withCredentials: true })
            setAllArticles(response.data.articles)
        } catch (error) {
            console.error("Couldn't get articles plan", error)
            throw new Error()
        }
    }

    const getArticleById = async (id: string) => {
        try {
            const response = await axios.get(`${Backend_URL}/article/${id}`, { withCredentials: true })
            setArticleById(response.data.article)
        } catch (error) {
            console.error("Couldn't get article plan", error)
            throw new Error()
        }
    }

    const deleteArticleById = async (id: string) => {
        try {
            await axios.delete(`${Backend_URL}/article/${id}`, { withCredentials: true })
            navigate("/articles")
        } catch (error) {
            console.error("Couldn't delete article plan", error)
            throw new Error()
        }
    }




    return {
        getAllArticles, getArticleById, deleteArticleById,
        allArticles, articleById
    }
}

export default useArticle
