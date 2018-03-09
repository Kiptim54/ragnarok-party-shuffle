$(document).ready(function() {
    /*hide the audio tag*/
    $("audio").hide();
    /*swtich between play and pause*/
    audioplayer();
    skip();
    replay();
    $("#play").click(function() {
        $("#play").hide();
        $("#pause").show();
    });
    $("#pause").click(function() {
        $("#pause").hide();
        $("#play").show();
    });
    /*connect the icon play and audio play*/
    $("#play").click(function() {
        $("audio").trigger("play");
    });
    $("#pause").click(function() {
        $("audio").trigger("pause");
    });


    //Business Logic
    function audioplayer() {
        $("#musicplayer")[0].src = $("#playlist li a")[0];
        $("#playlist li a").click(function(event) {
            event.preventDefault();
        });
    };

    function skip() {
        for (var i = 0; i < this.length; i++);
        $("#skipforward").click(function() {
            $("#musicplayer")[0].src = $("#playlist li a")[i++];
            $("#musicplayer")[0].play();
            $("#pause").show();
        });
    };

    function replay() {
        for (var i = 0; i < this.length; i--);
        while (i = 0) {
            $("#musicplayer")[0].src = $("#playlist li a")[0];
            $("audio").trigger("pause");
            $("audio").trigger("play");
        };
        $("#skipbackward").click(function() {
            $("#musicplayer")[0].src = $("#playlist li a")[i--];
            $("#musicplayer")[0].play();
            $("#pause").show();
        });
    };
});

//This will make text appear as a fade in.
var $el = $(".slideText1:first"),
    text = $el.text(),
    words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
    html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i) {
    $(this).delay(i * 100).fadeIn(200);
});
var $el = $(".slideText2:first"),
    text = $el.text(),
    words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
    html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i) {
    $(this).delay(i * 400).fadeIn(500);
});
var $el = $(".slideText3:first"),
    text = $el.text(),
    words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
    html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i) {
    $(this).delay(i * 600).fadeIn(700);
});
var $el = $(".slideText4:first"),
    text = $el.text(),
    words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
    html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i) {
    $(this).delay(i * 900).fadeIn(800);
});

// scrolling top & bottom

            $(function() {
                $('.ScrollToBottom').click(function() {
                    $('html, body').animate({
                            ScrollToBottom: $(document).height()
                        },
                        1500);
                    return false;
                });

                $('.scrollToTop').click(function() {
                    $('html, body').animate({
                            scrollToTop: '0px'
                        },
                        1500);
                    return false;
                });
            });
