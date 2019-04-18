$(function() {
  function slideMenu() {
    var activeState = $("#menu-container .menu-list").hasClass("active");
    $("#menu-container .menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
  }
    
  $("#menu-wrapper").click(function(event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active");
    slideMenu();

    $("body").toggleClass("overflow-hidden");
  });

  $(".menu-list").find(".accordion-toggle").click(function() {
    $(this).next().toggleClass("open").slideToggle("fast");
    $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

    $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
    $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
  });
    
        drag();
    function drag(){
    $('.dragg').draggable({
        containment: ".main-container",
        cancel: "a.ui-icon",
        revert: true,
        helper: function() {
        //drag selected items
        var selected = $(this);
        var container = $('<div/>');
        container.append(selected.clone());
        return container;
     },
        stop: function () {
            $(this).draggable('option', 'revert', 'invalid');
        }
    });
        
    }
}); // jQuery load