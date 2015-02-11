var Dancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.setPosition(top, left);

};

// Commenting this out, since we don't want to use it.
// Leaving it here to show we were able to complete implementation.
// Dancer.prototype.step = function(){
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//   console.log(this);
//   setTimeout(this.step.bind(this), this._timeBetweenSteps);
// };

Dancer.prototype.setPosition = function(top, left){

  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.animate(styleSettings);
  this.top = top;
  this.left = left;

};

Dancer.prototype.lineUp = function(){
  this.setPosition('center', 515);
};

Dancer.prototype.closest = function(){
  var closest;
  var distances = {};

  for (var i = 0; i < window.dancers.length; i++){

    var a = Math.abs(window.dancers[i].left - this.left);
    var b = Math.abs(window.dancers[i].top - this.top);
    var c = Math.pow(a, 2) + Math.pow(b, 2);
    var tempDistance = Math.sqrt(c);

    distances[i]=tempDistance;
  }

  for (var k in distances){
    if (distances[k] !== 0){
      if (closest === undefined || closest > distances[k]){
        closest = window.dancers[k];
      }
    }
  }
  return closest;

};

Dancer.prototype.swap = function(){

  var closestLeft = this.closest().left;
  var closestTop = this.closest().top;

  var thisLeft = this.left;
  var thisTop = this.top;

  this.closest().setPosition(thisTop, thisLeft);
  this.setPosition(closestTop, closestLeft);
};















