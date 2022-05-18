//Question bank
var questionBank= [
    {
        question : 'When was Comabat Evolved released onto the xbox',
        option : ['15 december 2001','15 November 2001','15 November 2002','15 december 2002'],
        answer : '15 November 2001'
    },
    {
        question : 'What is the name of Batmans butler?',
        option : ['Sir Alfred pennyworth','Alfred Smith','Alfred Pennyworth','Alfred Jackson'],
        answer : 'Alfred Pennyworth'
    },
    {
        question : 'Which classic horror film stars a serial killer dressed as William Shatner? ',
        option : ['Halloween','Chucky','Hellraiser','Friday the 13th'],
        answer : 'Halloween'
    },
    {
        question : 'Who is the most famous video game character of all time?',
        option : ['Sonic','Lara Croft','Mario','Master Cheif'],
        answer : 'Mario'
    },
    {
        question : 'Whats the best selling video game console of all time?',
        option : ['Ps4','Xbox 360','Xbox one','Ps2'],
        answer : 'Ps2'
    },
    {
        question : 'Who is the only person ever to receive an Oscar nomination for acting in a Star Wars movie?',
        option : ['Alec Guinness','Ewan Mcgregor','Carrie Fisher','Hayden Christensen'],
        answer : 'Alec Guinness'
    },
    {
        question : ' Which movie has a scene of two seconds of footage that took months to create?',
        option : ['Preditor 2 ','Tranformers: Revenge Of The Fallen','Spider man 2 ','Mad Max'],
        answer : 'Transformers: Revenge Of The Fallen'
    },
    {
        question : 'Whats the best selling video game console of all time?',
        option : ['Ps4','Xbox 360','Xbox one','Ps2'],
        answer : 'Ps2'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();