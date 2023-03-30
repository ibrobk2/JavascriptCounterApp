 let count = 0;

document.getElementById("decrease").onclick = function(){
   // count = count - 1;
    count -= 1;
    document.querySelector("h2").innerHTML = count;
    styles()
}

document.getElementById("reset").onclick = function(){
    
     count = 0;
     document.querySelector("h2").innerHTML = count;
     styles()
 }

 document.getElementById("increase").onclick = function(){
    // count = count + 1;
     count += 1;
     document.querySelector("h2").innerHTML = count;
     styles()
 }



 function styles(){
    if(count>0){
        document.querySelector("h2").style = "color:green";
       
     }
     else  if(count<0){
        document.querySelector("h2").style = "color:red";
       
     }
     else{
        document.querySelector("h2").style = "color:yellow";
     }
 }
 