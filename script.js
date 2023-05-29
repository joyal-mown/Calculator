let boxValue = document.querySelector('#box');
let modeChangeIcon = document.querySelector('i');
let calculatorBody = document.querySelector('body');
let inputMode = document.querySelectorAll('input');
let normalButton = document.querySelectorAll('.btn');
let divMode = document.querySelectorAll('div');
let headerMode = document.querySelector('header');
let mode = 'bi-sun';



function useButton(val) {

    if(val === ''){
        boxValue.value = '';
    }
    else if(val === 'pop'){
        boxValue.value = boxValue.value.substring(0, boxValue.value.length - 1);
    }
    else{
        boxValue.value += val;
    }

}


function useSubmit() {

    boxValue.value = eval(boxValue.value);

}


function modeChange() {

    modeChangeIcon.classList.toggle(mode);

    for(let i = 0; i < inputMode.length; i++){
        if(modeChangeIcon.classList == 'bi bi-moon bi-sun'){
            modeChangeIcon.style.color = 'white';
            headerMode.style.backgroundColor = 'black';
            modeChangeIcon.style.backgroundColor = 'black';
            inputMode[i].style.backgroundColor = 'black';
            inputMode[i].style.boxShadow = ' 1px 1px 5px rgb(141, 141, 141)';
            calculatorBody.style.backgroundColor = 'black';
            for (let j = 0; j  < divMode.length; j++) {
            
                divMode[j].style.backgroundColor = 'black';
                
            }

            if(inputMode[i].classList == 'btn' || inputMode[i].type == 'text'){
                inputMode[i].style.color = 'white';
            }
        }
        else{
            modeChangeIcon.style.color = 'black';
            headerMode.style.backgroundColor = 'white';
            modeChangeIcon.style.backgroundColor = 'white';
            inputMode[i].style.backgroundColor = 'white';
            inputMode[i].style.boxShadow = ' 1px 1px 5px rgb(141, 141, 141)';
            calculatorBody.style.backgroundColor = 'white';
            for (let j = 0; j < divMode.length; j++) {
            
                divMode[j].style.backgroundColor = 'white';
                
            }

            if(inputMode[i].classList == 'btn' || inputMode[i].type == 'text'){
                inputMode[i].style.color = 'black';
            }
        }
    }

}