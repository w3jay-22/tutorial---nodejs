const readline = require('readline'); //importing inbuilt readline
const { stdin, stdout } = require('process');
const rl = readline.createInterface({input:process.stdin,
                                    output:process.stdout});//read users input

let num1 = Math.floor(Math.random()*10+1);  
let num2 = Math.floor(Math.random()*10+1); 
let answer = num1+num2;

rl.question(`what is ${num1} + ${num2} \n`, 
(input)=>{
    if(input.trim()==answer){ //trim to extra space
        console.log(answer);
        rl.close();
    }else{
        rl.setPrompt(`${input} is wrong try again \n`);
         rl.prompt();
             rl.on('line',(input)=>{ // this listen "line" work like a loop,because we set newLine in else 
            if(input.trim()==answer){
                rl.close();
            }else{
                rl.setPrompt(`${num1} + ${num2} is incorrect..Try again \n`);
                rl.prompt();
            }
        })        
    }
});
rl.on('close',()=>{
    console.log('Correct');
    }); // this will listen for close()

                                