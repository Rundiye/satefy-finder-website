'use strict';

function CountriesPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.countries = null;
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
  this.countries.forEach((country) => {
    this.elements += `
      <article>
        <h3>${country.name}</h3>
        <p>${country.score}</p>
        <p>${country.source}</p>
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
  this.countries = await countryRateServiceInstance.getAllCountries();
}