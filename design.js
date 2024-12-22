const myform=document.getElementById('frm');
const num2=document.getElementById('num2');
const correctAnswer=['A','B','C','D'];
myform.addEventListener('submit',(e)=>{
    e.preventDefault();
    let userAnswer=[myform.answer1.value,myform.answer2.value,myform.answer3.value,myform.answer4.value,];
    let score=0;
    userAnswer.forEach((answer,i)=>{
        if(answer===correctAnswer[i]){
            score +=50
        }
    })
    console.log(score);
    num2.innerHTML=`<h2>the answer $ {score}</h2>`
});