var CatDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="catDancer"></span>');
  this.setPosition(top, left);

  this.$node.hover( function(event){
    $(this).css({'-webkit-transform': 'rotate(' + 180 + 'deg)'});
  }, function(event){
    $(this).css({'-webkit-transform': 'rotate(' + 0 + 'deg)'});
  });
};

CatDancer.prototype = Object.create(Dancer.prototype);
CatDancer.prototype.constructor = CatDancer;

