class chain{ 
    constructor(p,q){
        var options = {
             bodyA: p,
             pointB: q, 
             stiffness: 0.04,
              length: 5
             }

        this.chain = Constraint.create(options); 
        World.add(world, this.chain);
        
    }


    display(){ 
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position; 
            var pointB = this.chain.pointB;
             strokeWeight(4);
              line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        }
        
}
    disconnectstone(){
     this.chain.bodyA=null
    }

}




