$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    // if 0.length = 1.length, 0 1

    window.dancers.push(dancer);

    $('body').append(dancer.$node);
  });

  $(".lineUpButton").on("click", function(event){
    // iterate over window.dancers
    // run lineUp on each element
    var each = function(array, iterator){
      for (var i = 0; i < array.length; i++){
        iterator(array[i], i, array);
      }
    };
    each(window.dancers, function(value){
      value.lineUp();
    });

    });
});

