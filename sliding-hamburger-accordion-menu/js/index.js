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
          $(".ui-draggable-dragging").append("<div class='icon'>click</div>","<canvas id='canvas' width= 10 height= 10></canvas>")
           iconClick();
            
        },
        stop: function (event, ui) {            
            positions[this.id] = ui.position
            localStorage.positions = JSON.stringify(positions)            
        
        }

    });
     function iconClick(){
       $(".icon").bind("click", function(){
         $("#exampleModal").css({"display":"block", "opacity":1})
       })
     };
    $(".close, .btn-secondary").bind("click", function(){
        $("#exampleModal").css({"display":"none", "opacity":0})
    });
    $(".btn-primary").bind("click", function(){
        $("#exampleModal").css({"display":"none", "opacity":0})
        $.ajax({
            url: 'some-url',
            type: 'post',
            dataType: 'json',
            data: $('form').serialize(),
            success : function(res){
                if(res.validated){
                        alert("yes")
		            
		            }else{
                        alert("No")
                    }
            }
        })       
        
        
    })
    
     var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");

var canvasOffset = $("#canvas").offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;

var startX;
var startY;
var isDown = false;
var dragTarget;

var boxes = [];
boxes.push({
    x: 0,
    y: 0,
    w: 10,
    h: 10
}); // x,y,width,height
boxes.push({
    x: 0,
    y: 0,
    w: 10,
    h: 10
});


var connectors = [];
connectors.push({
    box1: 0,
    box2: 1
});

draw();

function draw() {

    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        ctx.fillRect(box.x, box.y, box.w, box.h);
    }
    for (var i = 0; i < connectors.length; i++) {
        var connector = connectors[i];
        var box1 = boxes[connector.box1];
        var box2 = boxes[connector.box2];
        ctx.beginPath();
        ctx.moveTo(box1.x + box1.w / 2, box1.y + box1.h / 2);
        ctx.lineTo(box2.x + box2.w / 2, box2.y + box2.h / 2);
        ctx.stroke();
    }

}

function hit(x, y) {
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        if (x >= box.x && x <= box.x + box.w && y >= box.y && y <= box.y + box.h) {
            dragTarget = box;
            return (true);
        }
    }
    return (false);
}

function handleMouseDown(e) {
    startX = parseInt(e.clientX - offsetX);
    startY = parseInt(e.clientY - offsetY);

    // Put your mousedown stuff here
    isDown = hit(startX, startY);
}

function handleMouseUp(e) {
    // Put your mouseup stuff here
    dragTarget = null;
    isDown = false;
}

function handleMouseOut(e) {
    handleMouseUp(e);
}

function handleMouseMove(e) {
    if (!isDown) {
        return;
    }

    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);

    // Put your mousemove stuff here
    var dx = mouseX - startX;
    var dy = mouseY - startY;
    startX = mouseX;
    startY = mouseY;
    dragTarget.x += dx;
    dragTarget.y += dy;
    draw();
}

$("#canvas").mousedown(function (e) {
    handleMouseDown(e);
});
$("#canvas").mousemove(function (e) {
    handleMouseMove(e);
});
$("#canvas").mouseup(function (e) {
    handleMouseUp(e);
});
$("#canvas").mouseout(function (e) {
    handleMouseOut(e);
});

    // $( "#droppable" ).droppable({
    //     drop: function(ev, ui) {
    //     $(ui.draggable).clone(false).detach().appendTo(this);
    //     }
      
    // });
}); // jQuery load

