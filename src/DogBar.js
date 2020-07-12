class DogBar {
  constructor(dog, parentElement, callbacks) {
    this.dog = dog
    this.parentElement = parentElement
    this.onClick = callbacks.onClick
  }

  handleBarSelection = (event) => {
    this.onClick(this.dog)
  }

  renderDog() {
    this.dogSpan = document.createElement('span')
    this.dogSpan.innerText = this.dog.name
    this.dogSpan.dataset.id = this.dog.id
    this.parentElement.append(this.dogSpan)

    this.dogSpan.addEventListener('click', this.handleBarSelection)
  }
}