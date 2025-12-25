import { useEffect } from 'react'
import useArticleAdmin from '../../hooks/Admin/useArticleAdmin'
import { Link } from 'react-router-dom'
import { ImSad2 } from 'react-icons/im'

const AdminAllArticles = () => {
    const { getAllArticlesAdmin, allAdminArticles } = useArticleAdmin()

    useEffect(() => {
        getAllArticlesAdmin()
    }, [])

    if (!allAdminArticles) {
        return (
            <div className="no-content-page">
                <div className="no-content">
                    <ImSad2 className="no-render-icon" />
                    <h2 className="no-content-message">Coludn't find a aricle, please try generating a new article.</h2>
                </div>
            </div>
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
                            <Link to={`/admin-article/${article.id}`}>
                                <button>View Article</button></Link>
                        </div>)
                })
            }
        </div>
    )
}

export default AdminAllArticles
