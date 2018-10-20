function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    id += 1

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id,
    });

    newToDoText.value = '';

    renderTheUI();
  }

  function removeToDo(id) {
    const index = toDos.findIndex(toDo => {
      return toDo.id === id;
    });
    toDos.splice(index, 1);
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const deleteButton = document.createElement('button');
      deleteButton.innerText = "Delete"
      deleteButton.addEventListener('click', event => {
        removeToDo(toDo.id)
      })
      newLi.textContent = toDo.title;
      newLi.appendChild(deleteButton);


      toDoList.appendChild(newLi);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
    onReady();
 };
