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
      $("#pause").show();
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
