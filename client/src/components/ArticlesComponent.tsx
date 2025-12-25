import { useEffect } from 'react'
import useArticle from '../hooks/useArticle'
import { Link } from 'react-router-dom'
import "../style/render.css"

const ArticlesComponent = () => {
    const { getAllArticles, allArticles } = useArticle()

    useEffect(() => {
        getAllArticles()
    }, [])



    if (!allArticles) {
        return <h2>There is no articles, at the moment</h2>
    }

    return (
        <div className='render-page-div'>
            {
                allArticles.map((article) => {
                    return (
                        <div key={article.id} className='render-item'>
                            <h3 className='render-sub-title'>{article.content?.title}</h3>
                            <h4 className='render-category'>Caetgory: {article.category}</h4>

                            <p className='render-date'>{article.createdAt.slice(0, 10)}</p>
                            <Link to={`/articles/${article.id}`}>
                                <button>View Article</button></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ArticlesComponent
