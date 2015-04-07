// code for readmore
$('.posts').readmore({
  speed: 75,
  maxHeight: 500
});

$('.posts').readmore({
  afterToggle: function(trigger, element, expanded) {
    if(! expanded) { // The "Close" link was clicked
      $('html, body').animate( { scrollTop: element.offset().top }, {duration: 100 } );
    }
  }
});
