var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");//completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {

}


//Add a new task
var addTask = function() {
	console.log("Add task....")
	//when the button is pressed
	//create a new list item in todo with the text from #new-task:
	createNewTaskElement("Some New Task")
		//create an input with a checkbox
		//create a label
		//create an input when we edit the task
		//creaete a button with the class of edit
		//create a button with the class of delete
		//each of these elements need to modified and appended
			//the append method inserts specified content at the end of the selected elements
}

//edit an existing task
var editTask = function() {
	console.log("edit task....")
	//when the edit button is pressed
		//if the class of the parent is .editMode
			//switch from .editMode
			//make the label text become the input's value
		//else
			//switch to .editMode
			//input value becomes the label's text

		//Toggle .editMode on the parent
}

//delete an existing task
var deleteTask = function() {
	console.log("delete task....")
	//when the delete button is pressed
		//remove the parent list item from the unordered list
}



//mark a tast as complete
var taskCompleted = function() {
	console.log("task complete....")
	//when the checkbox is checked
		//append the task list item to the #completed-tasks
}

//mark a task as incomplete
var taskIncomplete = function() {
	console.log("task incomplete....")
	//when the checkbox is unchecked
		//append the task list item to the #incomplete-tasks
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