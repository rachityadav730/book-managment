var add=document.getElementById("add");
var retrive =document.getElementById("retrive");
var exit=document.getElementById("exit");

var arr =[];


add.addEventListener("click", function jodo(){
    
    var length =prompt("how many books you want yo add");
  for(var i=0;i<length;i++){

    var store=prompt("enter book name");
    arr[i]=store;
    
    
    
  }
}
);
retrive.addEventListener("click",function lao(){
    
    var length=length;
    for(var j=0;j<length;j++){
       
        console.log(arr);
    }
    document.getElementById("print").innerHTML=arr;

  });
exit.addEventListener("click",function niklo(){
    document.getElementById("print").innerHTML="Thanks for reaching to us" ;
  });














