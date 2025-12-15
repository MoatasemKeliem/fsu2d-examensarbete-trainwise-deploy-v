export interface IArticle {
    id: string;
    title: string;
    category: "muscle gain" | "fat loss" | "strength" | "endurance" | "general_fitness" | "other";
    content: ArticleContent;
    createdAt: string;
}

interface ArticleContent {
    title: string;
    category: string;
    sections: ArticleSection[]
}

interface ArticleSection {
    heading: string;
    content: string
}