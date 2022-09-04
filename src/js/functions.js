let newItem = ''

//Selectors
let list = document.getElementById('list')
let inputField = document.getElementById('task')
let addTodo = document.getElementById('liveToastBtn')

//Toast messages
let errorMsg = new bootstrap.Toast(document.getElementById('toastError'))
let successMsg = new bootstrap.Toast(document.getElementById('toastSuccess'))

//Event listeners
inputField.addEventListener('change',  inputListener)
addTodo.addEventListener('click', function() { addItem(newItem, list) })
list.addEventListener('click', function(e){ listenList(e) })

//Remove item from todolist
function removeItem(e) {
    e.parentNode.remove()
}

//Equalize global variable 'newItem' to input value
function inputListener() {
    newItem = this.value
}

//Listen list elements
//If target is xMark, then remove item. If target is list item itself, then add checked class
function listenList(e) {
    let element = e.target

    if (element.classList.contains('xmark')) {
        removeItem(element)
    }else{
        if(element.matches('.checked')){
            element.classList.remove('checked')
        }else{
            element.classList.add('checked')
        }
    }
}

//Add item to list, change input item, display toast messages
function addItem(input, list) {
    if(!isEmpty(input)) {
        let listElement = document.createElement('li')
        listElement.innerHTML = input + `<img class="xmark" src="assets/xmark.svg">`
        list.append(listElement)

        newItem = ''
        inputField.value = ''
        successMsg.show()
    }else{
        errorMsg.show()
    }
}

//Check if input is empty
function isEmpty (input) {
    return !input.trim().length
}