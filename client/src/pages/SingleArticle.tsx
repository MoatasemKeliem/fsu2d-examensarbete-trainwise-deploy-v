import { useParams } from "react-router-dom"
import useArticle from "../hooks/useArticle"
import { useEffect } from "react"
import { ImSad2 } from "react-icons/im"

const SingleArticle = () => {
    const { id } = useParams()
    const { getArticleById, articleById } = useArticle()


    useEffect(() => {
        if (!id) return

        getArticleById(id)


    }, [])

    console.log(articleById)

    if (!articleById) {
        return (
            <div className="no-content-page">
                <div className="no-content">
                    <ImSad2 className="no-render-icon" />
                    <h2 className="no-content-message">Coludn't find a article, please try read another article.</h2>
                </div>
            </div>
        )
    }


    return (
        <div className="singel-page-page">

            <section className="singel-page-log-div">
                <h2 className="singel-page-h4">{articleById.title}</h2>
                <h3 className="single-article-category "><span className="category">Category: </span>{articleById.category}</h3>

                <div>
                    <div>
                        {
                            articleById.content.sections.map((section, index: number) => {
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
                {/* <button onClick={() => { deleteArticleById(String(id)) }}>Delete Article</button> */}
            </section>
        </div>
    )
}

export default SingleArticle
