class FilterButton {
  constructor(button, callbacks) {
    this.button = button
    this.onClick = callbacks.onClick
  }

  handleClick = () => {
    filtering = !filtering
    goodDogFilter.innerText = `Filter good dogs: ${filtering ? "ON" : "OFF"}`
    this.onClick(filtering)
  }

  buttonAction() {
    this.button.addEventListener('click', this.handleClick)
  }
}