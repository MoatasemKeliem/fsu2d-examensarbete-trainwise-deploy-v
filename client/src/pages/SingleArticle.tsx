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
        <div>
            <h1>Single Article</h1>

            <section>
                <h2>{articleById.title}</h2>
                <h3>{articleById.category}</h3>

                <div>
                    <h4> {articleById.content.title}</h4>
                    <div>
                        {
                            articleById.content.sections.map((section, index: number) => {
                                return (
                                    <div key={index}>
                                        <h5>{section.heading}</h5>
                                        <p>{section.content}</p>
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
