var ColorDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();

};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function(){
  // At a specific interval, the ColorDancer will slide across at a randomly generated direction
  // Dancer.prototype.step.call(this);
  // Move somewhere instead of toggle
  //
  //
  // var styleSettings = {
  //     border: '20px solid white'
  //   };

  // this.$node.css(styleSettings);
};
