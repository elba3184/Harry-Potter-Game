
var gallaga = document.getElementById('galaga-game');
var gallagaCTX = gallaga.getContext('2d');

    
    //Creating player (RON)
    var ron = new Image();
    ron.onload = function () {
        gallagaCTX.drawImage(ron, wizzard.x, wizzard.y, 50, 50);
    }
    ron.src = "img/ronWand.png"


    var wizzard = {
        x: 0,
        y: 450,
        w: 50,
        h: 50,
        moveLeft: function () { 
            let wiz = {...wizzard};
            wiz.x -=50
            if(!checkAllCollisions(wiz, rectangles)){
                wizzard.x -= 50 }
            },
    
                
        moveRight: function () { 
            let wiz = {...wizzard};
            wiz.x +=50
            if(!checkAllCollisions(wiz, rectangles)){
                wizzard.x += 50 }
        }
    }


    function draw(obj, img) {
        gallagaCTX.drawImage(img, obj.x, obj.y, 50, 50)
    }


    let wall1 = { x: -1, y: 0, w: 1, h: gallaga.height }
    let wall2 = { x: 0, y: -1, w: gallaga.width, h: 1 }
    let wall3 = { x: 0, y: 501, w: gallaga.width, h: 1}
    let wall4 = { x: 501, y: 0, w: 1, h: gallaga.height}

    let rectangles = [wall1, wall2, wall3, wall4]

    //Check if there is a collision
    function checkCollision(rect1, rect2) {
        if (rect1.x < rect2.x + rect2.w &&
            rect1.x + rect1.w > rect2.x &&
            rect1.y < rect2.y + rect2.h &&
            rect1.y + rect1.h > rect2.y) {
            return true;
        }
    }
    
    
    //Check each block in maze for collision
    function checkAllCollisions(p, rectangles){
        for(let i=0; i<rectangles.length; i++){
            if(checkCollision(p, rectangles[i])){
                return true;
            }
        }
    }
    


         //Checks user movements to move player
         document.onkeyup = function (e) {
            switch (e.keyCode) {
                case 37: wizzard.moveLeft(); break;
                case 39: wizzard.moveRight(); break;
            }
        }



    function updateGallagaCanvas() {
        gallagaCTX.clearRect(0, 0, 500, 500);
        //drawBoardGame();
        draw(wizzard, ron);
        //draw(defenseClass, darkArts);
        //endGoal();
        window.requestAnimationFrame(updateGallagaCanvas);
    }
    window.requestAnimationFrame(updateGallagaCanvas);












