const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles=[];
var plinkos = [];
var divisions = [];


function setup() {
  createCanvas(420,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
for(var s=20;s<=width;s=s+50) {
  plinkos.push(new Plinko(s,80));
} 
for(var s=35;s<=width;s=s+50) {
  plinkos.push(new Plinko(s,160));
} 
for(var s=20;s<=width;s=s+50) {
  plinkos.push(new Plinko(s,240));
} 
for(var s=35;s<=width;s=s+50) {
  plinkos.push(new Plinko(s,320));
} 
ground=new Ground(210,700,420,20);
ground1=new Ground(0,700,10,500);
ground2=new Ground(70,700,10,500);
ground3=new Ground(140,700,10,500);
ground4=new Ground(210,700,10,500);
ground5=new Ground(280,700,10,500);
ground6=new Ground(350,700,10,500);
ground7=new Ground(420,700,10,500);
}

function draw() {
  background(0); 

  
  for(var j = 0; j < particles.length;j++){
   particles[j].display();
  }
  for(var i = 0; i<plinkos.length;i++){
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  ground.display(); 
  ground1.display(); 
  ground2.display(); 
  ground3.display(); 
  ground4.display(); 
  ground5.display(); 
  ground6.display(); 
  ground7.display(); 
  drawSprites();
}