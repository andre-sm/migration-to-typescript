import { Article } from './article';

export interface ArticlesResponse {
    status: string;
    totalResults: number;
    articles: Readonly<Article>[];
}
