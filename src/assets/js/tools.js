$(document).ready(function() {

  // open links to external sites in a new tab
  $('a').each(function(){
    if (_external_link( this )) {
      $(this).attr('target', '_blank')
    }
  })

  function _external_link( link ) {
    var href = $(link).attr('href')
    if (href==undefined) return false
    if (href.match(/\.pdf$/) != null) return true // treat pdf as external, too
    if (href[0] == '/' || href[0] == '#') return false
    return href.indexOf(window.location.host) == -1
  }

});