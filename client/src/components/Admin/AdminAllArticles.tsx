import { useEffect } from 'react'
import useArticleAdmin from '../../hooks/Admin/useArticleAdmin'
import { Link } from 'react-router-dom'

const AdminAllArticles = () => {
    const { getAllArticlesAdmin, allAdminArticles } = useArticleAdmin()

    useEffect(() => {
        getAllArticlesAdmin()
    }, [])

    if (!allAdminArticles) {
        return (
            <div></div>
        )
    }

    console.log(allAdminArticles)

    return (
        <div className='render-page-div'>
            {
                allAdminArticles.map((article) => {
                    return (
                        <div key={article.id} className='render-item'>
                            <h3 className='render-sub-title'>{article.content?.title}</h3>
                            <h4 className='render-category'>Caetgory: {article.category}</h4>
                            <p className='render-date'>{article.createdAt.slice(0, 10)}</p>
                            <Link to={`/articles/${article.id}`}>
                                <button>View Article</button></Link>
                        </div>)
                })
            }
        </div>
    )
}

export default AdminAllArticles
