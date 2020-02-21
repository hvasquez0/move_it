$(document).ready(function() {
  var dude = $("#dude");
  var speed = 100;
    $( document ).keydown(function(e) {   

      var left = parseInt(dude.css('left'));
      var top = parseInt(dude.css('top'));
      if (e.which == 37){
        dude.css('left', (left - speed) + "px");
      } else if (e.which == 38){
        dude.css('top', (top - speed) + "px");
      } else if (e.which == 39){
        dude.css('left', (left + speed) + "px");
      } else if (e.which == 40){
        dude.css('top', (top + speed) + "px");
      }
  });
  
    $ ("#level5").click(function(e){
    dude.css({top: "200px",left: "100px"})
  })
  $ ("#level4").click(function(e){
    dude.css({top: "250px",left: "100px"})
  })
  $ ("#level3").click(function(e){
    dude.css({top: "300px",left: "100px"})
  })
  $ ("#level2").click(function(e){
    dude.css({top: "350px",left: "100px"})
  })
  $ ("#level1").click(function(e){
    dude.css({top: "400px",left: "100px"})
  })
  
});

