let form=document.querySelector(".quiz-form");
const correctAnswer=["A","A","A","A","A"];
let Result=document.querySelector(".result");
let question=document.querySelectorAll(".question");



form.addEventListener("submit",(event)=>{
    event.preventDefault();
let Answers=[form.q1.value,form.q2.value,form.q2.value,form.q2.value,form.q2.value];
let score=0;
Answers.forEach((answer,index)=>{
    if(answer===correctAnswer[index]){
        score++;
        question[index].classList.add("correct"); 
    }
   else 
   {
    question[index].classList.add("worng"); 
   }
});
console.log(score);
scrollTo(0,0);
Result.classList.remove("hide");
console.log(Result.querySelector("p").textContent=`you scored ${score}/5`);
});