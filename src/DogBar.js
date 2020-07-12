class DogBar {
  constructor(dog, parentElement) {
    this.dog = dog
    this.parentElement = parentElement
  }

  renderDog() {
    this.dogSpan = document.createElement('span')
    this.dogSpan.innerText = this.dog.name
    this.dogSpan.dataset.id = this.dog.id
    this.parentElement.append(this.dogSpan)

    this.parentElement.addEventListener('click', (event) => {
      if (event.target.tagName === 'SPAN') {
        const foundDog = dogsArray.find(dog => dog.id === this.dog.id)
        const dogCard = new DogCard(dog, this.parentElement)
        dogCard.renderCard(foundDog)
      }
    })
  }


}