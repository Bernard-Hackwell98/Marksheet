import * as promptsync from 'prompt-sync';


const pt = promptsync();

const Eng: number = parseInt(pt('what are your marks in English: '));
const Math: number = parseInt(pt('what are your marks in Math: '));
const Phy: number = parseInt(pt('what are your marks in Physics: '));
const Chem: number = parseInt(pt('what are your marks in Chemistry: '));
const Comp: number = parseInt(pt('what are your marks in Computer: '));

if(Eng > 100 || Math> 100 || Phy> 100 || Chem> 100 ||Comp > 100){
    console.log("Invalid Number");
    process.exit();
}

const Sum = Eng+Math+Phy+Chem+Comp;

const Per = (Sum/500)*100;

console.log(Per)

if(Per <= 100 && Per > 79){
    console.log("A+");
}
else if(Per <= 79 && Per > 69){
    console.log("A");
}
else if(Per <= 69 && Per > 59){
    console.log("B");
}
else if(Per <= 59 && Per > 40){
    console.log("C");
}
else{
    console.log("You Failed");
}