class DogCard {
  constructor(dog, parentElement) {
    this.dog = dog
    this.parentElement = parentElement
  }

  handleIsGoodDogBtn = () => {
    this.dog.isGoodDog = !this.dog.isGoodDog
    this.renderCard(this.dog)

    adapter.updateDogButton(this.dog)
    .then(updatedDog => updatedDog)
  }

 renderCard() {
    const status = this.dog.isGoodDog ? "Good" : "Bad"

    this.parentElement.innerHTML = `
      <img src="${this.dog.image}">
      <h2>${this.dog.name}</h2>
      <button data-id=${this.dog.id}>${status} Dog!</button>
    `
    const isGoodDogBtn = this.parentElement.querySelector('button')
    isGoodDogBtn.addEventListener('click', this.handleIsGoodDogBtn)
    
  }
}