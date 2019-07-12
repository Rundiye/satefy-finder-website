'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  
}

LandingPage.prototype.generate = function() {
  this.elements = `
    <section class="landing-page">
    
      <div id="cf">
      <img class="travel-pic bottom" src="images/namibia.jpg" alt="travel pic">
      <img class="travel-pic top" src="images/vietnam.jpg" alt="travel pic">
      </div>
      <div class="botones">
      <div class="four"><button class="button-tips myButton"><a href="https://www.twowanderingsoles.com/blog/travel-safety-tips-you-need-to-know" target=_blank>Safety Tips</a></button></div>
      <div class="four"><button class="button-tips myButton"><a href="#0">Safetiest Countries</a></button></div>
      </div>
      <img class="plane" src="images/paper-plane.png" alt="paper plane img">
      <img class="plane2" src="images/paper-plane.png" alt="paper plane img">
      <img class="plane3" src="images/paper-plane.png" alt="paper plane img">
      </section>
    

    `;
    this.render();

  setInterval(function(){
    var plane = document.querySelector('.plane');
    plane.classList.toggle('plane-move');

 
  }, 3000)

  setInterval(function(){
    var plane2 = document.querySelector('.plane2');
    plane2.classList.toggle('plane-move2');

 
  }, 4000)

  setInterval(function(){
    var plane3 = document.querySelector('.plane3');
    plane3.classList.toggle('plane-move3');

 
  }, 3000)
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

