class Chain {
    constructor(object1,object2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            length:150,
            stiffness:0.4,
            bodyA:object1,
            bodyB:object2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(4);
        var Anchor1X=pointA.x
		var Anchor1Y=pointA.y

		var Anchor2X=pointB.x+this.offsetX
		var Anchor2Y=pointB.y+this.offsetY

		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}