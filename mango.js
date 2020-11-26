class mango
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1
		}
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.body=Bodies.circle(this.x, this.y, this.radius/2 - 12, options);
		World.add(world, this.body);

		this.image = loadImage("mango.png");


	}
	display()
	{
			
			var mangoPos=this.body.position;		

			push();
			translate(mangoPos.x, mangoPos.y);
			imageMode(CENTER)
			strokeWeight(3);
			//fill(255,0,255)
			//ellipse(0,0,this.radius, this.radius);
			image(this.image, 0 , 0, this.radius, this.radius);
			pop();
			
	}

}