var logoimg, logo;
var logoimg2, logo2;
var pt1, pt2;
var namec, name1, ctnew ,ct1;
var continew;


function preload(){
logoimg = loadImage("download.png");
namec = loadImage("images.jpg");
ct1 = loadImage("ctnew.jpg")
}

function setup() {
 createCanvas(320,540,);
pt1 = createSprite(160,120,10,1000);
pt2 = createSprite(160,400,1000,10);
 name1 = createSprite(170,250,7,7);
 name1.addImage(namec);
 name1.scale = 0.18;
 name1.visible = true;
 logo = createSprite(160,120,7,7);
 logo.addImage(logoimg);
 logo.visible = true;
 ctnew = createSprite(160,310,100,100);
 ctnew.addImage(ct1);
 ctnew.scale = 0.2;
 ctnew.visible = true;
}

function draw() {

 if(mousePressedOver(ctnew)) {
continew();
    
}
 drawSprites();
}

function continew() {
    name1.visible = false;
     logo.visible = false;
      ctnew.visible = false;
     
}


