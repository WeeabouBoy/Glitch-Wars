var Mover = function(){
  this.x= 600/2;
  this.y = 400/2;
  
};

Mover.prototype.update = function(){
    this.x+=random(-3,3);
    this.y +=random(-3,3);
};

Mover.prototype.show = function(){
   
    fill(random(255)%100,random(255)%100,random(255)%100);
    noStroke();
    rect(this.x, this.y,20,20);
};
