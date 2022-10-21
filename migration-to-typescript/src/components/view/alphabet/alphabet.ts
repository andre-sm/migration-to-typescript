import './alphabet.css';

class Alphabet {
    draw(data: string[], existNewsLetters: Set<string>) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const alphabetItemTemp: HTMLTemplateElement | null = document.querySelector('#alphabetItemTemp');

        data.forEach((item: string) => {
            const sourceClone = alphabetItemTemp?.content.cloneNode(true) as HTMLTemplateElement;
            const alphabetItem = sourceClone.querySelector('.alphabet__item') as HTMLButtonElement;
            if (!existNewsLetters.has(item)) {
                alphabetItem.disabled = true;
            }
            alphabetItem.textContent = item;
            alphabetItem.setAttribute('data-alphabet-letter', item);

            fragment.append(sourceClone);
        });

        (document.querySelector('.alphabet') as HTMLElement).append(fragment);
    }
}

export default Alphabet;
