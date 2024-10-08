let question_1 = document.querySelector(".question-1");
let question_2 = document.querySelector(".question-2");
let question_3 = document.querySelector(".question-3");
let question_4 = document.querySelector(".question-4");
let question_5 = document.querySelector(".question-5");
let question_6 = document.querySelector(".question-6");
let quest_1 = 0;
let quest_2 = 0;
let quest_3 = 0;
let quest_4 = 0;
let quest_5 = 0;
let quest_6 = 0;
let answer_1 = question_1.querySelector(".answer-1");
let answer_2 = question_2.querySelector(".answer-2");
let answer_3 = question_3.querySelector(".answer-3");
let answer_4 = question_4.querySelector(".answer-4");
let answer_5 = question_5.querySelector(".answer-5");
let answer_6 = question_6.querySelector(".answer-6");
let symbol = document.getElementsByClassName("symbol");
console.log(symbol);
question_1.addEventListener("click",()=>{
    quest_1 = quest_1+1;
    if(quest_1%2==0){
        question_1.style.flexDirection = "row";
        question_1.style.rowGap = "20px";
        symbol[0].style.display = "block";
        answer_1.style.display= "none";
    }
    else{
        question_1.style.flexDirection = "column";
        symbol[0].style.display = "none";
        answer_1.style.display= "block";
    }
},false)
question_2.addEventListener("click",()=>{
    quest_2 = quest_2+1;
    if(quest_2%2==0){
        question_2.style.flexDirection = "row";
        question_2.style.rowGap = "20px";
        symbol[1].style.display = "block";
        answer_2.style.display= "none";
    }
    else{
        question_2.style.flexDirection = "column";
        symbol[1].style.display = "none";
        answer_2.style.display= "block";
    }
},false)
question_3.addEventListener("click",()=>{
    quest_3 = quest_3+1;
    if(quest_3%2==0){
        question_3.style.flexDirection = "row";
        question_3.style.rowGap = "20px";
        symbol[2].style.display = "block";
        answer_3.style.display= "none";
    }
    else{
        question_3.style.flexDirection = "column";
        symbol[2].style.display = "none";
        answer_3.style.display= "block";
    }
},false)
question_4.addEventListener("click",()=>{
    quest_4 = quest_4+1;
    if(quest_4%2==0){
        question_4.style.flexDirection = "row";
        question_4.style.rowGap = "20px";
        symbol[3].style.display = "block";
        answer_4.style.display= "none";
    }
    else{
        question_4.style.flexDirection = "column";
        symbol[3].style.display = "none";
        answer_4.style.display= "block";
    }
},false)
question_5.addEventListener("click",()=>{
    quest_5 = quest_5+1;
    if(quest_5%2==0){
        question_5.style.flexDirection = "row";
        question_5.style.rowGap = "20px";
        symbol[4].style.display = "block";
        answer_5.style.display= "none";
    }
    else{
        question_5.style.flexDirection = "column";
        symbol[4].style.display = "none";
        answer_5.style.display= "block";
    }
},false)
question_6.addEventListener("click",()=>{
    quest_6 = quest_6+1;
    if(quest_6%2==0){
        question_6.style.flexDirection = "row";
        question_6.style.rowGap = "20px";
        symbol[5].style.display = "block";
        answer_6.style.display= "none";
    }
    else{
        question_6.style.flexDirection = "column";
        symbol[5].style.display = "none";
        answer_6.style.display= "block";
    }
},false)

