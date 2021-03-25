$(document).ready(function(){
  var hotelSlider = new Swiper('.hotel-slider', {
      // Optional parameters
      loop: true,
    
      // Navigation arrows
      navigation: {
        nextEl: '.hotel-slider__button--next',
        prevEl: '.hotel-slider__button--prev',
      },
      
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });

  var reviewSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    autoHeight: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },

  });

// Modal windows

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function() {
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    $('body').css('overflow','hidden');
  }
    
function closeModal(event) {
  $('body').css('overflow','auto');
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    event.preventDefault();
  }
$(document).click(function (e) {
    if ($(e.target).is('.modal__overlay')) {
      closeModal();
    }
});
$(document).on('keydown', function(e) {
    if (e.keyCode === 27) {
      closeModal();
    } 

});
    
// Validation

$(".form").each(function(){
  $(this).validate({
  errorClass: "invalid",
  messages: {
    name: "Please specify your name",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
    phone: {
      required: "Phone is required",
      phone: "Please, enter the number in the format '+7 (XXX) XXX-XX-XX'",
    },
  },
});
});
$(document).ready(function(){
  $('.phone').mask('+7 (000) 000-00-00');
});

});
