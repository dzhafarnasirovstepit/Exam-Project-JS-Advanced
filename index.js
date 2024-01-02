class Tasks {

    #id;
    #name;
    #description;
    #dateOfCreation;
    #status;

    constructor(name, description, creationDate, isCompleted = false) {

        this.#id = 'id' + Math.random().toString(16).slice(2);
        this.#name = name;
        this.#description = description;
        this.#dateOfCreation = this.validateAndFormatDate(creationDate);
        this.#status = isCompleted;
    };

    validateAndFormatDate(dateString) {
        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])[\/.](0[1-9]|1[0-2])[\/.](\d{4})\s(\d{2}:\d{2}:\d{2})$/;
        if (!dateRegex.test(dateString)) {
            throw new Error('Invalid date format. Please use dd.mm.yyyy HH:mm:ss or dd/mm/yyyy HH:mm:ss');
        };

        const [day, month, year, time] = dateString.split(/[\/.]/);
        return `${year}-${month}-${day} ${time}`;
    }

    toggleCompletionStatus() {
        this.#status = !this.#status;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get description() {
        return this.#description;
    }

    get dateOfCreation() {
        return this.#dateOfCreation;
    }

    get status() {
        return this.#status;
    }

};

class TasksList {

    #allTasksList;

    constructor(allTasksList) {
        this.#allTasksList = allTasksList;
    }

    get allTasksList() {
        return this.#allTasksList;
    }
}

// checkbox for tasks

document.addEventListener('DOMContentLoaded', function () {

    const taskList = document.getElementById('taskList');
    const newTaskInput = document.getElementById('newTaskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
  
    addTaskBtn.addEventListener('click', function () {

      const newTaskText = newTaskInput.value.trim();

      if (newTaskText !== '') {

        const listItem = document.createElement('li');

        listItem.innerHTML = `
          <input type="checkbox" class="task-checkbox">
          <label>${newTaskText}</label>
          <button class="edit-btn">Редактировать</button>
          <button class="delete-btn">Удалить</button>
        `;

        taskList.appendChild(listItem);
  
        newTaskInput.value = '';
  
        const checkbox = listItem.querySelector('.task-checkbox');

        checkbox.addEventListener('change', function () {

          if (checkbox.checked) {
            listItem.classList.add('completed');

          } else {
            listItem.classList.remove('completed');
          }

        });
  
        const editBtn = listItem.querySelector('.edit-btn');

        editBtn.addEventListener('click', function () {

          const updatedText = prompt('Enter new text of the task:', newTaskText);

          if (updatedText !== null) {
            listItem.querySelector('label').innerText = updatedText;
          }
        });
  
        const deleteBtn = listItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function () {
          listItem.remove();
        });
  
        listItem.addEventListener('click', function () {
          alert('Changing the name of the task to: ' + newTaskText);
        });

      }

    });
    
  });

// regular expressions

const titleRegex = /^(?!\d+$)[EeRrNn]{1,16}( [EeRrNn]{1,16}){1,}$/;

const isValidTitle = titleRegex.test("Title of the task");
console.log(isValidTitle); 

const descriptionRegex = /^(?!\s)[EeRrNn\s]{1,}$/;

const isValidDescription = descriptionRegex.test("Detailed describtion");
console.log(isValidDescription);