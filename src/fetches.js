class APIAdapter {
  constructor(baseUrl, defaultHeaders) {
    this.baseUrl = baseUrl
    this.defaultHeaders = defaultHeaders
  }

  fetchAndParse(url, options) {
    return fetch(url, options).then(resp => resp.json())
  }
 
  updateDogButton(dog) {
    return this.fetchAndParse(`${this.baseUrl}/${dog.id}`, {
      method: "PATCH",
      headers: this.defaultHeaders,
      body: JSON.stringify({ isGoodDog: dog.isGoodDog })
    })
    
  }
  
  initialFetch() {
    return this.fetchAndParse(this.baseUrl)
  }
}