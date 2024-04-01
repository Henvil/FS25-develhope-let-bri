const addProduct = () => {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value;
  const newLi = document.createElement("li");
  newLi.textContent = taskValue;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLi.appendChild(checkbox);
  const taskList = document.getElementById("taskList");
  taskList.appendChild(newLi);
};
