const display=document.getElementById('display');

function appendItem(item){
display.value+=item;
}

function clearDisplay(){
display.value=""
}

function calculate(){
    try{
display.value=eval(display.value)
    }
    catch(error){
        display.value=" Syntax error";
        //setInterval(clearDisplay(), 1000);


    } }
   document.querySelector('.js-calculate')
  .addEventListener('click', calculate);
 
