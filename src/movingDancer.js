var MovingDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);

};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function(){
  // At a specific interval, the MovingDancer will slide across at a randomly generated direction
  Dancer.prototype.step.call(this);
  // Move somewhere instead of toggle
  this.$node.css({
    border: '20px solid blue',
    'border-radius': '50px'
  });
  this.$node.toggle();
};
