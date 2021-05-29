class polygon{
    constructor(a,s,d,w) {
    this.body = Bodies.rectangle(a,s,d,w);
        World.add(world,this.body);
    this.width=d
    this.height=w
   this.img = loadImage('polygon.png');
    }
    display(){
    
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    fill("lightblue")
    imageMode(CENTER)
    image(this.img, 0, 0,this.width,this.height);
    pop ()
    
    }
    }