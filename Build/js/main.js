(function() {

  $(function() {
    $('img.screenshot').click(function() {
      return $(this).toggleClass('full');
    });
    return $("img.lazy").lazyload();
  });

}).call(this);
