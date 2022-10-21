import News from './news/news';
import Sources from './sources/sources';
import Alphabet from './alphabet/alphabet';
import Message from './message/message';
import { ArticlesResponse } from '../../interfaces/articles-response';
import { SourcesDataResponse } from '../../interfaces/sources-data-response';
import { Letters } from '../../enums/letters';

type Article = Pick<ArticlesResponse, 'articles'>;
type SourcesData = Pick<SourcesDataResponse, 'sources'>;

export class AppView {
    news: News;
    sources: Sources;
    alphabet: Alphabet;
    message: Message;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.alphabet = new Alphabet();
        this.message = new Message();
    }

    drawNews(data?: Article) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data?: SourcesData) {
        const values = data?.sources ? data?.sources : [];

        (document.querySelector('.alphabet') as HTMLElement).addEventListener('click', (e: Event) => {
            const target = e.target as HTMLElement;
            const alphabetContainer = e.currentTarget as HTMLElement;
            const letterId = target.getAttribute('data-alphabet-letter');

            for (const letter of alphabetContainer.children) {
                if (letter.classList.contains('active')) letter.classList.remove('active');
                if (target.classList.contains('alphabet__item') && target === letter) {
                    target.classList.add('active');
                    const clickedLetterSources = values.filter((value) => value.id[0].toUpperCase() === letterId);
                    this.sources.draw(clickedLetterSources);
                }
            }
        });
    }

    drawAlphabet(data?: SourcesData) {
        const actualLetters = this.getActualSourcesLetters(data);
        const letters = this.getAlphabet();
        this.alphabet.draw(letters, actualLetters);
    }

    drawMessage(message: string) {
        this.message.draw(message);
    }

    private getActualSourcesLetters(data: SourcesData | undefined): Set<string> {
        return new Set(data?.sources.map((item) => item.id[0].toUpperCase()));
    }

    private getAlphabet(): string[] {
        return Object.values(Letters).filter((item) => isNaN(+item)) as string[];
    }
}

export default AppView;
