class SlingShot{
    constructor(myBodyA,mypointB){
        var options ={
            bodyA : myBodyA,
            pointB : mypointB,
            length : 10,
            stiffness : 0.04
        }
        this.chain =Constraint.create(options);

        this.pointB =mypointB;
        World.add(world,this.chain)
    }
display(){
    if(this.chain.bodyA){
        strokeWeight(4)
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
   
}
  fly()      {
      this.chain.bodyA =null;
  }
    
}