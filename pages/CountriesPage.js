'use strict';

function CountriesPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.countries = [];
  this.loading = null;
  
}

CountriesPage.prototype.generate = async function() {
  this.loading = new Loading(this.parentElement);
  this.loading.generate();

  await this.connectToAPI();
  this.elements = `
    <header>
      <h2>Welcome to the Countries page!</h2>
    </header>
    <section class="cards-container">
    `;

  var safeCountries = this.countries.filter(function(country){
      return country.advisory.score <= 1;
    });
  
  safeCountries.forEach((country) => {
    this.elements += `
      <article class="countries-list">
        <h3>${country.name}</h3>
        <p>Safety Score : ${country.advisory.score}</p>
        <p>Country Code : ${country.iso_alpha2}</p>
      </article>
    `;

  })
  
  

  this.elements += `</section>`
  this.render();
}

CountriesPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

CountriesPage.prototype.connectToAPI = async function() {
 var countriesObject = await countryRateServiceInstance.getAllCountries();
  for(var key in countriesObject){
    this.countries.push(countriesObject[key])
  }
  console.log(this.countries);
}