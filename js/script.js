    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        // spaceBetween: 0,
         // autoplay: {
         // delay: 5000,       
         // disableOnInteraction: true,
         // },
         hashNavigation: {
        watchState: true,
        },
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
        $(document).ready(function(){   
        PopUpHide();
    });
    function PopUpShow(){
        $("#popup1").show();
    }
    function PopUpHide(){
        $("#popup1").hide();
    }