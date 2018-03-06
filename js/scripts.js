$(document).ready(function(){
  /*hide the audio tag*/
  /*$("audio").hide();*/
  /*swtich between play and pause*/

    audioplayer();
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

skip();

  //Business Logic
  function audioplayer(){
    $("#musicplayer")[0].src=$("#playlist li a")[0];
    $("#playlist li a").click(function(event){
      event.preventDefault();
    });
  };
  function skip(){
    $("#skipforward").click(function(){
      $("#musicplayer")[0].src=$("#playlist li a")["#playlist li a".length+1];
      $("#musicplayer")[0].play();
      $("#pause").show();

    });
  };
});
