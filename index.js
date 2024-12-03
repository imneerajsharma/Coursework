function add(){
    let num1=document.getElementById("num1");
    let num2=document.getElementById("num2");
    let result=document.getElementById("result");
    // let a=num1.value;
    // let b=num2.value;
    // let c= a+b;
    // result.value=c;
    result.value=parseFloat(num1.value) + parseFloat(num2.value);
}