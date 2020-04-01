const mainContainer = document.getElementById('container');
const h1Element = document.createElement('h1');
const paragraph = document.createElement("p");
const formZoo = document.createElement('form');
const fieldsetContact = document.createElement('fieldset');
const fieldsetPersonal = document.createElement('fieldset');
const fieldsetPets = document.createElement('fieldset');
const legendContact = document.createElement('legend');
const legendPersonal = document.createElement('legend');
const legendPets = document.createElement('legend');
const divContactName = document.createElement('div');
const divContactPhone = document.createElement('div');
const divContactEmail = document.createElement('div');
const divPersonalAge = document.createElement('div');
const divPersonalSex = document.createElement('div');
const divPersonalFeatures = document.createElement('div');
const divPetsOne = document.createElement('div');
const divPetsTwo = document.createElement('div');
const selectSex = document.createElement('select');
const optionFemale = document.createElement('option');
const optionMale = document.createElement('option');
const optionTransgender = document.createElement('option');
const inputSubmit = document.createElement('input');
mainContainer.innerHTML = '<div></div>';
const divForTitle = document.querySelector('#container>div');
h1Element.innerText = 'Форма заявки на работу в зоопарке';
paragraph.innerHTML = '<i>Пожалуйста, заполните форму. Обязательные поля помечены'
    + '<span class="required">*</span></i>';
//Set attributes
formZoo.setAttribute('id', 'zoo-employee');
fieldsetContact.setAttribute('id', 'contact');
fieldsetContact.setAttribute('form', 'zoo-employee');
fieldsetPersonal.setAttribute('id', 'personal-info');
fieldsetPersonal.setAttribute('form', 'zoo-employee');
fieldsetPets.setAttribute('id', 'pets');
fieldsetPets.setAttribute('form', 'zoo-employee');
divContactName.setAttribute('class', 'contact-info grid-item-2');
divContactPhone.setAttribute('class', 'contact-info grid-item-2');
divContactEmail.setAttribute('class', 'contact-info grid-item-2');
divPersonalAge.setAttribute('class', 'personal-info grid-item-2');
divPersonalSex.setAttribute('class', 'personal-info grid-item-2');
divPersonalFeatures.setAttribute('class', 'personal-info grid-item-2');
selectSex.setAttribute('id', 'personal-sex');
optionFemale.setAttribute('value', 'female');
optionMale.setAttribute('value', 'male');
optionTransgender.setAttribute('value', 'transgender');
divPetsOne.setAttribute('id', 'pets-one');
divPetsOne.setAttribute('class', 'pets grid-item-4');
divPetsTwo.setAttribute('id', 'pets-two');
divPetsTwo.setAttribute('class', 'pets grid-item-4');
inputSubmit.setAttribute('id', 'submit');
inputSubmit.setAttribute('type', 'submit');
inputSubmit.setAttribute('value', 'Отправить информацию');

//InnerHTML and Text
divContactName.innerHTML = '<label for="contact-name">' +
    'Имя<span class="required">*' +
    '</span></label><input id="contact-name" type="text" required>';
divContactPhone.innerHTML = '<label for="contact-phone">Телефон' +
    '</label><input id="contact-phone" type="text">';
divContactEmail.innerHTML = '<label for="contact-email">Email' +
    '<span class="required">*</span></label><input id="contact-email" type="email" required>';
divPersonalAge.innerHTML = '<label for="personal-age">Возраст' +
    '<span class="required">*</span></label><input id="personal-age" type="text" required>';
divPersonalSex.innerHTML = '<label for="personal-sex">Пол</label>';
divPersonalFeatures.innerHTML = '<label for="personal-features">Перечислите' +
    '<br>личные<br>качества</label>\n' +
    '<textarea id="personal-features"></textarea>';
optionFemale.innerText = 'Женщина';
optionMale.innerText = 'Мужчина';
optionTransgender.innerText = 'Трансгендер';
divPetsOne.innerHTML = '<div><input type="checkbox" id="zebra"><label for="zebra">Зебра</label></div>\n' +
    '                   <div><input type="checkbox" id="cat"><label for="cat">Кошак</label></div>\n' +
    '                   <div><input type="checkbox" id="anaconda"><label for="anaconda">Анаконда</label></div>\n' +
    '                   <div><input type="checkbox" id="human"><label for="human">Человек</label></div>';
divPetsTwo.innerHTML = '<div><input type="checkbox" id="elephant"><label for="elephant">Слон</label></div>\n' +
    '                   <div><input type="checkbox" id="antelope"><label for="antelope">Антилопа</label></div>\n' +
    '                   <div><input type="checkbox" id="pigeon"><label for="pigeon">Голубь</label></div>\n' +
    '                   <div><input type="checkbox" id="crab"><label for="crab">Краб</label></div>';
legendContact.innerHTML = '<b>Контактная информация</b>';
legendPersonal.innerHTML = '<b>Персональная информация</b>';
legendPets.innerHTML = '<b>Выберите ваших любимых животных</b>';

//Append elements
function appendKids(acceptor, donor){
    return acceptor.appendChild(donor);
}
appendKids(selectSex, optionFemale);

appendKids(selectSex, optionMale);
appendKids(selectSex, optionTransgender);
appendKids(divPersonalSex, selectSex);
appendKids(divForTitle, h1Element);

appendKids(divForTitle, paragraph);
appendKids(fieldsetContact, legendContact);

appendKids(fieldsetContact, divContactName);
appendKids(fieldsetContact, divContactPhone);
appendKids(fieldsetContact, divContactEmail);
appendKids(fieldsetPersonal, legendPersonal);

appendKids(fieldsetPersonal, divPersonalAge);
appendKids(fieldsetPersonal, divPersonalSex);
appendKids(fieldsetPersonal, divPersonalFeatures);
appendKids(fieldsetPets, legendPets);

appendKids(fieldsetPets, divPetsOne);
appendKids(fieldsetPets, divPetsTwo);
appendKids(formZoo, fieldsetContact);

appendKids(formZoo, fieldsetPersonal);
appendKids(formZoo, fieldsetPets);
appendKids(formZoo, inputSubmit);

appendKids(mainContainer, formZoo);
