class Logo2 {
    constructor(x, y) {
      var options = 
      {
        isStatic:true,
        
      }
      this.body = Bodies.rectangle(x, y, 5, 5,options);
      this.width = width;
      this.height = height;
  
      this.image = loadImage("img4.png");
      
      World.add(world, this.body);
    }
    display(){
  
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, 250,50);
      
    }
  };