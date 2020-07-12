// application state
let dogsArray = []
let filtering = false;

const dogBar = document.querySelector('#dog-bar')
const dogInfo = document.querySelector('#dog-info')
const goodDogFilter = document.querySelector('#good-dog-filter')

goodDogFilter.addEventListener('click', () => {
  filtering = !filtering
  goodDogFilter.innerText = `Filter good dogs: ${filtering ? "ON" : "OFF"}`
  renderAllDogs()
})

dogBar.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    const dogId = parseInt(event.target.dataset.id)
    const foundDog = dogsArray.find(dog => dog.id === dogId)
    renderDogDetail(foundDog)
  }
})

dogInfo.addEventListener('click', (event) => {
  if (event.target.tagName === "BUTTON") {
    const dogId = parseInt(event.target.dataset.id)
    const foundDog = dogsArray.find(dog => dog.id === dogId)

    foundDog.isGoodDog = !foundDog.isGoodDog
    renderDogDetail(foundDog)

    updateDogButton(foundDog)
    .then(updatedDog => updatedDog)
  }
})

function updateDogButton(dog) {
  return fetch(`http://localhost:3000/dogs/${dog.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ isGoodDog: dog.isGoodDog })
  })
  .then(resp => resp.json())
}

function initialFetch() {
  return fetch("http://localhost:3000/dogs").then(resp => resp.json())
}

initialFetch()
.then(dogsData => {
  dogsArray = dogsData
  renderAllDogs()
})

// helpers
function renderAllDogs() {
  dogBar.innerHTML = ""

  if (filtering) {
    goodDogs = dogsArray.filter(dog => dog.isGoodDog === true)
    goodDogs.forEach(renderEachDogToBar)
  } else {
    dogsArray.forEach(renderEachDogToBar)
  }
}

function renderEachDogToBar(dog) {
  const dogSpan = document.createElement('span')
  dogSpan.innerText = dog.name
  dogSpan.dataset.id = dog.id
  dogBar.append(dogSpan)
}

function renderDogDetail(dog) {
  const status = dog.isGoodDog ? "Good" : "Bad"

  dogInfo.innerHTML = `
    <img src="${dog.image}">
    <h2>${dog.name}</h2>
    <button data-id=${dog.id}>${status} Dog!</button>
  `
}