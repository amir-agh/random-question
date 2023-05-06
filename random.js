// variables
const quizBox = document.querySelector("#quizBox")

// creating element to be dynamic
/*let liAllQuestion = document.createElement("li")
let h4Question = document.createElement("h4")
let ulListOfChoices = document.createElement("ul")
let liQ1 = document.createElement("li")
let liQ2 = document.createElement("li")
let liQ3 = document.createElement("li")
let liQ4 = document.createElement("li")
let label1 = document.createElement("label")
let label2 = document.createElement("label")
let label3 = document.createElement("label")
let label4 = document.createElement("label")
let input1 = document.createElement("input")
let input2 = document.createElement("input")
let input3 = document.createElement("input")
let input4 = document.createElement("input")
let span1 = document.createElement("span")
let span2 = document.createElement("span")
let span3 = document.createElement("span")
let span4 = document.createElement("span")
// append child
label1.appendChild(input1)
label2.appendChild(input2)
label3.appendChild(input3)
label4.appendChild(input4)
label1.appendChild(span1)
label2.appendChild(span2)
label3.appendChild(span3)
label4.appendChild(span4)
liQ1.appendChild(label1)
liQ2.appendChild(label2)
liQ3.appendChild(label3)
liQ4.appendChild(label4)
ulListOfChoices.appendChild(liQ1)
ulListOfChoices.appendChild(liQ2)
ulListOfChoices.appendChild(liQ3)
ulListOfChoices.appendChild(liQ4)
liAllQuestion.appendChild(h4Question)
liAllQuestion.appendChild(ulListOfChoices)
quizBox.appendChild(liAllQuestion)
// classname
h4Question.className = "question"
ulListOfChoices.className = "choices"
liQ1.className = "option1"
liQ2.className = "option2"
liQ3.className = "option3"
liQ4.className = "option4"
span1.className = "text1"
span2.className = "text2"
span3.className = "text3"
span4.className = "text4"
// input initialing
input1.type = "radio"
input1.name = "question0"
input1.value = "A"
input2.type = "radio"
input2.name = "question0"
input2.value = "B"
input3.type = "radio"
input3.name = "question0"
input3.value = "C"
input4.type = "radio"
input4.name = "question0"
input4.value = "D"
//initialing texts
h4Question.textContent = questions[i].A
span1.textContent = questions[i].B
span2.textContent = questions[i].C
span3.textContent = questions[i].D
span4.textContent = questions[i].E*/

/*
let questions;
let usersAnswers;

questions = [
    {
        A: "Part of income paid to government is ______.",
        B: "taxes",
        C: "bills",
        D: "pay",
        E: "account",
        answer: "A",
    },
    {
        A: "______ is money for transport.",
        B: "pension",
        C: "fare",
        D: "interest",
        E: "salary",
        answer: "A",
    },
    {
        A: "Money parents give children every week is called ______.",
        B: "part-money",
        C: "pocket money",
        D: "interest",
        E: "rent",
        answer: "A",
    },
    {
        A: "______ is money from work, usually hourly or weekly.",
        B: "wages",
        C: "salary",
        D: "rent",
        E: "interest",
        answer: "A",
    },
    {
        A: "Money from work, usually monthly, is called ______.",
        B: "wages",
        C: "salary",
        D: "fee",
        E: "pay",
        answer: "A",
    },
    {
        A: "I live in the ______, not the town.",
        B: "area",
        C: "farm",
        D: "apartment",
        E: "country",
        answer: "A",
    },
    {
        A: "To be a soldier, you join the ______.",
        B: "force ",
        C: "army",
        D: "group",
        E: "government",
        answer: "A",
    },
    {
        A: "Person who controls a game is ______.",
        B: "referee",
        C: "score",
        D: "spectator",
        E: "player",
        answer: "A",
    },
    {
        A: "We’re just ______, not professionals.",
        B: "players",
        C: "crowd",
        D: "team",
        E: "amateurs",
        answer: "A",
    },
    {
        A: "There are sometimes more players than ______.",
        B: "spectators",
        C: "referees",
        D: "teams",
        E: "scores",
        answer: "A",
    },
];

let answers = []

for (let i = 1; i < questions.length; i++) {
    // creating element to be dynamic
    let liAllQuestion = document.createElement("li")
    let h4Question = document.createElement("h4")
    let ulListOfChoices = document.createElement("ul")
    let liQ1 = document.createElement("li")
    let liQ2 = document.createElement("li")
    let liQ3 = document.createElement("li")
    let liQ4 = document.createElement("li")
    let label1 = document.createElement("label")
    let label2 = document.createElement("label")
    let label3 = document.createElement("label")
    let label4 = document.createElement("label")
    let input1 = document.createElement("input")
    let input2 = document.createElement("input")
    let input3 = document.createElement("input")
    let input4 = document.createElement("input")
    let span1 = document.createElement("span")
    let span2 = document.createElement("span")
    let span3 = document.createElement("span")
    let span4 = document.createElement("span")
    // append child
    label1.appendChild(input1)
    label2.appendChild(input2)
    label3.appendChild(input3)
    label4.appendChild(input4)
    label1.appendChild(span1)
    label2.appendChild(span2)
    label3.appendChild(span3)
    label4.appendChild(span4)
    liQ1.appendChild(label1)
    liQ2.appendChild(label2)
    liQ3.appendChild(label3)
    liQ4.appendChild(label4)
    ulListOfChoices.appendChild(liQ1)
    ulListOfChoices.appendChild(liQ2)
    ulListOfChoices.appendChild(liQ3)
    ulListOfChoices.appendChild(liQ4)
    liAllQuestion.appendChild(h4Question)
    liAllQuestion.appendChild(ulListOfChoices)
    quizBox.appendChild(liAllQuestion)
    // classname
    h4Question.className = "question"
    ulListOfChoices.className = "choices"
    liQ1.className = "option1"
    liQ2.className = "option2"
    liQ3.className = "option3"
    liQ4.className = "option4"
    span1.className = "text1"
    span2.className = "text2"
    span3.className = "text3"
    span4.className = "text4"
// input initialing
    input1.type = "radio"
    input1.name = "question0"
    input1.value = "A"
    input2.type = "radio"
    input2.name = "question0"
    input2.value = "B"
    input3.type = "radio"
    input3.name = "question0"
    input3.value = "C"
    input4.type = "radio"
    input4.name = "question0"
    input4.value = "D"
    //initialing texts
    h4Question.textContent = questions[i].A
    span1.textContent = questions[i].B
    span2.textContent = questions[i].C
    span3.textContent = questions[i].D
    span4.textContent = questions[i].E

    label4.addEventListener("click", function add1() {
        answers.push(input4.value)
        let arrayToString = JSON.stringify(answers)
        localStorage.setItem("answers", arrayToString)
        console.log(arrayToString)
    })
    label3.addEventListener("click", function add2() {
        answers.push(input3.value)
        let arrayToString = JSON.stringify(answers)
        localStorage.setItem("answers", arrayToString)
        console.log(arrayToString)
    })
    label2.addEventListener("click", function add3() {
        answers.push(input2.value)
        let arrayToString = JSON.stringify(answers)
        localStorage.setItem("answers", arrayToString)
        console.log(arrayToString)
    })
    label1.addEventListener("click", function add4() {
        answers.push(input1.value)
        let arrayToString = JSON.stringify(answers)
        console.log(arrayToString)
        localStorage.setItem("answers", arrayToString)
    })

}


*/



