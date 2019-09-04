window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      startGame();
    };
  

    //Start Maze
    function startGame(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        //Creating player (RON)
        var ron = new Image();
        ron.onload = function(){
            ctx.drawImage(ron, player.x, player.y, 50, 50);
        }
        ron.src = "../../img/ronFlying.png"
        
    
        //Creating end goal (QUIZ)
        var books = new Image();
        books.onload = function(){
            ctx.drawImage(books, player.x, player.y, 50, 50);
        }
        books.src = "../../img/books.png"

        //Draw the maze

        function drawBoardGame(){
            ctx.fillStyle = 'black';
            ctx.fillRect(51, 0, 50, 200);
            ctx.fillRect(0, 250, 50, 250);
            ctx.fillRect(100, 250, 50, 250);
            ctx.fillRect(150, 50, 50, 150);
            ctx.fillRect(200, 200, 50, 250);
            ctx.fillRect(300, 250, 50, 100);
            ctx.fillRect(200, 50, 100, 50);
            ctx.fillRect(350, 50, 50, 50);
            ctx.fillRect(200, 150, 200, 50);
            ctx.fillRect(350, 300, 100, 50);
            ctx.fillRect(250, 400, 100, 50);
            ctx.fillRect(300, 400, 50, 50);
        }

        //Draw image onto canvas
        function draw(obj, img){
            ctx.drawImage(img, obj.x, obj.y, 50, 50)
        }

        function checkCollision(){

        }

        //Updating canvas 
        function updateCanvas(){
            ctx.clearRect(0, 0, 400, 500);
            drawBoardGame();
            draw(player, ron);
            draw(library, books);
            window.requestAnimationFrame(updateCanvas);
        }
        window.requestAnimationFrame(updateCanvas);

        
        var player = {
            x: 0,
            y: 0,
            moveLeft: function() {player.x -= 50},
            moveRight: function() {player.x += 50},
            moveUp: function() {player.y -= 50},
            moveDown: function() {player.y += 50}
        }

        var library = {
            x: 350,
            y: 250
        }

        
        document.onkeydown = function(e){
            switch(e.keyCode){
                case 37: player.moveLeft(); break;
                case 38: player.moveUp(); break;
                case 39: player.moveRight(); break;
                case 40: player.moveDown(); break;

            }
        }
    
        drawBoardGame();
        draw(player, ron);
        draw(library, books);
    }
}
