import axios from 'axios'
import React, { useState } from 'react'
import { Backend_URL } from '../utils'
import type { IArticle } from '../model/render-models/IArticle'

const useArticle = () => {
    const [allArticles, setAllArticles] = useState<IArticle[]>([])
    const [articleById, setArticleById] = useState<any | null>(null)

    const getAllArticles = async () => {
        try {
            const response = await axios.get(`${Backend_URL}/article`, { withCredentials: true })
            setAllArticles(response.data)
        } catch (error) {
            console.error("Couldn't get articles plan", error)
            throw new Error()
        }
    }




    return {
        getAllArticles,
        allArticles
    }
}

export default useArticle
