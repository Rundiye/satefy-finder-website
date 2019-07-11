/*'use strict';

function FlagService() {
  this.baseUrl = 'https://www.countryflags.io/:country_code/shiny/64.png';
}

FlagService.prototype.getAllFlags = async function() {
  var response = await fetch(`${this.baseUrl}`);
  var getData = await response.json();

  return getData.data;
}

var countryRateServiceInstance = new CountryRateService();
*/