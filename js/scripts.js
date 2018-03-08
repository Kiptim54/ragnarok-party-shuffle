
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

//This will make text appear as a fade in.
var $el = $(".slideText1:first"), text = $el.text(),
   words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
   html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i){
 $(this).delay(i*100).fadeIn(200);
});
var $el = $(".slideText2:first"), text = $el.text(),
   words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
   html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i){
 $(this).delay(i*400).fadeIn(500);
});
var $el = $(".slideText3:first"), text = $el.text(),
   words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
   html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i){
 $(this).delay(i*600).fadeIn(700);
});
var $el = $(".slideText4:first"), text = $el.text(),
   words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
   html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i){
 $(this).delay(i*900).fadeIn(800);
});
//carousel for the main page
var imageSlider = document.getElementById('imagesSlider');

var images =["url('../ragnarok-party-shuffle/img/ragnarok1.jpg')" , "url('../ragnarok-party-shuffle/img/ragnarok2.jpg')" , "url('../ragnarok-party-shuffle/img/ragnarok3.jpg')"];
var counter = 0;

function carousel(){
 imageSlider.style.backgroundImage = images[counter];
 counter++;
 if(counter > 2 ){
    counter = 0;
 }
}
setInterval(carousel, 2000);

//timer
window.onload = () => {
  let seconds = 0;
 let totalSeconds = 15;

 let intervalId = null;

 function startTimer() {
   -- totalSeconds;
  hour = Math.floor(totalSeconds /3600);
   minute = Math.floor((totalSeconds - hour*3600)/60);
   seconds = totalSeconds; //- (hour*3600 + minute*60);

   document.getElementById("hour").innerHTML =hour;
   document.getElementById("minute").innerHTML =minute;
   document.getElementById("seconds").innerHTML =seconds;
 }

 document.getElementById('start-btn').addEventListener('click', () => {
   intervalId = setInterval(startTimer, 1000);
 })

 document.getElementById('stop-btn').addEventListener('click', () => {
   if (intervalId)
     clearInterval(intervalId);
 });


 document.getElementById('reset-btn').addEventListener('click', () => {
    totalSeconds = 15;
    document.getElementById("hour").innerHTML = '0';
    document.getElementById("minute").innerHTML = '0';
    document.getElementById("seconds").innerHTML = '0';
 });
};
