class tree
{
	constructor(x,y,width, height)
	{
		/*
		var options={
			isStatic:true			
			}
		*/
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		//this.body=Bodies.rectangle(x, y, width, height , options);
 		//World.add(world, this.body);

		this.image = loadImage("tree.png");


	}
	display()
	{
			
			//var treepos=this.body.position;		

			push();
			translate(this.x, this.y);
			imageMode(CENTER)
			strokeWeight(3);
			//fill(255,0,255)
			//ellipse(0,0,this.radius, this.radius);
			image(this.image, 0 , 0, this.width, this.height);
			pop();
			
	}

}

