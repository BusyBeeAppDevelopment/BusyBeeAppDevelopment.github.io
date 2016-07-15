/*  Bootstrap Single Page Application for Scales N Tails Inc. 
    By Busy Bee IT - Author Schuyler Ankele
    Contact: schuyler.ankele@gmail.com


in case I fuck up
$(document).ready(function(){
    $("#whyButton").click(function(){
        $("#home").hide();
        $("#whyPage").show();
        
    });
    
});
*/


$(document).ready(function(){
    $("#whyButton").click(function(){
        $("#home").hide();
        $("#whyPage").show();
        
    });
    $(".homeButton1").click(function(){
        
        $("#whyPage").hide();
        $("#home").show();
    });
    $("#FAQButton").click(function(){
        $("#home").hide();
        $("#FAQPage").show();
        
    });
    $(".homeButton2").click(function(){
        
        $("#whyPage").hide();
        $("#home").show();
    });
    
});
$( function() {
    $( "#FAQs" ).accordion();
  } );