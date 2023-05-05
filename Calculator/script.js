let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

//It will create an array of the buttons
let arr = Array.from(buttons);

//This is we are doing as we are giving the conditions on what will happen if we press the particular button
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
         if(e.target.innerHTML == '='){
            //If equal button gets pressed, then evaluation will be done using the in-built javascript function
            string = eval(string);
            //The string will then be stored in the value of the input. 
            input.value = string;
         }
         //If AC Button is pressed, then string will become empty and then the value of input will be updated.
         else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
         }
        //If DEL button is pressed, then the last character of the string will be deleted using the substring function.
         else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
         }


         else{
            //i.e if the button pressed is other thean the = button, then everything will be stored into the string
            string += e.target.innerHTML;
            input.value = string;
         }
    })
})