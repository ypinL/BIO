// JavaScript Document
$(document).ready(function () {
  $(".menu").click(function () {
    $("nav").slideToggle();
  });

  $(window).on("load resize", function () {
    var a_w = document.body.clientWidth;
    if (a_w >= 768) $("nav").show();
    else $("nav").hide();
  });

  $("a[href='#target1']").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#target1").offset().top - 150,
      },
      1000
    );
  });
  $("a[id='homepage']").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
