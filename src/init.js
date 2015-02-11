$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);

    if (window.dancers.length === 20){
      alert("WARNING FIRE HAZARD: \nTOO MANY BOOTIES ON THE DANCE FLOOR");
    }

    if (window.dancers.length > 20){

      var fire = new window.Fire(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );

      $('body').append(fire.$node);
    }

    if (window.dancers.length > 30){
      $('body').append(squirtles.$node);
    }

    $('body').append(dancer.$node);
  });

  $(".lineUpButton").on("click", function(event){
    var each = function(array, iterator){
      for (var i = 0; i < array.length; i++){
        iterator(array[i], i, array);
      }
    };
    each(window.dancers, function(value){
      value.lineUp();
    });
  });

  $('.swapButton').on('click', function(event){
    var each = function(array, iterator){
      for (var i = 0; i < array.length; i++){
        iterator(array[i], i, array);
      }
    };
    each(window.dancers, function(value){
      value.swap();
    });
  });


});

