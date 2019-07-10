'use strict';

function CountryRateService() {
  this.baseUrl = 'https://www.travel-advisory.info/api';
}

CountryRateService.prototype.getAllCountries = async function() {
  var response = await fetch(`${this.baseUrl}`);
  var getData = await response.json();

  return getData.data;
}

var countryRateServiceInstance = new CountryRateService();