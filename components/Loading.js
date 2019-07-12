'use strict';

function Loading(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

Loading.prototype.generate = function() {
  this.elements = '<img class="loading-image" src="images/dragon-loading.gif" alt="loading image">';
  this.render();
}

Loading.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

