/*Get random numbers using the math.random method */
const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

/* get the HTML element by its ID */
const questionEl = document.getElementById("question");

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`;

/* change the text inside the html element */
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

/* logic for the correct answer */
const correctAns = num1 * num2;


formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if(userAns === correctAns){
        score++
        updateLocalStorage()
    }else{
        score--
        updateLocalStorage()
    }
})


function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}
