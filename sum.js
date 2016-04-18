var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false)  


function myfirst(){

    
    
var userinput1 =parseInt( document.getElementById("input1").value);
var userinput2 =parseInt (document.getElementById("input2").value);  
var answer = userinput1 + userinput2
    

document.getElementById("demo").innerHTML = answer;
}

