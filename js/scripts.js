$(document).ready(function(){
  /*hide the audio tag*/
  $("audio").hide();
  /*swtich between play and pause*/
    audioplayer();
    skip();
    replay();
  $("#play").click(function(){
    $("#play").hide();
    $("#pause").show();
  });
  $("#pause").click(function(){
    $("#pause").hide();
    $("#play").show();
  });
  /*connect the icon play and audio play*/
  $("#play").click(function(){
    $("audio").trigger("play");
  });
  $("#pause").click(function(){
    $("audio").trigger("pause");
  });

//show funfact 1
$("#fun1").click(function(){
  $("#fun1").hide();
  $("#funfact1").show();

});
//show funfact 2
$("#fun2").click(function(){
  $("#fun2").hide();
  $("#funfact2").show();

});
//show funfact 3
$("#fun3").click(function(){
  $("#fun3").hide();
  $("#funfact3").show();

});
$("#fun4").click(function(){
  $("#fun4").hide();
  $("#funfact4").show();

});
//add effect to funfact icons
$("img").hover(function(){
  $(this).removeClass()
  $(this).addClass("animated tada");
});

  //Business Logic
  function audioplayer(){
    $("#musicplayer")[0].src=$("#playlist li a")[0];
    $("#playlist li a").click(function(event){
      event.preventDefault();
    });
  };
  function skip(){
    for(var i=0;i<this.length;i++);
    $("#skipforward").click(function(){
      $("#musicplayer")[0].src=$("#playlist li a")[i++];
      $("#musicplayer")[0].play();
    });
  };
    function replay(){
      for(var i=0;i<this.length;i--);
      while(i=0){
      $("#musicplayer")[0].src=$("#playlist li a")[0];
      $("audio").trigger("pause");
      $("audio").trigger("play");
    };
      $("#skipbackward").click(function(){
        $("#musicplayer")[0].src=$("#playlist li a")[i--];
        $("#musicplayer")[0].play();
        $("#pause").show();
      });
      };
    });
