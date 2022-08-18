let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.btn');
let screenValue="";
for(let item of btn){
    item.addEventListener('click',(e)=>{
        btnText = e.target.innerText;
        if (btnText == '*'){
            screenValue +=   btnText  ;
           screen.value = screenValue;
        }
        else if (btnText == 'clear'){
            screenValue ="";
           screen.value = screenValue;
        }
        else if (btnText == '='){
            screen.value = eval(screenValue);

        }
        else{
            screenValue +=   btnText 
           screen.value = screenValue;

        }
        
        })
}
