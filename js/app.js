


var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button

var editButton = document.getElementsByTagName("button")[1]; //second button

var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");//completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
	//Create List Item
  var listItem = document.createElement("li");

  //input (checkbox)
  var checkBox = document.createElement("input"); // checkbox
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input"); // text
  //button.edit
  var editButton = document.createElement("button");
  //button.delete
  var deleteButton = document.createElement("button");
  
  //Each element needs modifying
  
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  //Each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
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

	taskInput.value = "";
}

//edit an existing task
var editTask = function() {
	console.log("edit task....")

	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector("label");

	var containsClass = listItem.classList.contains("editMode");
		//if the class of the parent is .editMode
	if(containsClass) {
		//switch from .editMode
		//make the label text become the input's value
		label.innerText = editInput.value;
	
	} else {
		//switch to .editMode
		//input value becomes the label's text
		editInput.value = label.innerText;

    }
	//Toggle .editMode on the listItem
	listItem.classList.toggle("editMode");

}

//switch the edit button to save button
//during edit mode
var changeButtonText = function() {

	var listItem = this.parentNode;
	var editButton = listItem.querySelector("button[class=edit]");
	var containsClass = listItem.classList.contains("editMode");

	if(containsClass) {
			//when edit button is click
			//innertext changes to save
			editButton.innerText = "Save";
		} else {


			editButton.innertext = "Edit";

        }
		//Toggle .editMode on the listItem
		listItem.classList.toggle("editMode");

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

var ajaxRequest = function() {
	console.log("AJAX request");
}


//set the click handler to the addTask function 

addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

//set the click handler to the editTask and changeButtonText function
editButton.addEventListener("click", editTask);
editButton.addEventListener("click", changeButtonText);



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