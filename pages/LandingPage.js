'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  
}

LandingPage.prototype.generate = function() {
  this.elements = `
    <section class="landing-page">
      <div class="one"><h1 class="welcome">! </h1></div>
      <div class="two"><h2></h2></div>

      <div id="cf"class="three">
      <img class="travel-pic bottom" src="images/namibia.jpg" alt="travel pic">
      <img class="travel-pic top" src="images/vietnam.jpg" alt="travel pic">
     
      </div>
      
      <div class="four"><button class="button-tips myButton"><a href="https://www.twowanderingsoles.com/blog/travel-safety-tips-you-need-to-know" target=_blank>Safety Tips</a></button></div>
      <div class="four"><button class="button-tips myButton"><a href="#0">Safetiest Countries</a></button></div>
      </section>
    
    
    `;
  this.render();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}