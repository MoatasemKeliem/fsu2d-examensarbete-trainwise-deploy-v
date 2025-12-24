import { useState, type FormEvent } from 'react'
import { articleCaetgory } from '../../utils'
import type { IArticleAdmin } from '../../model/Admin/IArticleAdmin'
import useArticleAdmin from '../../hooks/Admin/useArticleAdmin'

const ArticleForm = () => {
    const [createArticle, setCreateArticle] = useState<IArticleAdmin>({
        title: "",
        category: "general_fitness"
    })
    const { generateArticle } = useArticleAdmin()
    const [loading, setLoading] = useState(false)


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            await generateArticle(createArticle)
        } finally {
            setLoading(false)
        }
    }


    if (loading) {
        return (
            <section className="section-loader">
                <div className="loader-div">
                    <span className="loader"></span>
                    <h2>Generating article. Please wait...</h2>
                </div>
            </section>
        )
    }


    return (
        <div className="form-page">
            <h2 className="form-type">Create Article</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <br />
                <label>Title <br />
                    <input type="text" name="title" value={createArticle.title} onChange={(e) => { setCreateArticle({ ...createArticle, title: e.target.value }) }} required />
                </label><br /><br />
                <span>Category</span><br />
                <div>
                    {
                        articleCaetgory.map((option) => {
                            const isChecked = createArticle.category === option.value;

                            return (
                                <label key={option.value} className={isChecked ? "selected-radio" : "form-radio"}>
                                    <input type="radio"
                                        className='option'
                                        checked={createArticle.category === option.value}
                                        name="category"
                                        value={createArticle.category}
                                        onChange={() => { setCreateArticle({ ...createArticle, category: option.value as IArticleAdmin["category"] }) }}
                                    />
                                    <span className='form-icon'>{option.icon}</span>
                                    {option.label}

                                </label>
                            )
                        })
                    }</div>
                <br /><br />
                <button type='submit'>Create Article</button>
            </form>
        </div>
    )
}

export default ArticleForm
