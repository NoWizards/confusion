$(document).ready(function(){
    //$().button('toggle');
    $("#mycarousel").carousel({interval: 2000});
    $("#carousel-button").click(function(){
        if($("#carousel-button").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children('span').removeClass("fa-pause"); 
            $("#carousel-button").children('span').addClass("fa-play"); 
        }else if($("#carousel-button").children("span").hasClass("fa-play")){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children('span').removeClass("fa-play"); 
            $("#carousel-button").children('span').addClass("fa-pause"); 
        }

    })
    
    $("#ilogin").click(function(){
        $("#loginModal").modal('show')
    })
    $("#closeLogin").click(function(){
        $("#loginModal").modal('hide')
    })
    $("#cancelLogin").click(function(){
        $("#loginModal").modal('hide')
    })
    
    $("#openReserve").click(function(){
        $("#reserveModal").modal('show')
    })
    $("#closeReserve").click(function(){
        $("#reserveModal").modal('hide')
    })
    $("#cancelReserve").click(function(){
        $("#reserveModal").modal('hide')
    })







});
