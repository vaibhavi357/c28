class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        // display if we have the bird's position
        if (this.sling.bodyA) {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
        
    }
    
    //make the bird fly when the mouse is released
    //null means nothing, do not attach the bird to anything(dettacth the bird from constrained)
 fly() {
        this.sling.bodyA = null;
    }
}
