class DogCard {
  constructor(dog, parentElement) {
    this.dog = dog
    this.parentElement = parentElement
  }

  
 renderCard(dog) {
    this.status = dog.isGoodDog ? "Good" : "Bad"

    this.parentElement.innerHTML = `
      <img src="${this.dog.image}">
      <h2>${this.dog.name}</h2>
      <button data-id=${this.dog.id}>${status} Dog!</button>
    `
  }
}