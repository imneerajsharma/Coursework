function add(){
    let num1=document.getElementById("num1");
    let num2=document.getElementById("num2");
    let result=document.getElementById("result");
    let a=parseInt(num1.value);
    let b=parseInt(num2.value);
    if(a>b){
        result.value=a;
    }
    else{
        result.value=b;
    }
    
}