/* ---------------------------------------------------
  Preloader
----------------------------------------------------- */
    $(window).on('load', function() {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
          $(this).remove();
        });
      }
    });
/* ---------------------------------------------------
  Gallery carousel (uses the Owl Carousel library)
----------------------------------------------------- */
    $(".gallery-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      center: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    });
/* ---------------------------------------------------
  Init AOS
----------------------------------------------------- */
    function aos_init() {
      AOS.init({
        duration: 1000,
        once: true
      });
    }
    $(window).on('load', function() {
      aos_init();
    });
/* ---------------------------------------------------
  Initiate venobox lightbox
----------------------------------------------------- */
    $(document).ready(function() {
      $('.venobox').venobox();
    });
/* ---------------------------------------------------
  sidenavcollapse
----------------------------------------------------- */
      $(document).ready(function () {
          $('#sidebarCollapse').on('click', function () {
              $('#sidebar').toggleClass('active');
          });
      });
      $("#sidebarCollapse .rotate").click(function () {
          $(this).toggleClass("down");
      })
/* ---------------------------------------------------
  
----------------------------------------------------- */