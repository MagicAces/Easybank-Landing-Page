$(".droplink").click(function(event) {
  $(".dropbox").toggleClass("display");
  $("#home").toggleClass("blur");
  $(".navbar").toggleClass("space");
  if($(".dropbox").hasClass("display")) {
    $(".droplink").attr("src", "images/icon-close.svg");
  }
  else
    $(".droplink").attr("src", "images/icon-hamburger.svg");
});


$(".dropbox .parts").click(function(event){
  clear();
});



$("#home").click(function(event) {
  if($(".dropbox").hasClass("display")) {
    clear();
  }
});

$("#about").click(function(event) {
  if($(".dropbox").hasClass("display")){
    clear();
  }
});

function clear() {
  $(".dropbox").removeClass("display");
  $(".droplink").attr("src", "images/icon-hamburger.svg");
  $(".navbar").removeClass("space");
  $("#home").removeClass("blur");
}
