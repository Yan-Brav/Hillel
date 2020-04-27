window.addEventListener('load', function () {
    let activeCount = 0;
    const possibleNoActive = 60;
    const message = 'Stand up and fight';
    const p = document.querySelector('p');
    setInterval(() => {
        activeCount++;
        if (activeCount >= possibleNoActive) {
            p.innerText = message;
        }
    }, 1000);
    document.addEventListener('mousemove', () => {
        activeCount = 0;
        p.innerText = '';
    });
    document.addEventListener('keydown', () => {
        activeCount = 0;
        p.innerText = '';
    });
    document.addEventListener('click', () => {
        activeCount = 0;
        p.innerText = '';
    });
});
