var NyanCatDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="nyanCatDancer"></span>');
  this.setPosition(top, left);

  var that = this;
  this.$node.hover(function(event){
    that.setPosition('center', $("body").width() * Math.random());
  });
};

NyanCatDancer.prototype = Object.create(Dancer.prototype);
NyanCatDancer.prototype.constructor = NyanCatDancer;

