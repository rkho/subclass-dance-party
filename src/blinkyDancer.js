var BlinkyDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.on('click', function(event){
    alert("it's peanut butter jelly time");
  });

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

BlinkyDancer.prototype.lineUp = function(){
  this.setPosition('center', 1050);
}
