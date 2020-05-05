'use strict';
window.addEventListener('load', function () {
    const button = document.querySelector('button');
    // const p = document.querySelector('p');
    const div = document.querySelector('div');
    const usersList = document.createElement('ol');
    const requestURL = 'http://localhost:3333/users';

    div.appendChild(usersList);

    async function getUsers() {
        try {
            const response = await fetch(requestURL);
            const data = await response.json();
            data.forEach(user => {
                const item = document.createElement('li');
                item.innerText = user.name + ' ' + user.phone;
                usersList.appendChild(item);
            })
        }catch (err) {
            console.error('Something wrong');
        }
    }
    button.addEventListener('click', getUsers);
});
