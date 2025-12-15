export interface IArticle {
    id: string;
    title: string;
    category: string;
    content?: ArticleContent
    createdAt: string;
}

interface ArticleContent {
    title: string;
    category: string;
    section: ArticleSection
}

interface ArticleSection {
    heading: string;
    conetnt: string
}