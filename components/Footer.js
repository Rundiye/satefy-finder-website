'use strict';

function Footer(parentElement) {
  this.parentElement = parentElement;
  //this.links = links;
  //this.style = style;
  this.elements = null;

};

Footer.prototype.generate = function() {
  this.elements = `
  <p>&copy;2015 Rundi Ye</p> 
  `;
  this.render();
  
}

Footer.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;

}