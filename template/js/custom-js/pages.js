// Add your custom JavaScript for storefront pages here.
$('[animate]').each(function(){
    let me = this;
    $(window).scroll(function(){
        if(isInViewport(me) && !$(me).hasClass('already-animated')){
            let animation = $(me).attr('animate');
            $(me).addClass(animation).addClass('already-animated');

        }
    })
});

$('.iconGrid').each(function(){
    let to;
    //$(".wrap").on('mouseenter', function() {
      var circles = $(this).find(".item");
      var degree = (2 * Math.PI) / circles.length; //calc delta angle
      var transforms = [];
  
      // Calculate the position for each circle
      circles.each(function(index) {
        var x = 600 * Math.cos(-0.5 * Math.PI + degree * (-1 * index - 0.5));
        var y = 400 * Math.sin(-0.5 * Math.PI + degree * (-1 * index - 0.5));
  
        transforms.push('translate(' + x + 'px,' + y + 'px)');
      });
  
      // Function to moves all the circles
      // We'll pop a circle each time and than call this function recursively
      function moveCircles() {
        var transform = transforms.shift();
        circles.css('transform', transform);
  
        circles.splice(0, 1);
        if (circles.length) to = setTimeout(moveCircles, 1);
      }  
      moveCircles();

   //});

});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}