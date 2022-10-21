import './message.css';

class Message {
    draw(data: string) {
        (document.querySelector('.sources') as HTMLElement).innerHTML = '';
        const messageSpan: HTMLSpanElement = document.createElement('span');
        messageSpan.classList.add('message');
        messageSpan.textContent = data;

        (document.querySelector('.sources') as HTMLElement).append(messageSpan);
    }
}

export default Message;
