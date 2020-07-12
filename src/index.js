const adapter = new APIAdapter("http://localhost:3000/dogs", {
    "Content-Type": "application/json"
})

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

dogInfo.addEventListener('click', (event) => {
  if (event.target.tagName === "BUTTON") {
    const dogId = parseInt(event.target.dataset.id)
    const foundDog = dogsArray.find(dog => dog.id === dogId)

    foundDog.isGoodDog = !foundDog.isGoodDog
    renderDogDetail(foundDog)

    adapter.updateDogButton(foundDog)
    .then(updatedDog => updatedDog)
  }
})

// helpers
function renderAllDogs() {
  dogBar.innerHTML = ""

  if (filtering) {
    goodDogs = dogsArray.filter(dog => dog.isGoodDog === true)
    goodDogs.forEach(dog => {
      const dogBar = new DogBar(dog, dogBar)
      dogBar.renderDog()
    })
  } else {
    dogsArray.forEach(dog => {
      const dogBar = new DogBar(dog, dogBar)
      dogBar.renderDog()
    })
  }
}

adapter.initialFetch()
.then(dogsData => {
  dogsArray = dogsData
  renderAllDogs()
})