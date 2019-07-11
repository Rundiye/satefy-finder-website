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
      <article class="countries-list ease-out">
      <section class="country-name">
        <h3>${country.name}</h3>
      </section>
      <div class="flag-container">
      <section class="flag-section">
      <img class="flag" src="https://www.countryflags.io/${country.iso_alpha2}/shiny/64.png">
      </section>
      <ul>  
      <li>Safety Score : ${country.advisory.score}</li>
        <li>Country Code : ${country.iso_alpha2}</li>
      </ul>
        
        </div>
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