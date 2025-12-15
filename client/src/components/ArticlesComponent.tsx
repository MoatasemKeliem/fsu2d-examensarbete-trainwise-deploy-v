import { useEffect } from 'react'
import useArticle from '../hooks/useArticle'

const ArticlesComponent = () => {
    const { getAllArticles, allArticles } = useArticle()

    useEffect(() => {
        getAllArticles()
    }, [])


    console.log(allArticles)

    return (
        <div>

        </div>
    )
}

export default ArticlesComponent
