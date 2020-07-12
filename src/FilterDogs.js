class FilterDogs {
  constructor(dogsData, filtering) {
    this.dogsData = dogsData
    this.filtering = filtering
  }
  
  renderDogs() {
    dogPageBar.innerHTML = ""

    if (this.filtering) {
      const goodDogs = this.dogsData.filter(dog => dog.isGoodDog === true)
      goodDogs.forEach(dog => {
        const dogBar = new DogBar(dog, dogPageBar, {
          onClick: (clickedDog) => {
            console.log("Clicked filter")
            const dogCard = new DogCard(clickedDog, dogInfoContainer)
            dogCard.renderCard()
          }
        })
        dogBar.renderDog()
      })
    } else {
        this.dogsData.forEach(dog => {
        const dogBar = new DogBar(dog, dogPageBar, {
          onClick: (clickedDog) => {
            console.log("Clicked no filter")
            const dogCard = new DogCard(clickedDog, dogInfoContainer)
            dogCard.renderCard()
          }
        })
        dogBar.renderDog()
      })
    }
  }
}