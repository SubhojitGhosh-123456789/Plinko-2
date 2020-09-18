class Logo3 {
    constructor(x, y) {
      var options = 
      {
        isStatic:true,
        
      }
      this.body = Bodies.rectangle(x, y, 5, 5,options);
      this.width = width;
      this.height = height;
  
      this.image = loadImage("img5.jpg");
      
      World.add(world, this.body);
    }

    null(){}       
    
    display(){
  
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, 750,810);
      
    }
  };