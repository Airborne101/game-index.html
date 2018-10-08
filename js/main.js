//main img interval
$('.carousel').carousel({
  interval: 0
});

//navbar
$(function(){
   $("#navbar").load("navbar.html");
   $("#footer").load("footer.html");
});

//trailer
$("#myModal").on('hidden.bs.modal', function (e) {
    $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
});
