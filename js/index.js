$("li").hover(function(){
    $(this).css("color","#B15318");},
    function(){
    $(this).css("color","#1c1c1c");

})

    
$("#pSection").click(function(event) {
        
    if (this.hash !== "") {
          
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate({
        scrollTop: $(hash).offset().top
        }, slow, function(){
         window.location.hash = hash;
         });
         
    } 
});
