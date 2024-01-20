let buttons = document.querySelectorAll('.btn');
let increase = document.querySelector('#increase');
let reset = document.querySelector('#reset');
let decrease = document.querySelector('#decrease');
let para = document.querySelector('p');
let counter = 0;

increase.addEventListener('click', () => {
    counter++;
    para.innerText = counter;
})

decrease.addEventListener('click', () => {
    counter--;
    para.innerText = counter;
})

reset.addEventListener('click', () => {
    counter = 0;
    para.innerText = counter;
})

buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if (counter > 0) {
            para.style.color = "green";
        }
        else if (counter < 0) {
            para.style.color = "red";
        }
        else
            para.style.color = "black";
    })
})



