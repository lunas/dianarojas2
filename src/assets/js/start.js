$(document).ready(function() {

  var number_pictures = 10; // number of pictures to cycle through
  var upper = $('#front_image')
  var lower = $('#front_image_wrapper')

  function change_image(upper, lower) {
    if (upper.css('opacity') <= 0.5) {
      upper.fadeTo(3000, 1, function(){
        lower.css('background-image', next_url(upper));
      });
    }
    else{
      upper.fadeTo(3000, 0, function(){
        upper.css('background-image', next_url(lower));
      })
    }
    return false;
  }

  setInterval( function(){
    change_image(upper, lower)
  }, 6000);

  function next_url(element) {
    var url = element.css('background-image');
    var url = url.split('-');
    var part1 = url[0]
    var nr  = parseInt(url[1].split('.')[0])
    if (isNaN(nr)) return false
    nr = (nr==number_pictures) ? 1 : nr+1
    var src  = part1 + '-' + nr + '.jpg)'
    return src
  };

});