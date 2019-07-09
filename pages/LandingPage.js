'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  
}

LandingPage.prototype.generate = function() {
  this.elements = `
    <header>
      <h1>Check out the safety level of the countries</h1>
      <h2>Here you can find the safety rates</h2>
    </header>
    `;
  this.render();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}