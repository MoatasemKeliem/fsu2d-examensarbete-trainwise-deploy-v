import axios from 'axios'
import { Backend_URL } from '../../utils'
import { useNavigate } from 'react-router-dom'
import type { IArticleAdmin } from '../../model/Admin/IArticleAdmin'

const useArticleAdmin = () => {
    const navigate = useNavigate()

    const generateArticle = async (payload: IArticleAdmin) => {
        try {
            await axios.post(`${Backend_URL}/ai/generate-article`, payload, { withCredentials: true });
            navigate("/articles")
        } catch (error) {
            console.error("Couldn't generate article: ", error)
            throw new Error()
        }
    }

    return { generateArticle }
}

export default useArticleAdmin
