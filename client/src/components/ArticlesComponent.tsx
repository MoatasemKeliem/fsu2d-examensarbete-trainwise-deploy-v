import { useEffect } from 'react'
import useArticle from '../hooks/useArticle'
import { Link } from 'react-router-dom'

const ArticlesComponent = () => {
    const { getAllArticles, allArticles } = useArticle()

    useEffect(() => {
        getAllArticles()
    }, [])



    if (!allArticles) {
        return <h2>There is no articles, at the moment</h2>
    }

    return (
        <div>
            {
                allArticles.map((article) => {
                    return (
                        <div key={article.id}>
                            <h2>{article.title}</h2>
                            <h3>{article.content?.title}</h3>
                            <h4>Caetgory: {article.category}</h4>
                            <div>

                                {/* {article.content.sections.map((section, index: number) => {
                                    return (
                                        <div key={index}>
                                            <h4>{section.heading}</h4>
                                            <p>{section.content}</p>
                                        </div>
                                    )
                                })} */}
                            </div>

                            <p>{article.createdAt.slice(0, 10)}</p>
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
