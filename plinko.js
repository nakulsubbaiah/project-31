class Plinko
{
    constructor(x,y)
    {
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5
        }
      
      this.r=10;
      this.body = Bodies.circle(x,y,this.r,options); 
      World.add(world,this.body);

    }
    display()
    {
        var pos=this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(255);
        ellipseMode(RADIUS);
        ellipse(0,0, this.r,this.r);
        pop();
    

    }
}