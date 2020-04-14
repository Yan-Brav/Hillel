'use strict';
window.addEventListener('load', function () {
    function init() {
        formView.createForm();
        controllerForm.handleEmployeeAdd();
        controllerForm.handleEmployeeShow();
    }
    class PersonalFormView {
        constructor () {
            this._container = document.querySelector('#container');
        }
        get container() {
            return this._container;
        }
        createForm(){
            const formPersonalInfo = document.createElement('form');
            const fieldsetPersonalInfo = document.createElement('fieldset');
            const divPersonalName = document.createElement('div');
            const divPersonalLastName = document.createElement('div');
            const divPersonalAge = document.createElement('div');
            const divMenu = document.createElement('div');
            const inputName = document.createElement('input');
            const inputLastName = document.createElement('input');
            const inputAge = document.createElement('input');
            const inputAdd = document.createElement('input');
            const inputShow = document.createElement('input');

            //Attribute setting
            formPersonalInfo.id = 'personal-info';
            fieldsetPersonalInfo.setAttribute('form', 'personal-info');
            divPersonalName.id = 'personal-name';
            divPersonalName.className = 'grid-personal';
            divPersonalLastName.id = 'personal-lastName';
            divPersonalLastName.className = 'grid-personal';
            divPersonalAge.id = 'personal-age';
            divPersonalAge.className = 'grid-personal';
            divMenu.id = 'menu';
            divMenu.className = 'grid-menu';
            inputName.id = 'name';
            inputName.setAttribute('type', 'text');
            inputLastName.id = 'lastName';
            inputLastName.setAttribute('type', 'text');
            inputAge.id = 'age';
            inputAge.setAttribute('type', 'number');

            inputAdd.id = 'add';
            inputAdd.setAttribute('type', 'button');
            inputAdd.setAttribute('value', 'Add');
            inputShow.id = 'show';
            inputShow.setAttribute('type', 'button');
            inputShow.setAttribute('value', 'Show');

            //InnerHTML
            fieldsetPersonalInfo.innerHTML = '<legend><b>Персональные данные</b></legend>';
            divPersonalName.innerHTML = '<label for="name">Имя</label>';
            divPersonalLastName.innerHTML = '<label for="lastName">Фамилия</label>';
            divPersonalAge.innerHTML = '<label for="age">Возраст</label>';
            this._container.innerHTML = '<h2>Форма заполнения персональных данных</h2>';

            //Append
            this.appendKids(divPersonalName, inputName);
            this.appendKids(divPersonalLastName, inputLastName);
            this.appendKids(divPersonalAge, inputAge);
            this.appendKids(fieldsetPersonalInfo, divPersonalName);
            this.appendKids(fieldsetPersonalInfo, divPersonalLastName);
            this.appendKids(fieldsetPersonalInfo, divPersonalAge);
            this.appendKids(divMenu, inputAdd);
            this.appendKids(divMenu, inputShow);
            this.appendKids(fieldsetPersonalInfo, divMenu);

            this.appendKids(formPersonalInfo, fieldsetPersonalInfo);
            this.appendKids(this._container, formPersonalInfo);
        }
        appendKids(acceptor, donor){
            return acceptor.appendChild(donor);
        }
    }
    class PersonalListView {
        constructor () {
            this._container = document.querySelector('#container');
        }
        get listContainer() {
            return this._container;
        }
        fromLocalStorage() {
            return JSON.parse(localStorage.getItem('empl')) || [];
        }
        createList() {
            const formList = document.createElement('form');
            const fieldset = document.createElement('fieldset');
            const legend = document.createElement('legend');
            const divList = document.createElement('div');
            const divBack = document.createElement('div');
            const olList = document.createElement('ol');
            const buttonBack = document.createElement('button');

            buttonBack.className = 'form-return';
            buttonBack.innerText = 'Back';
            olList.id = 'ol-list';
            divList.id = 'personal-list';
            divBack.appendChild(buttonBack);
            divList.appendChild(olList);
            divList.appendChild(divBack);
            legend.innerText = 'Работники';
            formList.id = 'employee-list';
            fieldset.appendChild(legend);
            fieldset.appendChild(divList);
            formList.appendChild(fieldset);

            this.listContainer.innerHTML = '<h2>Список работников (фамилии)</h2>';
            this.listContainer.appendChild(formList);
        }
        renderList() {
                const newOderList = this.listContainer.querySelector('#ol-list');
                this.fromLocalStorage().forEach(function (item) {
                    const newLi = document.createElement('li');
                    const delButton = document.createElement('button');
                    const editButton = document.createElement('button');
                    newLi.innerText = item.lastName;
                    delButton.innerText = '\u00D7';
                    delButton.className = 'delete';
                    editButton.innerText = 'Edit';
                    editButton.className = 'edit';
                    newLi.appendChild(delButton);
                    newLi.appendChild(editButton);
                    newOderList.appendChild(newLi);
                });
                return newOderList;
        }
    }
    class EditPersonalView{
        constructor () {
            this._container = document.querySelector('#container');
        }
        get editContainer() {
            return this._container;
        }
        createEdit(){
            const formEdit = document.createElement('form');
            const fieldsetEdit = document.createElement('fieldset');
            const divEditName = document.createElement('div');
            const divEditLastName = document.createElement('div');
            const divEditAge = document.createElement('div');
            const divReady = document.createElement('div');
            const inputName = document.createElement('input');
            const inputLastName = document.createElement('input');
            const inputAge = document.createElement('input');
            const inputReady = document.createElement('input');

            //Attribute setting
            formEdit.id = 'edit-info';
            fieldsetEdit.setAttribute('form', 'edit-info');
            divEditName.id = 'edit-name';
            divEditName.className = 'grid-personal';
            divEditLastName.id = 'edit-lastName';
            divEditLastName.className = 'grid-personal';
            divEditAge.id = 'edit-age';
            divEditAge.className = 'grid-personal';
            divReady.id = 'menu';
            divReady.className = 'grid-menu';
            inputName.id = 'name';
            inputName.setAttribute('type', 'text');
            inputLastName.id = 'lastName';
            inputLastName.setAttribute('type', 'text');
            inputAge.id = 'age';
            inputAge.setAttribute('type', 'number');

            inputReady.id = 'ready';
            inputReady.setAttribute('type', 'button');
            inputReady.setAttribute('value', 'Ready');

            //InnerHTML
            fieldsetEdit.innerHTML = '<legend><b>Редактирование данных</b></legend>';
            divEditName.innerHTML = '<label for="name">Имя</label>';
            divEditLastName.innerHTML = '<label for="lastName">Фамилия</label>';
            divEditAge.innerHTML = '<label for="age">Возраст</label>';
            this._container.innerHTML = '<h2>Форма редактирования персональных данных</h2>';

            //Append
            divEditName.appendChild(inputName);
            divEditLastName.appendChild(inputLastName);
            divEditAge.appendChild(inputAge);
            fieldsetEdit.appendChild(divEditName);
            fieldsetEdit.appendChild(divEditLastName);
            fieldsetEdit.appendChild(divEditAge);
            divReady.appendChild(inputReady);
            fieldsetEdit.appendChild(divReady);

            formEdit.appendChild(fieldsetEdit);
            this._container.appendChild(formEdit);
        }

    }
    class Employee {
        constructor (formView, listView, editView) {
            this._formView = formView;
            this._listView = listView;
            this._editView = editView;
            this.counter = parseInt(localStorage.getItem('empl-id')) || 0;
        }
        get viewForm() {
            return this._formView;
        }
        get viewList() {
            return this._listView;
        }
        get viewEdit() {
            return this._editView;
        }
        toLocalStorage(employees) {
            localStorage.setItem('empl', JSON.stringify(employees));
        }
        createEmployee() {
            const fieldName = this._formView.container.querySelector('#name');
            const fieldLastName = this._formView.container.querySelector('#lastName');
            const fieldAge = this._formView.container.querySelector('#age');
            // this.counter++;
            return {
                id: this.counter,
                name: fieldName.value,
                lastName: fieldLastName.value,
                age: fieldAge.value
            };
        }
        addEmployees() {
            this.counter++;
            const person = this.createEmployee();
            const employees = this.viewList.fromLocalStorage();
            employees.push(person);
            this.toLocalStorage(employees);
            this._formView.container.querySelector('#name').value = '';
            this._formView.container.querySelector('#lastName').value = '';
            this._formView.container.querySelector('#age').value = '';
            localStorage.setItem('empl-id', this.counter);
        }
        employeeShow() {
            const listView = this.viewList;
            const employee = this;
            listView.createList();
            const returnButton = listView.listContainer.querySelector('.form-return');
            const oderList = listView.renderList();
            function deleteEditEmployee(e) {
                e.preventDefault();
                const textElement = e.target.parentElement.innerText;
                if (e.target.innerText === 'Edit'){
                    employee.updateEmployee(textElement.slice(0, textElement.length - 5));
                }else {
                    employee.removeEmployee(textElement.slice(0, textElement.length - 5));
                }
            }
            oderList.addEventListener('click', deleteEditEmployee);
            function returnForm(e) {
                e.preventDefault();
                init();
            }
            returnButton.addEventListener('click', returnForm);
        }
        removeEmployee(lastName) {
            const employees = this.viewList.fromLocalStorage();
            employees.forEach(function (item, index) {
                if (item.lastName === lastName){
                    employees.splice(index, 1);
                }
            });
            this.toLocalStorage(employees);
            const listView = this.viewList;
            const orderList = listView.renderList();
            orderList.innerHTML = '';
            listView.renderList();
        }
        updateEmployee(lastName) {
            const employees = this.viewList.fromLocalStorage();
            const editView = this.viewEdit;
            const employee = this;
            editView.createEdit();
            employees.forEach(function (item) {
                if (item.lastName === lastName){
                    editView.editContainer.querySelector('#name').value = item.name;
                    editView.editContainer.querySelector('#lastName').value = item.lastName;
                    editView.editContainer.querySelector('#age').value = item.age;
                }
            });
            function saveAfterEdit() {
                employee.saveUpdatedEmployee(lastName);
                employee.employeeShow();
            }
            const buttonReady = this.viewEdit.editContainer.querySelector('#ready');
            buttonReady.addEventListener('click', saveAfterEdit);
        }
        saveUpdatedEmployee(lastName) {
            const employees = this.viewList.fromLocalStorage();
            const editView = this.viewEdit;
            const editingName = editView.editContainer.querySelector('#name').value;
            const editingLastName = editView.editContainer.querySelector('#lastName').value;
            const editingAge = editView.editContainer.querySelector('#age').value;
            const counter = this.counter;
            employees.forEach(function (item, index) {
                if (lastName === item.lastName) {
                    const editingPerson = {};
                    editingPerson.id = counter;
                    editingPerson.name = editingName;
                    editingPerson.lastName = editingLastName;
                    editingPerson.age = editingAge;
                    employees.splice(index, 1, editingPerson);
                }
            });
            this.toLocalStorage(employees);
        }
    }
    class formController {
        constructor (employee) {
            this.employee = employee;
        }
        handleEmployeeAdd() {
            const person = this.employee.createEmployee();
            const employee = this.employee;
            function addEmployee() {
                employee.addEmployees(person);
            }
            const buttonAdd = employee.viewForm.container.querySelector('#add');
            buttonAdd.addEventListener('click', addEmployee);
        }
        handleEmployeeShow() {
            const employee = this.employee;
            function showEmployeeList(){
                employee.employeeShow();
            }
            const buttonShow = employee.viewForm.container.querySelector('#show');
            buttonShow.addEventListener('click', showEmployeeList);
        }
    }
    class GlobalController {

    }
    const formView = new PersonalFormView();
    const listView = new PersonalListView();
    const editView = new EditPersonalView();
    const model = new Employee(formView, listView, editView);
    const controllerForm = new formController(model);
    init();
});


