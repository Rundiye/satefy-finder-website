'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  
}

LandingPage.prototype.generate = function() {
  this.elements = `
    <section>
      <div class="one"><h1 class="welcome">Travel Safe! </h1></div>
      <div class="two"><h2></h2></div>
      <div class="three"><img class="travel-pic" src="images/lets-travel.gif" alt="travel pic"></div>
      <div class="four"><button class="button-tips myButton"><a href="https://www.twowanderingsoles.com/blog/travel-safety-tips-you-need-to-know" target=_blank>Safety Tips</a></button></div>
      </section>
    
    
    `;
  this.render();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}