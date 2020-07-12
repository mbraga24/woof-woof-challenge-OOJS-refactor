const adapter = new APIAdapter("http://localhost:3000/dogs", {
    "Content-Type": "application/json"
})

const dogPageBar = document.querySelector('#dog-bar')
const dogInfoContainer = document.querySelector('#dog-info-container')
const goodDogFilter = document.querySelector('#good-dog-filter')

function chooseDogs() {
  const filterButton = new FilterButton(goodDogFilter, {
    onClick: (filterChoice) => {
      adapter.initialFetch()
      .then(dogsData => {
        const filterDogs = new FilterDogs(dogsData, filtering)
        filterDogs.renderDogs()
      })
    }
  })
  filterButton.buttonAction()
}

adapter.initialFetch()
.then(dogsData => {
  const filterDogs = new FilterDogs(dogsData, filtering = false)
  filterDogs.renderDogs()
  chooseDogs()
})