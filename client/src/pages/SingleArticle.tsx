import { useParams } from "react-router-dom"
import useArticle from "../hooks/useArticle"
import { useEffect } from "react"

const SingleArticle = () => {
    const { id } = useParams()
    const { getArticleById, articleById } = useArticle()


    useEffect(() => {
        if (!id) return

        getArticleById(id)


    }, [])

    console.log(articleById)

    if (!articleById) {
        return <h2>article with the ID of {id} doesn't exist</h2>
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
