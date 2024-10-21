/// <reference types="../@types/jquery" />

// open
const sidewidth = $(".side" ).outerWidth();

$(".side").css({left:`-${sidewidth}px`});

let sidewidthstatue = false ;

$(".open").on("click", function () {
    if (!sidewidthstatue) {
        $(".side").animate({ left: `0px` }, 200);
        sidewidthstatue = true; 
    }
});

$(".fa-xmark").on("click", function () {
    if (sidewidthstatue) {
        $(".side").animate({ left: `-${sidewidth}px` }, 200);
        sidewidthstatue = false;
        
        $("html").animate({scrollTop : 0},0)
        // $(window).scrollTop(0);
        
    }
});


// cound down

$(document).ready(() => {
  
    const eventDate = new Date("2025-10-25T00:00:00").getTime(); 

 
    const countdownInterval = setInterval(() => {
     
        const now = new Date().getTime();

       
        const timeDifference = eventDate - now;

        
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

       
        $('#days').text(`${days}-D`);
        $('#hours').text(`${hours} h`);
        $('#minutes').text(`${minutes}M`);
        $('#seconds').text(`${seconds}s`);

 
        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            $('#days').text('0d');
            $('#hours').text('0h');
            $('#minutes').text('0M');
            $('#seconds').text('0s');
        }
    }, 1000); 
});




// singer

$(".singer-content h3") .on ("click",function(){
    $(this).next() .slideToggle(500);
    $(".singer-content p").not( $(this).next()).slideUp();

})
  

// textarea

$("textarea").keyup(function(){
    let textlength= $(this).val().length;
    $(".number").text(
        100-textlength <=0 ?  "your available character finished" :100-textlength  
    )
})