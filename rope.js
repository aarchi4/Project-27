class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options={
            bodyA:body1,
            bodyB : body2,
            pointB : {x:this.offsetX , y:this.offsetY}
        }
        this.rope =Matter.Constraint.create(options)
        World.add(world,this.rope)

    }
    display(){
        var point1 = this.rope.bodyA.position
        var point2 = this.rope.bodyB.position
        strokeWeight(2);

        var X = point1.x;
        var Y = point1.y;

        var X2 = point2.x + this.offsetX;
        var Y2 = point2.y + this.offsetY;
        line(X,Y,X2,Y2);

    }
}