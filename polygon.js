class Polygon {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.8,
          friction:1.0,
          density:1.0
      }
      this.body = Bodies.circle(x, y, 28, options);
      this.radius = this.radius;
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image,0, 0, this.radius,this.radius);
      pop();
    }
  }
  