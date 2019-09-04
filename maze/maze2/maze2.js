window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      startGame();
    };
  


    function startGame(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        var img = new Image();
        img.onload = function(){
            ctx.drawImage(img, player.x, player.y, 50, 50);
        }
        img.src = "../../img/ronFlying.png"
    


        let r1 = {x: 50, y: 50, w: 50, h: 300};
        let r2 = {x: 50, y: 400, w: 50, h: 100};
        let r3 = {x: 200, y: 200, w: 50, h: 150};
        let r4 = {x: 150, y: 400, w: 50, h: 100};
        let r5 = {x: 300, y: 250, w: 50, h: 200};
        let r6 = {x: 100, y: 50, w: 250, h: 50};
        let r7 = {x: 150, y: 150, w: 200, h: 50};
        let r8 = {x: 0, y: 300, w: 50, h: 50};
        let r9 = {x: 100, y: 300, w: 150, h: 50};
        let r10 = {x: 200, y: 400, w: 200, h: 50};
        let r11 = {x: 350, y: 250, w: 50, h: 50};

        let rectangles = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11];

        function drawBoardGame() {
            ctx.fillStyle = 'black';
            for(let i=0; i<rectangles.length; i++){
                ctx.fillRect(rectangles[i].x, rectangles[i].y, rectangles[i].w, rectangles[i].h);
            }
        }




        function checkCollision(rect1, rect2) {

            if (rect1.x < rect2.x + rect2.w &&
                rect1.x + rect1.w > rect2.x &&
                rect1.y < rect2.y + rect2.h &&
                rect1.y + rect1.h > rect2.y) {

                console.log('collision');
                return true;
            }

        }





        function draw(player){
            ctx.drawImage(img, player.x, player.y, 50, 50)
        }

        function updateCanvas(){
            ctx.clearRect(0, 0, 400, 500);
            drawBoardGame();
            draw(player);
            window.requestAnimationFrame(updateCanvas);
        }
        window.requestAnimationFrame(updateCanvas);









        var player = {
            x: 0,
            y: 0,
            h: 50,
            w: 50,
            moveLeft: function () { 
                let p = {...player};
                p.x -=50
                if(!checkAllCollisions(p, rectangles)){
                    player.x -= 50 }
                },
    
                
            moveRight: function () { 
                let p = {...player};
                p.x +=50
                if(!checkAllCollisions(p,rectangles)){
                    player.x += 50 }
                }
                ,
            moveUp: function () {
                let p = {...player};
                p.y -=50
                if(!checkAllCollisions(p,rectangles)){
                    player.y -= 50 }
                },
                
            moveDown: function () {
                let p = {...player};
                p.y +=50
                if(!checkAllCollisions(p,rectangles)){
                    player.y += 50 }
                },
            position: {x: 0, y: 0}
        }

        var library = {
            x: 350,
            y: 250
        }


        function checkAllCollisions(p, rectangles){
            for(let i=0; i<rectangles.length; i++){
                if(checkCollision(p, rectangles[i])){
                    return true;
                }
            }
        }

        document.onkeyup = function (e) {
            player.position = {x: player.x, y: player.y}
            switch (e.keyCode) {
                case 37: player.moveLeft(); break;
                case 38: player.moveUp(); break;
                case 39: player.moveRight(); break;
                case 40: player.moveDown(); break;

            }
        }


        drawBoardGame();
        draw(player);
    }
}
