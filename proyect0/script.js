const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete'
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const DeleteAll = document.getElementById('deleteall')

DeleteAll.classList.add("none")


function newTodo() {
// Allow user to enter the new ToDo
   let ImputNewToDo = prompt("Enter a ne ToDo", "New ToDo")
 
  //add item
  addItem(ImputNewToDo)
}  

function addItem(value){
	//create new item
	const newItem = document.createElement('li')
	newItem.className = classNames['TODO_ITEM']
	
	// Create a checkbox element
	const checkBoxItem = document.createElement('INPUT')
	checkBoxItem.setAttribute('type', 'checkBox')
	checkBoxItem.setAttribute('onclick', 'updateCount()')
	checkBoxItem.ClassName = classNames['TODO_CHECKBOX']

	// Create a label
	const labelItem = document.createElement('label')
	labelItem.innerHTML = value
	labelItem.className = classNames['TODO_TEXT']

	// Create a delete button
	const deleteButton = document.createElement('button')
	deleteButton.innerHTML = 'delete'
	deleteButton.setAttribute('onClick', 'deleteItem(this)')
	deleteButton.className = classNames['TODO_DELETE']

	// Append the elements to the list
	newItem.appendChild(checkBoxItem)
	newItem.appendChild(labelItem)
	newItem.appendChild(deleteButton)

	list.appendChild(newItem)
	updateCount()
}

// Delete item
function deleteItem (item) {
	item.parentNode.parentNode.removeChild(item.parentNode)
	updateCount()
}

// Delete all item checked
function RemovesCheckedTodo (){
	const items = list.querySelectorAll('li')
	items.forEach(function(item){
		if(item.firstChild.checked === true){
		item.parentNode.removeChild(item)
		}
	})
	DeleteAll.classList.remove("none")
	updateCount()
}
// update the count
function updateCount () {
	let itemCount = 0
	let uncheckedItemCount = 0
 
	// Get all the items
	let allItems = document.getElementsByTagName('li')
	itemCount = allItems.length

	// check how many items are unchecked
	const items = list.querySelectorAll('li')
		items.forEach(function(item){
			if(item.firstChild.checked === false){
			uncheckedItemCount++
			}
		})
	itemCount - uncheckedItemCount < 1?DeleteAll.classList.add("none"):DeleteAll.classList.remove("none")
	
	itemCountSpan.innerHTML = itemCount
	uncheckedCountSpan.innerHTML = uncheckedItemCount
}

