$(function(){
    // Random image
    var imagePath = "url(img/image"+randomBanner()+".jpg)";
    $('.main-header .header-aside:last-child').css('backgroundImage', imagePath);

    // how it work
    $("#how_work").click(function(){
        
        $(".how-it-work").slideDown();
    });

    $(".how-it-work i").click(function(){
        $(".how-it-work").slideUp();
    });

    //resp-search-page close
    $('.resp-search-page .fa-times').click(function(){
        $(this).parents(".resp-search-page").slideUp();
        $(".wrapper").css("display", "block");
        $("footer").css("display", "block");
    });
    //resp-search-page open
    $('.resp-search-div').click(function(){
        $(".resp-search-page").slideDown();
        $(".wrapper").css("display", "none");
        $("footer").css("display", "none");
    });


    //scroll part

    $(".form-part").scroll(function(){
       var ee =  $(".form-cont-fixed-header").offset();
       
        var se = $(".form-part").scrollTop();
       if(ee.top < 0){

            $(".form-cont-fixed-header").addClass('fixed-header');
       }
       if(se < 10){
         $(".form-cont-fixed-header").removeClass('fixed-header');
       }
    });

    // about contact dropdawn
    $(".about-dropdown").click(function(){
        $(".about-hidden").slideToggle();
    }); 

    // tab-iphone-menu
    $(".tab-iphone-menu").click(function(){
        $(this).next(".nav-tabs").slideToggle();
    }); 
    

    // Mobile menu
    $('.iphone-menu').click(function(){
        $('.mega-wrapper').toggleClass('open');
    });

    // open-checkbox-div

    $(".open-checkbox-i").click(function(){
        $(this).parents(".row").next(".open-checkbox-div").slideToggle();
    
    });

    // map scrolling
    $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready
    $('.bordered').on('click', function () {
        $('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
    });
    $("#map_canvas1").mouseleave(function () {
        $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    });
    
    // more-filters 

    $(".more-filters-btn").click(function(){
        $(".form-part-header").addClass("form-fixed-header");
        $(".filter-toggle-div").slideDown();
        $(".form-part-cont").css("display","none");
    });

    $("#cancel-btn").click(function(){
        $(".form-part-header").removeClass("form-fixed-header");
        $(".filter-toggle-div").slideUp();
        $(".form-part-cont").css("display","block");
    });

    $(".more-filters-btn-resp").click(function(){
        $(this).removeClass("visible-xs");
        $(this).css("display", "none");
        $(".form-part-header").addClass("form-fixed-header");
        $(".form-part-header").slideDown();
        $(".form-part-cont").css("display","none");

    });
    $("#cancel-btn-resp").click(function(){
        $(".more-filters-btn-resp").addClass("visible-xs");
        
        $(".form-part-header").removeClass("form-fixed-header");
        $(".form-part-header").slideUp();
        $(".form-part-cont").css("display","block");
    });

    
    //Tab js
    
});

// Random function
function randomBanner() {
    var x = Math.floor((Math.random() * 4) + 1);
    return x;
}


