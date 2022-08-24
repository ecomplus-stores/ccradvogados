// Add your custom JavaScript for storefront pages here.
if(ecomPassport.getCustomerName() == ''){
    $('.logged_in').remove();
    $('.logged_out').removeClass('d-none');
}else{
    $('.logged_in').removeClass('d-none');
    $('.logged_out').remove();
}

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
        var x = 480 * Math.cos(-0.5 * Math.PI + degree * (-1 * index - 0.5));
        var y = 390 * Math.sin(-0.5 * Math.PI + degree * (-1 * index - 0.5));
  
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

$('.ccr_mobile_menu_trigger').click(function(){
    $('#ccr_mobile_menu').addClass('open');
});
$('.ccr_mobile_menu_close').click(function(){
    $('#ccr_mobile_menu').removeClass('open');
});

$(".anchor-menu a").click(function(event) {
    let href = $(this).attr('href');
    if (this.hash !== "") {
        try{
        event.preventDefault();  
        var hash = this.hash;

        let yOffset = -100;
        let element = document.getElementById(hash.replace('#',''));
        let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});
        }catch(e){
            window.location.href = href;
        }
      }
});

$('.apx_form:not(.avise-me)').submit(function(e){
    e.preventDefault();
    var mail = [];
    mail.form = $(this);
    mail.destination = $(this).find('[name="destination]').val() != undefined ? $(this).find('input[name="destination"]').val() : "contato.ccrlaw@gmail.com";
    mail.replyTo = $(this).find('input[name="email"]').val();
    mail.subject = $(this).find('input[name="subject"]').val();
    mail.body = "";

    mail.form.find('input:not([type="hidden"]), textarea').each(function(){
        mail.body = mail.body + $(this).closest('div').find('label').text() + ': ' + $(this).val() + '<br>';
    });

    axios.post('https://us-central1-marketingtools-ecomplus.cloudfunctions.net/app/alpix/apx_sendmail', {
        storeId : storefront.settings.store_id,
        destination : mail.destination,
        subject : mail.subject,
        content : mail.body,
        reply_mail: mail.replyTo
    })
    .then(function(response){
        alert(response.data.msg)
        if(!response.data.error){
            mail.form.find('input[type="text"],input[type="email"],textarea,input[type="tel"]').val('')
        }
    })    
});
