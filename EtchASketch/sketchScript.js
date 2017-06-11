var i=0;
var size=16;
var gridSize=40;


$(document).ready(function(){
  makeGrid();
  $('#creategrid').click(function(){
    $('div').removeClass('sketch');
    size=$('input').val();
    gridSize=640/size;
    makeNew();
  });
  $('#cleargrid').click(function(){
    makeNew();
    i=0;

    });
  $('#input').click(function(){
    $(this).val("");

    });
  $('#randomcolor').click(function(){
    randcolor();
    });
});

function makeGrid(){
  for (var i=1;i<=size*size;i++){
    $('.table').append("<div class='node'></div>");
  };
  $(".table").width(size*gridSize+"px");
  $(".node").width(gridSize+"px");
  $(".node").height(gridSize+"px");
};

  function makeNew(){
    $('.table').empty();
    makeGrid();
  };

  $(document).on('mouseenter', '.node',function(){
    $(this).addClass('sketch'+i);
  });

function randcolor(){
  i++;
  var colorz=".sketch"+i;
  var r=Math.floor(255*Math.random());
  var g=Math.floor(255*Math.random());
  var b=Math.floor(255*Math.random());
  var curve=Math.floor(12*Math.random());
  $(colorz).css("background","#123456");
  //$('.sketch'+i).css("background","rgb("+r+","+b+","+g+")");
  $('.sketch'+i).css("border-radius",curve+"px");
 console.log(i);
 console.log(colorz);
};

//randcolor could be made to save each color by adding a global variable counter that would iterate each time user clicked Random Color! This iterator would be appended to a new class called color+i (color1, color2, etc). The new random rbg values would only be applied to the new color+i class, leaving the past color selections intact!
// //ready closing
