$(window).scroll(function(){
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if($(window).scrollTop()>oTop){
    $(".navbar").addClass("sticky");
  }
  else{
    $(".navbar").removeClass("sticky");
  }
});
let counter ="0";
$(window).scroll(function(){
  var oTop = $(".number").offset().top - window.innerHeight;
  if($(window).scrollTop()>oTop){

  }
});





$(document).ready(function(){
  var interval = setInterval(function(){
    $(".number .rect h1").html(counter);
    counter++;
    if(counter==1001){
      clearInterval(interval);
    }
  },5);
});