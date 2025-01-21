const questions = [
  {
      question: "What is the capital of France?",
      answers : [
        {text: "Paris", correct: true},
        {text: "London", correct: false},
        {text: "Berlin", correct: false},
        {text: "Madrid", correct: false}
      ]
    },
    {
      question: "What is the largest planet in our solar system?",
      answers : [
        {text: "Jupiter", correct: true},
        {text: "Saturn", correct: false},
        {text: "Neptune", correct: false},
        {text: "Mars", correct: false}
      ]
    },
    {
    question: "Who wrote 'Hamlet'?",
    answers : [
      {text: "Shakespeare", correct: true},
      {text: "Hemingway", correct: false},
      {text: "Dickens", correct: false},
      {text: "Fitzgerald", correct: false}
    ]
    },
    {
    question:"Which of these is a type of tree?",
    answers : [
      {text :"Elephant",correct:false},
      {text :"Oak" ,correct:true},
      {text :"Zebra" ,correct:false},
      {text :"Dolphin" ,correct:false},

    ]
    },
    {
    question: "Which famous scientist developed the theory of relativity?",
    answers : [
      {text :"Isaac Newton" ,correct:false},
      {text :"Marie Curie" ,correct:false},
      {text :"Albert Einstein" ,correct:true},
      {text :"Galileo Galilei" ,correct:false},
    
    ]
    },
    {
    question: "Which of the following is the largest continent by land area?",
    answers: [
      {text :"Africa" ,correct:false},
      {text :"Asia" ,correct:true},
      {text :"Europe" ,correct:false},
      {text :"Antarctica" ,correct:false},
    
    ]
    },
    {
    question:"In what year did the Titanic sink?",
    answers: [
      {text :"1912" ,correct:true},
      {text :"1898" ,correct:false},
      {text :"1923" ,correct:false},
      {text :"1905" ,correct:false},
    
    ]
    },
    {
    question:"What is the chemical symbol for the element gold?",
    answers: [
      {text :"Ag" ,correct:false},
      {text :"Fe" ,correct:false},
      {text :"Pb" ,correct:false},
      {text :"Au" ,correct:true},
    
    ]
    },
    {
    question:"Who was the first emperor of China?",
    answers: [
    {text :"Qin Shi Huang" ,correct:true},
      {text :"Liu Bang" ,correct:false},
      {text :"Tang Taizong" ,correct:false},
      {text :"Wu Zetian" ,correct:false},
    
    ]
    },
    {
    question:"What is the largest moon of Saturn?",
    answers: [
      {text :"Ganymede" ,correct:false},
      {text :"Titan" ,correct:true},
      {text :"Europa" ,correct:false},
      {text :"Io" ,correct:false},
    
    ]
    },
    {
    question: "Which planet is known as the 'Red Planet'?",
    answers: [
      {text :"Jupiter" ,correct:false},
      {text :"Mars" ,correct:true},
      {text :"Venus" ,correct:false},
      {text :"Mercury" ,correct:false},
    
    ]
    },
    {
    question:"What is the smallest bone in the human body?",
    answers: [
      {text :"Stapes" ,correct:true},
      {text :"Femur" ,correct:false},
      {text :"Tibia" ,correct:false},
      {text :"Radius" ,correct:false},
    
    ]
    },
    {
    question:"Who was the first woman to win a Nobel Prize?",
    answers: [
      {text :"Ada Lovelace" ,correct:false},
      {text :"Rosalind Franklin" ,correct:false},
      {text :"Florence Nightingale" ,correct:false},
      {text :"Marie Curie" ,correct:true},    
    ]
},
  
];
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score= 0;
  nextButton.innerHTML = "Next"
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; 

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}


function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
   selectedBtn.classList.add("incorrect");
   showLoseMessage();
   return;
  }
  
  Array.from(answerButtons.children).forEach(button =>{
    if (button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
  }
  function showLoseMessage(){
    resetState();
    questionElement.innerHTML = "You lose, Try Again!"
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";

  }

  function showScore() {
    resetState();
    questionElement.innerHTML = `Congratulations! You've Won $${score * 10000}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }
  
function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}


nextButton.addEventListener("click",()=>{
  if(nextButton.innerHTML === "Try Again"){
    startQuiz();
  }else {
    handleNextButton();
  }
})
function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  nextButton.style.display = "none";
  showQuestion();
}
startQuiz();

