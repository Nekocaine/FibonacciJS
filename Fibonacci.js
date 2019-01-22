//declaration
let x1 = new Array();
let x2 = new Array();
let val = new Array();
//initialisation
x1[0] = 0;
x2[0] = 0;
val[0] = 1;
//while there's less than 1000 digit
while (val[999]== undefined){
    //initialisation at each step
    x1 = x2.slice(0);
    x2 = val.slice(0);
    val.forEach( (elem, index)=>{
        val[index] = 0;
    });
    //addition of two table of format [0-9(*1) 0-9(*10) 0-9(*100) 0-9(*1000) ...] (terms in parenthesis are implied)
    val.forEach( (elem, index)=> {
        val[index] += (isNaN(x1[index]) ? 0 : x1[index]) + (isNaN(x2[index]) ? 0 : x2[index]);
        if(val[index]>9) {
            val[index+1] = Math.floor(val[index]/10);
            val[index] = val[index] % 10;
        }
    });
}
//display
let result = "";
val.slice().reverse().forEach( (elem) => {
    result += elem.toString();
});
console.log(result);

