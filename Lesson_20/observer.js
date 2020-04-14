class Observer {
    constructor () {
        this.subscribers = [];
    }
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
    broadcast(message) {
        this.subscribers.forEach(subscriber => {
            subscriber.innerText = message;
        })
    }
}
class SubsAddContr {
    constructor (observer) {
        this.observer = observer;
    }
    addSubscriber() {
        const observer = this.observer;
        function addBlock() {
            const subscriber = document.createElement('div');
            subscriber.className = 'subscriber';
            document.querySelector('body').appendChild(subscriber);
            observer.subscribe(subscriber);
        }
        const button = document.querySelector('#add');
        button.addEventListener('click', addBlock);
    }
}
const inputText = document.querySelector('#message');
const observer = new Observer();
const controller = new SubsAddContr(observer);
controller.addSubscriber();
inputText.addEventListener('input', () => observer.broadcast(inputText.value));
