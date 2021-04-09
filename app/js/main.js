$(document).ready(function(){
  $(".about__accordion-tab").click(function () {
    $(".about__accordion-tab").each(function () {
      $(this).removeClass("about__accordion-tab--active");
    });
    $(this).addClass("about__accordion-tab--active");
  });
});

