'use strict';

function CountryRateService() {
  this.baseUrl = 'https://www.travel-advisory.info/api';
}

CountryRateService.prototype.getAllCountries = async function() {
  var response = await fetch(`${this.baseUrl}?countrycode=${country}`);
  var data = await response.json();
  return data.results;
}

var countryRateServiceInstance = new CountryRateService();