const btnElement = document.querySelector('#button');
const todoList = document.querySelector('#todo_list');
function apptodo(){
    const createEleLi = document.createElement('li');
    const inputValue = document.querySelector('.input').value;
    const inputText = document.createTextNode(inputValue);
    createEleLi.appendChild(inputText);
    if(inputValue === ''){
        alert('Please your input value does not exit')
    }else{
        todoList.appendChild(createEleLi)
    }
    document.querySelector('input').value = '';
}
btnElement.addEventListener('click',apptodo)

