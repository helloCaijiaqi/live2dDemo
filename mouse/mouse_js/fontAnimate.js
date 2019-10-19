var a_idx = 0;
jQuery(document).ready(function ($) {
  $("body").click(function (e) {
    var a = new Array("爱与和平", "爱与正义", "为了爱", "爱与悲哀", "最强","爱情", "爱你", "爱我", "爱谁", "娃娃", "牛逼", "卢本猴");
    var $i = $("<span/>").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "font-weight": "bold",
      "color": "#ff6651"
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    }, 1500, function () {
      $i.remove();
    });
  });
});