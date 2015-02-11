var Squirtles = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="squirtles"></span>');
  this.setPosition(top, left);

};

Squirtles.prototype = Object.create(Dancer.prototype);
Squirtles.prototype.constructor = Squirtles;
