window.addEventListener('load', function () {
    let activeCount = 0;
    const possibleNoActive = 5;
    const message = 'Stand up and fight';
    const p = document.querySelector('p');
    setInterval(() => {
        activeCount++;
        if (activeCount >= possibleNoActive) {
            p.innerText = message;
        }
    }, 1000);
    $(document).on('mousemove keydown click', () => {
        activeCount = 0;
        p.innerText = '';
    });
});
