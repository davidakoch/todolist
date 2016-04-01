var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");//completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
		//create List Item
		var listItem = document.createElement("li");
		//create an input with a checkbox
		var checkBox = document.createElement("input");
		//create a label
		var label = document.createElement("label");
		//create an input when we edit the task
		var editInput = document.createElement("input");
		//creaete a button with the class of edit
		var editButton = document.createElement("button");
		//create a button with the class of delete
		var deleteButton = document.createElement("button");
		
		//each element needs modifying

		checkBox.type = "checkbox";
		editButton.type = "text";

		editButton.innerText = "Edit";
		editButton.className = "edit";
		deleteButton.innerText = "Delete";
		deleteButton.className = "delete";

		label.innerText = taskString; 

		//each element needs appending
		listItem.appendChild(checkBox);
		listItem.appendChild(label);
		//listItem.appendChild(editInput);
		listItem.appendChild(editButton);
		listItem.appendChild(deleteButton);



	return listItem;

}


//Add a new task
var addTask = function() {
	console.log("Add task....")
	//when the button is pressed
	//create a new list item in todo with the text from #new-task:
	var listItem = createNewTaskElement(taskInput.value);
	//Append listItem to incompleteTasksHolder
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

//edit an existing task
var editTask = function() {
	console.log("edit task....")

	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text");
	var label = listItem.querySelector("label");

	var containsClass = listItem.classList.contains("editMode")
		//if the class of the parent is .editMode
		if(containsClass){
			//switch from .editMode
			//make the label text become the input's value
			label.innerText = editInput.value;
		} else {
			//switch to .editMode
			//input value becomes the label's text
			editInput.value = label.innerText;
        }
		//Toggle .editMode on the parent
}

//delete an existing task
var deleteTask = function() {
	console.log("delete task....")
	
	var listItem = this.parentNode;
	var ul = listItem.parentNode; 
	//remove the parent list item from the unordered list
	ul.removeChild(listItem);
}



//mark a tast as complete
var taskCompleted = function() {
	console.log("task complete....")
		//append the task list item to the #completed-tasks
	var listItem = this.parentNode; 
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}

//mark a task as incomplete
var taskIncomplete = function() {
	console.log("task incomplete....")
		//append the task list item to the #incomplete-tasks
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log("Bind list item events");
	//select taskListItem's children
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
		//bind editTask to edit button
	editButton.onclick = editTask; 

		//bind deleteTask to delete button
	deleteButton.onclick = deleteTask; 

		//bind checkBoxEventHandler to the checkbox 
	checkBox.onchange = checkBoxEventHandler;
}

//set the click handler to the addTask function 
addButton.onclick = addTask;

//cycle over the incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
	//for each list item
		//bind events to list item's children (taskCompleted)
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

		

//cycle over the completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
	//for each list item
		//bind events to list item's children (taskIncomplete)
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}