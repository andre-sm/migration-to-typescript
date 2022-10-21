import './sources.css';
import { SourcesData } from '../../../interfaces/sources-data';

class Sources {
    draw(data: SourcesData[]) {
        (document.querySelector('.sources') as HTMLElement).innerHTML = '';

        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item: SourcesData) => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true) as HTMLTemplateElement;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}

export default Sources;
