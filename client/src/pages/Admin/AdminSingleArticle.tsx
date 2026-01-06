import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useArticleAdmin from "../../hooks/Admin/useArticleAdmin"
import { ImSad2 } from "react-icons/im"

const AdminSingleArticle = () => {
    const { id } = useParams()
    const { getArticleByIdAdmin, adminArticleByID, deleteArticleByIdAdmin } = useArticleAdmin()

    useEffect(() => {
        if (!id) return

        getArticleByIdAdmin(id)
    }, [])

    if (!adminArticleByID) {
        return (
            <div className="no-content-page">
                <div className="no-content">
                    <ImSad2 className="no-render-icon" />
                    <h2 className="no-content-message">Coludn't find a aricle, please try generating a new article.</h2>
                </div>
            </div>
        )
    }


    return (
        <div className="singel-page-page">

            <section className="singel-page-log-div">
                <h2 className="singel-page-h4">{adminArticleByID.title}</h2>
                <h3 className="single-article-category "><span className="category">Category: </span>{adminArticleByID.category}</h3>

                <div>
                    <div>
                        {
                            adminArticleByID.content.sections.map((section, index: number) => {
                                return (
                                    <div className="singel-page-div" key={index}>
                                        <h5 className="single-article-title">{section.heading}</h5>
                                        <p className="singel-page-day-exercies">{section.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='button-div'>
                    <button className="single-page-button delete-button" onClick={() => { deleteArticleByIdAdmin(String(id)) }}>Delete Article</button>
                </div>

            </section>
        </div>
    )
}

export default AdminSingleArticle
