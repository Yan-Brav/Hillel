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
class NotificationController {
    constructor (observer) {
        this.observer = observer;
    }
    notifyAll() {
        const observer = this.observer;
        const inputText = document.querySelector('input[type=text]');
        function notify() {
            observer.broadcast(inputText.value);
        }
        inputText.addEventListener('input', notify);
    }
}

const observer = new Observer();
const subsController = new SubsAddContr(observer);
const notifyController = new NotificationController(observer);
subsController.addSubscriber();
notifyController.notifyAll();

