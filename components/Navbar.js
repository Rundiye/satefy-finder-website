'use strict';

function Navbar(parentElement, links, style) {
  this.parentElement = parentElement;
  this.links = links;
  this.style = style;
  this.elements = null;

};

Navbar.prototype.generate = function() {
  this.elements = `<nav>
  <img class="tierra-pic" src="images/globo-tierra.gif" alt="globo terraqueo">
                    <h1 class="title">S@FETY FINDER</h1> 
                    <ul>`;
  this.links.forEach((link) => {
    this.elements += `
      <li>
        <a href="#0" url=${link.url}>${link.name}</a>
      </li>
    `;
  })

  this.elements += `<ul>
                  </nav>
  `;
  this.render();
  
}

Navbar.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;

}