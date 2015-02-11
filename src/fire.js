// Creates and returns a new dancer object that can step
var Fire = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fire"></span>');
  this.setPosition(top, left);

};

Fire.prototype = Object.create(Dancer.prototype);
Fire.prototype.constructor = Fire;



