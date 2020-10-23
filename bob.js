class Bob {
  constructor(x,y, radius){    
  var options ={
      isStatic: false,
      restitution: 0.9,
      friction: 1.0,
      density: 1.2
   }
   this.x =x;
   this.y=y;
   this.radius=70;
   this.body = Bodies.circle(this.x,this.y,(this.radius)/2, options);
   World.add(world, this.body);
}

display(){
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  rectMode(CENTER);
  strokeWeight(4)
  stroke("#2A2B2DFF");
  fill("#2DA8D8FF");
  ellipse(0,0, this.radius,this.radius);
  pop();
}
};