var input = document.querySelector("#todoInput");
var addToDo = document.querySelector("#todoAdd");

/*addToDo.addEventListener("click", function(){

	var toAdd = document.createElement('div');
	toAdd.innerHTML = input.value;
	toAdd.classList.add('todoText');
	document.querySelector(".todoS").appendChild(toAdd);
	input.value = "";
	var addedTasks = document.querySelectorAll(".todoText");

	for(var i = 0; i < addedTasks.length; i++){
		addedTasks[i].addEventListener("click", function(){
			this.classList.add('strike');
		})
	}
})*/

addToDo.addEventListener("click", function(){

	if(input.value !== "")
	{
		var toAdd = document.createElement('div');
		toAdd.classList.add('todoShelf');

		var taskText = document.createElement('span');
		taskText.innerHTML = input.value;
		taskText.classList.add('todoText');

		var deleteButton = document.createElement('button');
		deleteButton.innerHTML = "Delete";
		deleteButton.classList.add('btn');
		deleteButton.classList.add('btn-primary');
		deleteButton.classList.add('actionButton');
		deleteButton.classList.add('deleteButton');

		var completeButton = document.createElement('button');
		completeButton.innerHTML = "Completed";
		completeButton.classList.add('btn');
		completeButton.classList.add('btn-primary');
		completeButton.classList.add('actionButton');
		completeButton.classList.add('completeButton');

		toAdd.appendChild(taskText);
		toAdd.appendChild(deleteButton);
		toAdd.appendChild(completeButton);

		input.value = "";

		document.querySelector(".todoList").appendChild(toAdd);

		var addedTasks = document.querySelectorAll(".todoShelf");
		var addedTaskTexts = document.querySelectorAll(".todoText");
		var deleteButtons = document.querySelectorAll(".deleteButton");
		var completeButtons = document.querySelectorAll(".completeButton");

		for(var i = 0; i < addedTasks.length; i++){

			completeButtons[i].addEventListener("click", function(){

				$(this).siblings('.todoText').addClass('strike');
			})

			deleteButtons[i].addEventListener("click", function(){

				$(this).parent().addClass('noDisplay');
			})

			completeButtons[i].addEventListener("mouseover", function(){
				this.style.backgroundColor = "#fafafa";
				this.style.color = "#232323";
			})

			completeButtons[i].addEventListener("mouseout", function(){
				this.style.backgroundColor = "#343434";
				this.style.color = "#fafafa";
			})

			deleteButtons[i].addEventListener("mouseover", function(){
				this.style.backgroundColor = "#fafafa";
				this.style.color = "#232323";
			})

			deleteButtons[i].addEventListener("mouseout", function(){
				this.style.backgroundColor = "#343434";
				this.style.color = "#fafafa";
			})
		
		}	
	}

	else
	{
		alert('Enter a task!');
	}
	


})

















