class stone
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
		}
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.body=Bodies.circle(this.x, this.y, this.radius/2, options);
 		World.add(world, this.body);

		this.image = loadImage("stone.png");


	}
	display()
	{
			
			var stonepos=this.body.position;		

			push();
			translate(stonepos.x, stonepos.y);
			imageMode(CENTER)
			strokeWeight(3);
			//fill(255,0,255)
			//ellipse(0,0,this.radius, this.radius);
			image(this.image, 0 , 0, this.radius, this.radius);
			pop();
			
	}

}

