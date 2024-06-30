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

  var $el2 = $(".typing2"),
    html2 = $el2.html(),
    txt2 = $el2.text(),
    txtLen2 = html2.length,
    timeOut2,
    char2 = 0;

  $el2.text("|");

  (function typeIt2() {
    var humanize2 = Math.round(5 * Math.random() * (150 - 50)) + 30;
    timeOut2 = setTimeout(function () {
      char2++;
      var type2 = html2.substring(0, char2);
      $el2.html(type2 + "|");
      typeIt2();

      if (char2 == txtLen2) {
        $el2.html($el2.html().slice(0, -1)); // remove the '|'
        clearTimeout(timeOut2);
      }
    }, humanize2);
  })();

  var $el = $(".typing"),
    html = $el.html(),
    txt = $el.text(),
    txtLen = html.length,
    timeOut,
    char = 0;

  $el.text("|");

  (function typeIt() {
    var humanize = Math.round(Math.random() * 30) + 10;
    timeOut = setTimeout(function () {
      char++;
      var type = html.substring(0, char);
      $el.html(type + "|");
      typeIt();

      if (char == txtLen) {
        $el.html($el.html().slice(0, -1)); // remove the '|'
        clearTimeout(timeOut);
      }
    }, humanize);
  })();
});
