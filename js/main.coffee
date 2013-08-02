$ ->
  $('img.screenshot').click ->
    $(this).toggleClass('full')
  $("img.lazy").lazyload()