const initiativeTrackerUl = document.getElementById('initiativeTracker');
const form = document.getElementById('form');
const inputCharacterName = document.getElementById('name');
const inputCharacterInitiative = document.getElementById('initiative');
const playerRadialInput = document.getElementById('player')

const localStorageCharacters = JSON.parse(localStorage.getItem('character'))
let characters = localStorage.getItem('character') !== null ? localStorageCharacters : []

const removeCharacter = ID => {
  characters = characters.filter(character => character.id !== ID);
  updateLocalStorage();
  init();
}

const initiativeValueFormatter = (character) => {
  const initiative = character.initiative
  if (initiative < 10) {
    let roundedInitiative = Math.floor(initiative);
    return roundedInitiative.toString().padStart(2, '0')
  };
  return Math.floor(initiative)
} 

// initiativeValueFormatter serve para formatar a iniciativa.
//
// - Os números menores que 10 devem ter um 0 na frente para manter 2 dígitos.
// - Os números do tipo float são arredondados para baixo sempre.
//   	- Geralmente iniciativas são números Inteiros, mas quando uma iniciativa é igual a outra o 
//    critério de desempate varia entre sistemas de rpg. Uma maneira de contornar esse “problema” 
//    foi possibilitando a adição de números decimais. 
// 	    Ex: Caso dois personagens fiquem com 12 de  iniciativa, você confere no seu seu sistema 
//      qual dos 2 deve ficar na frente, e adiciona uma casa decimal. 12.1. Na ordem só será exibido
//      para você o número 12, mas o personagem que tem 12.1 vai ficar na frente. :) 


const addInitiativeIntoDOM = character => {
  const li = document.createElement('li');
  li.classList.add(character.type);
  li.innerHTML = `${character.name} <span>Iniciativa:    <strong>   ${initiativeValueFormatter(character)}</strong></span> <button class="delete-btn" onClick="removeCharacter(${character.id})">X</button>`;
  initiativeTrackerUl.prepend(li)
}


const sortCharactersByInitiative = characters => {
  characters.sort(function (a, b) {
    if (a.initiative < b.initiative) return -1;
    if (a.initiative > b.initiative) return 1;
    return 0;
  }); // responsavel por deixar as iniciativas em ordem. 
  

}



const init = () => {
  initiativeTrackerUl.innerHTML = ''
  sortCharactersByInitiative(characters)
  characters.forEach(addInitiativeIntoDOM)
}

init()

const updateLocalStorage = () => {
  localStorage.setItem('character', JSON.stringify(characters))
}

const generateID = () => Math.round(Math.random() * 1000)

const addToCharacterArray = (characterName, characterInitiative, characterType) => {
  
  characters.push({
    id: generateID(),
    name: characterName,
    initiative: Number(characterInitiative),
    type: characterType
  });

}

const cleanInputs = () => {
  inputCharacterName.value = ''
  inputCharacterInitiative.value = ''
}

form.addEventListener('submit', event => {

  event.preventDefault()
  const characterName = inputCharacterName.value.trim()
  const characterInitiative = inputCharacterInitiative.value.trim()
  const characterType = playerRadialInput.checked ? 'player' : 'npc'

  const isSomeInputEmpty = characterName === '' || characterInitiative === ''
  if (isSomeInputEmpty) {
    alert('Por favor, preencha todos os campos!')
    return
  };
  addToCharacterArray(characterName, characterInitiative, characterType)
  sortCharactersByInitiative(characters)
  init()
  updateLocalStorage()
  cleanInputs()

})