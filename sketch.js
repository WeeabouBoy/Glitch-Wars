let sceneNum = 0;
let dot = new Mover();
let dots = [];
let glitch = [];
let wars = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 4000; i++) {
    dots[i] = new Mover();
  }

  for (let i = 0; i < 4000; i++) {
    glitch[i] = new Glitches();
  }

  for (let i = 0; i < 4000; i++) {
    wars[i] = new War();
  }
}


function draw() {
  mouseClicked = function() {
    sceneNum++;
  }
  if (sceneNum == 0) {
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(40);
    text("GLITCH WARS!", 100, 100);
    textSize(30);
    text("Click to Watch", 200, 200)

    for (let i = 0; i < 4000; i++) {
      wars[i].update();
      wars[i].show();
    }

  } else if (sceneNum == 1) {
    background(50, 200, 140);
    textSize(30);
    text("THE GLITCH MOB IS READY", 20, 50);

    for (let i = 0; i < 4000; i++) {
      dots[i].update();
      dots[i].show();
    }

    ellipse(mouseX, mouseY, 10, 10);
  } else if (sceneNum == 3) {
    background(50, 200, 140);
    textSize(30);
    text("THE GLITCH ARMY IS READY", 20, 50);

    for (let i = 0; i < 4000; i++) {
      glitch[i].update();
      glitch[i].show();
    }

    ellipse(mouseX, mouseY, 10, 10);
  } else if (sceneNum == 4) {
    background(50, 200, 140);
    textSize(50);
    text("BRING IT ON!!", 20, 50);

    for (let i = 0; i < 4000; i++) {
      dots[i].update();
      dots[i].show();
    }
  } else if (sceneNum == 5) {
    background(50, 200, 140);
    textSize(50);
    text("FORWARD!!", 20, 50);

    for (let i = 0; i < 4000; i++) {
      glitch[i].update();
      glitch[i].show();
    }
  } else if (sceneNum == 6) {
    background(255, 191, 0);
    textSize(20);
    text("insert explosion effect here", 10, 200);
  } else if (sceneNum == 7) {
    background(50, 200, 140);
    textSize(30);
    text("Find out what happens,", 10, 200);
  } else if (sceneNum == 8) {
    background(255, 0, 0);
    textSize(30);
    text("NEXT TIME ON GLITCH WARS!", 10, 200);
  } else if (sceneNum == 9) {
    background(255, 0, 0);
    textSize(50);
    text("Credits", 10, 40);
    textSize(30);
    text("Creator: Mr Peter Osudar", 10, 80);
    text("Editor: Saif Babar", 10, 120);
    text("Cast:", 10, 160);
    text("Kevin Bacon as Glitch Mob", 10, 200);
    text("Ryan Reynolds as Glitch Army", 10, 240);
  }


}
