'use strict';
window.addEventListener('load', function () {
    const button = document.querySelector('button');
    const p = document.querySelector('p');
    const requestURL = 'http://localhost:3333/users';

    async function getUsers() {
        try {
            const response = await fetch(requestURL);
            p.innerText = await response.json();
        }catch (e) {
            console.error(e);
        }
    }
    button.addEventListener('click', getUsers);
});
