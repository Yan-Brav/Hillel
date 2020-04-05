window.addEventListener('load', function () {
    let employees = [];
    // let formView = new PersonalFormView();
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
            // const fieldsetMenu = document.createElement('fieldset');
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
            // fieldsetMenu.setAttribute('form', 'personal-info');
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
            inputAdd.setAttribute('value', 'Добавить');
            inputShow.id = 'show';
            inputShow.setAttribute('type', 'button');
            inputShow.setAttribute('value', 'Показать');

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
        /*set listContainer(value) {
            this._container = value;
        }*/
        setListContainer(value){
            this._container = value;
        }
        createList() {
            const divList = document.createElement('div');
            const olList = document.createElement('ol');

            olList.id = 'ol-list';
            divList.id = 'personal-list';
            divList.appendChild(olList);

            this.listContainer.innerHTML = '<h2>Список работников (фамилии)</h2>';
            this.listContainer.appendChild(divList);
        }
    }
    class Employee {
        constructor (formView, listView) {
            this._formView = formView;
            this._listView = listView;
        }
        get viewForm() {
            return this._formView;
        }
        get viewList() {
            return this._listView;
        }
        createEmployee() {
            let fieldName = this._formView.container.querySelector('#name');
            let fieldLastName = this._formView.container.querySelector('#lastName');
            let fieldAge = this._formView.container.querySelector('#age');
            return {
                name: fieldName.value,
                lastName: fieldLastName.value,
                age: fieldAge.value
            };
        }

        addEmployees() {
            let person = this.createEmployee();
            employees.push(person);
            return employees;
        }

        removeEmployee(lastName) {
            employees.forEach(function (item, index) {
                if (item.lastName === lastName){
                    employees.splice(index, 1);
                }
            });
            this._listView.employeeShow();
            // return employees;
        }
    }
    class formController {
        constructor (employee) {
            this.employee = employee;
        }

        handleEmployeeAdd() {
            let person = this.employee.createEmployee();
            let employee = this.employee;
            function addEmployee() {
                employee.addEmployees(person);
                console.log(employees);
            }
            let buttonAdd = this.employee.viewForm.container.querySelector('#add');
            buttonAdd.addEventListener('click', addEmployee);

        }
    }
    class listController {
        constructor (employee) {
            this.employee = employee;
        }

        employeeShow() {
            let listView = this.employee.viewList;
            function showEmployeeList() {
                listView.createList();
                let element = listView.listContainer.querySelector('#ol-list');
                employees.forEach(function (item) {
                    let newLi = document.createElement('li');
                    let newButton = document.createElement('button');
                    newLi.innerText = item.lastName;
                    newButton.innerText = '\u00D7';
                    newButton.className = 'delete';
                    newLi.appendChild(newButton);
                    element.appendChild(newLi);
                });
            }
            let buttonShow = this.employee.viewForm.container.querySelector('#show');
            buttonShow.addEventListener('click', showEmployeeList);
        }
        handleDeleteEmployee() {

            let listView = this.employee.viewList;
            let employee = this.employee;
            // this.employeeShow();
            let element = listView.listContainer.querySelector('.delete');
            function deleteEmployee(e) {
                listView.createList();
                let textElement = e.target.parentElement.innerText;
                employee.removeEmployee(textElement);
            }
            element.addEventListener('click', deleteEmployee);
        }
    }
    let formView = new PersonalFormView();
    let listView = new PersonalListView();
    formView.createForm();
    let model = new Employee(formView, listView);
    let controllerForm = new formController(model);
    let controllerList = new listController(model);
    controllerForm.handleEmployeeAdd();
    controllerList.employeeShow();
    // controllerList.handleDeleteEmployee();
});


