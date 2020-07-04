class Boxes {

    constructor(x,y,width,height)
    {
         var options=
        {isStatic:true

        }

    this.image=loadImage("sprites/dustbingreen.png");
    this.body= Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;

    World.add(world, this.body);
}
    display()
{var angle=this.body.angle
    image(this.image,500,495,200,200)
    push()
    translate(this.body.position.x, this.body.position.y)
    rotate(angle)

rectMode(CENTER);
fill("yellow");
stroke("yellow");
rect(0,0,this.width,this.height)
pop();
}

}