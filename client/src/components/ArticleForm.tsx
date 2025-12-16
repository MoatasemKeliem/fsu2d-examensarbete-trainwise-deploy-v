import { useState } from 'react'
import { articleCaetgory } from '../utils'
import type { IArticleAdmin } from '../model/Admin/IArticleAdmin'

const ArticleForm = () => {
    const [createArticle, setCreateArticle] = useState<IArticleAdmin>({
        title: "",
        category: "general_fitness"
    })



    return (
        <div>
            <form action="">
                <br />
                <label>Title <br />
                    <input type="text" name="title" value={createArticle.title} onChange={(e) => { setCreateArticle({ ...createArticle, title: e.target.value }) }} required />
                </label><br /><br />
                <span>Category</span>
                {
                    articleCaetgory.map((option) => {
                        return (
                            <label key={option.value}>
                                <input type="radio"
                                    checked={createArticle.category === option.value}
                                    name="category"
                                    value={createArticle.category}
                                    onChange={() => { setCreateArticle({ ...createArticle, category: option.value as IArticleAdmin["category"] }) }}
                                />
                                <span>{option.icon}</span>
                                {option.label}

                            </label>
                        )
                    })
                }
                <br /><br />
                <button type='submit'>Create Article</button>
            </form>
        </div>
    )
}

export default ArticleForm
