window.onload = function () {
    document.getElementById("start-button").onclick = function () {
        startGame();
    };



    //Start Maze
    function startGame() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');




        //Creating player (RON)
        var ron = new Image();
        ron.onload = function () {
            ctx.drawImage(ron, player.x, player.y, 50, 50);
        }
        ron.src = "img/ronFlying.png"


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
                if(!checkAllCollisions(p, rectangles)){
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
        }





        //Creating end goal (QUIZ)
        var books = new Image();
        books.onload = function () {
            ctx.drawImage(books, player.x, player.y, 50, 50);
        }
        books.src = "img/books.png"


        var library = {
            x: 350,
            y: 250
        }




        //Draw image onto canvas
        function draw(obj, img) {
            ctx.drawImage(img, obj.x, obj.y, 50, 50)
        }




        //Draw the maze
        let r1 = { x: 50, y: 0, w: 50, h: 200 }
        let r2 = { x: 0, y: 250, w: 50, h: 250 };
        let r3 = {x: 100, y: 250, w: 50, h: 250};
        let r4 = {x: 150, y: 50, w: 50, h: 150};
        let r5 = {x: 200, y: 200, w: 50, h: 250};
        let r6 = {x: 300, y: 250, w: 50, h: 100};
        let r7 = {x: 200, y: 50, w: 100, h: 50};
        let r8 = {x: 350, y: 50, w: 50, h: 50};
        let r9 = {x: 200, y: 150, w: 200, h: 50};
        let r10 = {x: 350, y: 300, w: 100, h: 50};
        let r11 = {x: 250, y: 400, w: 100, h: 50};
        let r12 = {x: 300, y: 400, w: 50, h: 50};

        let rectangles = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12];


        function drawBoardGame() {
            ctx.fillStyle = 'black';
            for(let i=0; i<rectangles.length; i++){
                ctx.fillRect(rectangles[i].x, rectangles[i].y, rectangles[i].w, rectangles[i].h);
            }
        }





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
        

    


        //Updating canvas 
        function updateCanvas() {
            ctx.clearRect(0, 0, 400, 500);
            drawBoardGame();
            draw(player, ron);
            draw(library, books);
            window.requestAnimationFrame(updateCanvas);
        }
        window.requestAnimationFrame(updateCanvas);






        //Checks user movements to move player
        document.onkeyup = function (e) {
            switch (e.keyCode) {
                case 37: player.moveLeft(); break;
                case 38: player.moveUp(); break;
                case 39: player.moveRight(); break;
                case 40: player.moveDown(); break;
            }
        }




        //Check if player reached the end
        if(checkCollision(player, libray)){
            
        }
    }
}




















// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("quizBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}










//Possible Questions for the quiz
var questionBank = [
    {
        question: "What creature is depicted in the emblem for Gryffindor house?",
        answers: {
            a: 'Snake',
            b: 'Lion',
            c: 'Eagle'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the incantation for the Summoning Charm?",
        answers: {
            a: 'Aparecium',
            b: 'Anapneo',
            c: 'Accio'
        },
        correctAnswer: 'c'
    },
    {
        question: "What colour is the Hogwarts Express?",
        answers: {
            a: 'Indigo',
            b: 'Emerald',
            c: 'Scarlet'
        },
        correctAnswer: 'c'
    },
    {
        question: "How are parcels and letters sent in the wizarding world?",
        answers: {
            a: 'via the Floo Network',
            b: 'via owls',
            c: 'via broomstick'
        },
        correctAnswer: 'b'
    },
    {
        question: "What do Harry and Ron crash into when they fly Arthur Weasley's Ford Anglia to Hogwarts?",
        answers: {
            a: 'The Whomping Willow',
            b: 'The Great Lake',
            c: 'The Astronomy Tower'
        },
        correctAnswer: 'a'
    },
    {
        question: "Which family was Dobby originally bound to serve?",
        answers: {
            a: 'The Malfoys',
            b: 'The Blacks',
            c: 'The Weasleys'
        },
        correctAnswer: 'a'
    },
    {
        question: "What item of clothing grants Dobby his freedom?",
        answers: {
            a: 'An old hat',
            b: 'A slimy sock',
            c: 'A broken shoe'
        },
        correctAnswer: 'b'
    },
    {
        question: "What does Harry Potter receive as an anonymous Christmas present in Philosopher’s Stone??",
        answers: {
            a: 'An invisibility cloak',
            b: 'A pair of cufflinks',
            c: 'A broom'
        },
        correctAnswer: 'a'
    },
    {
        question: "In Deathly Hallows, Lord Voldemort has a ‘Taboo’ put on his name. What does this mean, exactly?",
        answers: {
            a: 'It is impossible to say his name out loud',
            b: 'Voldemort can see inside that person\'s mind',
            c: 'Whoever says his name is trackable'
        },
        correctAnswer: 'c'
    }
];



function generateQuiz() {

    //Pick random question
    function chooseQuestion(questionBank) {
        var copy = questionBank.slice(0);
        return function () {
            if (copy.length < 1) {
                copy = questionBank.slice(0);
            }
            var index = Math.floor(Math.random() * copy.length);
            var item = copy[index];
            copy.splice(index, 1);
            return item;
        }
    }

    //Add quesrion to quiz array
    var chooser = chooseQuestion(questionBank);

    for (let i = 0; i < 4; i++) {
        quiz.push(chooser());
    }
}


let quiz = [];
generateQuiz();








function newQuestion(i) {

    document.querySelector("#quiz").innerHTML = `<form>
        <p>${quiz[i].question}</p>
        <div>
          <input type="radio" id="contactChoice1"
           name="contact" value="a" onclick="handleClick(this, ${i});">
          <label for="contactChoice1">${quiz[i].answers.a}</label>
      
          <input type="radio" id="contactChoice2"
           name="contact" value="b" onclick="handleClick(this, ${i});">
          <label for="contactChoice2">${quiz[i].answers.b}</label>
      
          <input type="radio" id="contactChoice3"
           name="contact" value="c" onclick="handleClick(this, ${i})">
          <label for="contactChoice3">${quiz[i].answers.c}</label>
        </div>
        <div>
          <!-- <button type="submit">Submit</button> -->
          <div id="selection"></div>
          <div id="checkAns"></div>
        </div>
      </form>`

}






let i = 0;

newQuestion(i);

function handleClick(itemClicked, i) {
    selection = document.getElementById('selection');
    checkAns = document.getElementById('checkAns');

    console.log('here!')
    if (itemClicked.value == quiz[i].correctAnswer) {
        if (i == 3) {
            checkAns.innerHTML = 'We should study again sometime! - Hermione'.fontcolor("purple");
        }
        else {
            i++;
            newQuestion(i);
        }


    }
    else {
        checkAns.innerHTML = 'You are incorrect!'.fontcolor("red");
    }
}











