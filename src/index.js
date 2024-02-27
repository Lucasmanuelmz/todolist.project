import './style.css';
import createTask from './title';
import myLocalStorage from './storage';

function displayDataOnDocument() {
    const main = document.querySelector('main');
    const favDialog = document.createElement('dialog');
    favDialog.classList.add('favDialog');
    favDialog.open = true;

    const updateButton = document.createElement('button');
    updateButton.textContent= 'Este botão está sendo muito procurado';
    

    updateButton.addEventListener('click', () => {
        favDialog.showModal();
    });

    
    main.appendChild(favDialog);
    main.appendChild(updateButton)

    const form = document.createElement('form');
    form.id = 'form';
    form.method ='dialog';
    form.action ='/';
    favDialog.appendChild(form);

    const containerDiv = document.createElement('div');
    containerDiv.id = 'container';
    form.appendChild(containerDiv);

    const input = document.createElement('input');
    input.type='text';
    input.placeholder ='Adicione uma tarefa';
    input.name='title';
    input.id='title';
    input.required=true;
    containerDiv.appendChild(input);

    const textarea = document.createElement('textarea');
    textarea.id='textarea';
    textarea.placeholder='Descrição';
    textarea.name='descrição';
    textarea.required = true;
    containerDiv.appendChild(textarea);

    const div = document.createElement('div');
    div.classList.add('options');
    form.appendChild(div);

    const select = document.createElement('select');
    select.classList.add('select');

    let myOptions;

    for(let i = 1; i < 10; i++) {
        const option = document.createElement('option');
        myOptions = option;
        myOptions.classList.add('my-option');
        myOptions.textContent = `Prioridade ${i}`;
        myOptions.value = `prioridade ${i}`;
        select.appendChild(myOptions);
     }
    div.appendChild(select);

    const date = document.createElement('input');
    date.type='date';
    date.required = true;
    div.appendChild(date);

    const label = document.createElement('label');
    label.for = 'checkbox';
    label.textContent ='Marque se já, fez a tarefa';
    label.style.cssText = `
    font-size: 12px;`;

    div.appendChild(label);
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.id = 'checkbox';
    div.appendChild(check);
    containerDiv.append(div);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    form.appendChild(buttonContainer);

    const cancelButton = document.createElement('button');
    cancelButton.textContent='Cancelar';
    cancelButton.style.padding='5px 10px';
    cancelButton.style.marginRight='15px';
    cancelButton.style.alignSelf = 'flex-end';
    cancelButton.style.boxShadow = '2px 2px 2px #DDD';
    cancelButton.style.fontSize = '12px';
    buttonContainer.appendChild(cancelButton);

    cancelButton.addEventListener('click', () => {
        favDialog.close();
    });

    const btn = document.createElement('button');
    btn.type='submit';
    btn.textContent = 'Adicionar tarefa';
    btn.id= 'button';
    buttonContainer.appendChild(btn);

    btn.addEventListener('click',(e) => {
        const title = input.value;
        const description = textarea.value;
        const priority = select.value;
        const dueDate = date.value;
        const checklist = check.checked? 'Tarefa cocluída com sucesso': 'Tarefa não concluída';
        
        const myTasks = createTask(title, description,priority, dueDate ,'' ,checklist);
        console.log(myTasks.title);
        console.log(myTasks.description);
        console.log(myTasks.priority);
        console.log(myTasks.dueDate);
        console.log(myTasks.checklist);
        myLocalStorage(title, description, priority, dueDate, '', checklist);
        e.preventDefault();
    });

    return favDialog;
}

document.addEventListener('DOMContentLoaded', () => {
    const myApp = displayDataOnDocument();
    document.body.appendChild(myApp);
});

 