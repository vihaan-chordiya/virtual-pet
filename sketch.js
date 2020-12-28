var dog, dogImage1, dogImage2;
var foodS, foodStock;
function preload()
{
dogImage1 = loadImage("../images/dogImg.png");
dogImage2 = loadImage("../images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage("doggy",dogImage1);
  dog.scale = 0.25

  database = firebase.database();

  foodStock = database.ref('food')
  foodStock.on("value",readStock)
}


function draw() {  
 background(46,139,87)

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogImage2);
}

textSize(20)
fill("white")
text("Food Stock : "+ foodS,250,50)
text("For feeding the dog press up arrow key ",100,100)

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
  }
  
  function writeStock(x){

   if(x<=0){
     x=0;
   }else{
   x=x-1
     }
   

    database.ref('/').update({
      food:x
    })
  }

