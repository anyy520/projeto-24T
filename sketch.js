const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


//variaveis
var engine;
var world;
var solo, bola;
var parado;
var mexendo;

var angle = 60;

var botão;


function preload(){

}

function setup() {
    createCanvas(600, 400);

    engine = Engine.create();
    world = engine.world;

    parado = {isStatic:true};

    solo = Bodies.rectangle(300,390,600,20,parado);

    World.add(world, solo);



    mexendo = {
        isStatic:false
    }
  
    bola = Bodies.circle(200,10,20, mexendo);
    World.add(world, bola);

    console.log(solo);
}


function draw() {
    background("cyan");

    //atualizar o motor
    Engine.update(engine);


    fill("green")
    rect(solo.position.x, solo.position.y, 600,20);

   
    fill("red");
    ellipse(bola.position.x, bola.position.y, 20);

}
