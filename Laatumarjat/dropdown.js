// Create a dropdown class

class Dropdown {
    constructor(container) {
        if (!(container instanceof Element)) {
            throw new Error('Container must be a DOM element');
        }
        this.container = container;
        this.trigger = container.querySelector('.trigger');
        this.answer = container.querySelector('.answer');
    }

    init() {
        this.trigger.addEventListener('click', () => {
            this.trigger.classList.toggle('active');
            this.answer.classList.toggle('active');
        });
    }
}

export default Dropdown;