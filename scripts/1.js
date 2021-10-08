function openVideo(ov, d) {
    if(ov.style.display == "none"){
        ov.style.display = "block"
        d.style.display = "block"
    }
    else{
        ov.style.display = "none"
        d.style.display = "none"
    };
};



$(document).ready(function () {


    $("#navigation").on("click","a", function (event) {
        event.preventDefault();
        event.stopPropagation(); 
        var id  = $(this).attr('href'),
        top = $(id).offset().top-150;
        $('body,html').stop().animate({scrollTop: top}, 500);

        return false;
    });

    $("#lin").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        var id  = $(this).attr('href'),
        top = $(id).offset().top-150;
        $('body,html').stop().animate({scrollTop: top}, 500);

        return false;
    });

    $("#btnComments2").click(function () {
        if($("#userComments").css("display") === "none"){
            $("#userComments").fadeIn(600);
        }
        else{
            $("#userComments").css({"display": "none"});
        }
        return false;
    });

    $("#navig").click(function () {
        if($("#navigation").css("display") === "none"){
            $("#navigation").fadeIn(600);
        }
        else{
            $("#navigation").css({"display": "none"});
        }
        return false;
    });


    $(".im").click(function(){	 
        var img = $(this);	
        var src = img.attr('src'); 
        console.log(src);
        $("body").append("<div class='popup'>"+ 
                         "<div class='popup_bg'></div>"+ 
                         "<img style='width: auto; height: 80%' src='"+src+"' class='popup_img' />"+ 
                         "</div>"); 
        $(".popup").fadeIn(800); 
        $(".popup_bg").click(function(){		   
            $(".popup").fadeOut(800);	
            setTimeout(function() {	
              $(".popup").remove();
            }, 800);
        });
    });
       
});