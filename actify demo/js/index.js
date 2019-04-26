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
    
    $('.draggable').draggable({
        helper: 'clone',
        containment: ".main-container",
        scroll: false,
        start: function(event, ui){
          $(".ui-draggable-dragging").append("<div class='icon' data-toggle='modal' data-target='#exampleModal'>click</div>")
          // iconClick();
        },
        stop: function (event, ui) {
          positions[this.id] = ui.position
          // localStorage.positions = JSON.stringify(positions)
        
        }

    });
    // function iconClick(){
    //   $(".icon").bind("click", function(){
    //     $("#exampleModal").css({"display":"block", "opacity":1})
    //   })
    // }
    // $( "#droppable" ).droppable({
    //     drop: function(ev, ui) {
    //     $(ui.draggable).clone(false).detach().appendTo(this);
    //     }
      
    // });
}); // jQuery load