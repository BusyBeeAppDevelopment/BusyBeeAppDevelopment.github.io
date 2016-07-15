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
    $(".homeButton").click(function(){
        
        $("#whyPage").hide();
        $("#home").show();
    });
    
});