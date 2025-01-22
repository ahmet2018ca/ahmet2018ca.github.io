// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const newTaskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");
    const deleteALlTasksButton = document.getElementById("clear-all-tasks")
    const taskList = document.getElementById("task-list");
    const deleteCheckedButton = document.getElementById("delete-checked");
  
    // Function to add a new task
    addTaskButton.addEventListener("click", () => {
      const taskText = newTaskInput.value.trim(); // Get input value and remove extra spaces
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      // Create a new <li> element with a checkbox and text
      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      

      // Wrap the task text in a <span>
      const textSpan = document.createElement("span");
      textSpan.textContent = ` ${taskText}`;
      //const textNode = document.createTextNode(` ${taskText}`);
      
      
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.classList.add("edit-button");
  
      // Append the checkbox and text to the list item
      listItem.appendChild(checkbox);
      listItem.appendChild(textSpan);
      listItem.appendChild(editButton);
  
      // Add the list item to the task list
      taskList.appendChild(listItem);
  
      // Clear the input field
      newTaskInput.value = "";


      editButton.addEventListener("click", () => {
        if (editButton.textContent == "Edit") {
          editButton.textContent = "Save";
          const taskTextSpan = listItem.querySelector("span");
          //console.log(taskTextSpan.textContent); // Logs the text inside the <span>
          const editTaskTextInput = document.createElement("input");
          editTaskTextInput.classList.add("edit-input"); // Add a class to distinguish it
          editTaskTextInput.value = taskTextSpan.textContent // Prepopulate with the current task text
          listItem.insertBefore(editTaskTextInput, editButton)
          listItem.removeChild(textSpan)
        
        }
        else { 
          editButton.textContent = "Edit";
          const editTaskInput = listItem.querySelector(".edit-input"); // Find the input dynamically
          const taskSpan = document.createElement("span");
          const taskText = editTaskInput.value.trim(); // Get input value and remove extra spaces
          console.log(taskText)
          taskSpan.textContent = `${taskText}`;
          listItem.insertBefore(taskSpan, editButton);
          listItem.removeChild(editTaskInput)
        }
      })
    });
  
    // Function to delete checked tasks
    deleteCheckedButton.addEventListener("click", () => {
      const tasks = taskList.querySelectorAll("li");
      tasks.forEach((task) => {
        const checkbox = task.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
          taskList.removeChild(task); // Remove the task if checked
        }
      });
    });

    // Function to delete all tasks regardless if they are checked
    deleteALlTasksButton.addEventListener("click", () => {
        const tasks = taskList.querySelectorAll("li");
        tasks.forEach((task) => {
            taskList.removeChild(task); //Remove task regardless if its checked
        });
    })

  });
  