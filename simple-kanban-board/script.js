const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach( card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})

function dragstart() {
  dropzones.forEach( dropzone => dropzone.classList.add('highlight'))
  // this esta refereciando este cartão
  this.classList.add('is-dragging')
}

function drag() {

}

function dragend() {
  dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))
  
  this.classList.remove('is-dragging')

}

// dropzone

dropzones.forEach( dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter() {

}

function dragover() {
  this.classList.add('over')
  // get dragging card
  const cardBeingDragged = document.querySelector('.is-dragging')
  this.appendChild(cardBeingDragged)
}

function dragleave() {
  this.classList.remove('over')
}
function drop() {
  this.classList.remove('over');
  const  removeTask = document.getElementById('removeTask');
  if (removeTask.innerHTML != 0) {
    console.log('cu')
  }

}


const  removeTask = document.getElementById('removeTask');
removeTask.addEventListener('dragend', () => removeTask.innerHTML = "")

const button = document.querySelector('button')
button.addEventListener('click', createTask)

function createTask(){  
  const status = document.getElementById('select').value
  
  const task = document.getElementById('createTask').value
    
  var card = document.createElement('div');
  card.className = "card";
  card.setAttribute('draggable', 'true')
  card.innerHTML = `
    <div class="status ${status}"></div>
    <div class="content">${task}</div>`;
    document.querySelector('.dropzone').appendChild(card); 
    // Usei o querrySelector mesmo pq a ideia era que o card sempre surgisse no primeiro bloco. 

}