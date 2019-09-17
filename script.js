$(document).ready( function () {
  // canvas
  var canvas = document.getElementById("theCanvas");
  var ctx = canvas.getContext("2d");
  
  // jumper?
  var Ball = function () {
    this.x = 50;
    this.y = 300;
    this.changeInY = 0;
    
    this.draw = function (thisX, thatY) {
      ctx.strokeStyle = "#000000";
      ctx.beginPath();
      ctx.arc(thisX, thatY, 20, 0, Math.PI * 2, false);
      ctx.stroke();
    }
    
    this.jump = function () {
      this.changeInY = 10
      this.y = this.y - this.changeInY;
      while (this.y <= 300) {
        this.changeInY = this.changeInY - 1;
        this.y = this.y - this.changeInY;
      }
    }
        
  }
  
  var player = new Ball();
  
  console.log(player.x);
  console.log(player.y);
  
  
  var Game = setInterval( function () {
    player.draw(player.x, player.y);
  }, 30);
});
       
