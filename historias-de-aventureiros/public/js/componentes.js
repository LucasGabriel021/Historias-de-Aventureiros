console.log("Olá, mundo!");

$(document).ready(function () {
     const btnScroll = $("#btnScroll");
     btnScroll.hide();

     $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
               btnScroll.fadeIn();
          } else {
               btnScroll.fadeOut();
          }
     });

     $(btnScroll).click(function () {
          $("html, body").animate({ scrollTop: 0 }, 1000);
          return false;
     });

     const btnAcessibilidade = $("#btnAcessibilidade");
     btnAcessibilidade.click(function () {
          let options = $('#options')
          if(options.hasClass("hidden")) {
               options.removeClass("hidden").addClass("expanded");
          } else {
               options.removeClass("expanded").addClass("hidden");
          }
     });
});