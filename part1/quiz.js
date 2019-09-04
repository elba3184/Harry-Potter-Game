// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("quizBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    //modal.style.display = "block";
    document.querySelector("#myModal").style.display = 'block';
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
        <div class="option">
          <input type="radio" id="contactChoice1"
           name="contact" value="a" onclick="handleClick(this, ${i});">
          <label for="contactChoice1">${quiz[i].answers.a}</label>
        </div>
        <div class="option">
          <input type="radio" id="contactChoice2"
           name="contact" value="b" onclick="handleClick(this, ${i});">
          <label for="contactChoice2">${quiz[i].answers.b}</label>
        </div>
        <div class="option">
          <input type="radio" id="contactChoice3"
           name="contact" value="c" onclick="handleClick(this, ${i})">
          <label for="contactChoice3">${quiz[i].answers.c}</label>
        </div>
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
            document.querySelector("#myModal > div > span").innerHTML = `<a href='../part2/index2.html'>Leave Library & head to Snape's class</a>`;
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











