var Glitches = function(){
  this.x= 200/2;
  this.y = 400/2;
  
};

Glitches.prototype.update = function(){
    this.x+=random(-3,3);
    this.y +=random(-3,3);
};

Glitches.prototype.show = function(){
   
    fill(random(150)%100,random(150)%100,random(150)%100);
    noStroke();
    rect(this.x, this.y,50,50);
};
