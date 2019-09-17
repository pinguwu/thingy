$(document).ready( function () {
  // canvas
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  
  // jumper?
  var Player = function () {
    this.x = 50;
    this.y = 300;
    
    this.draw = function (thisX, thatY) {
      ctx.beginPath();
      ctx.arc(thisX, thatY, 20, 0, Math.PI * 2, false);
      ctx.stroke();
    }
  }
});
       
