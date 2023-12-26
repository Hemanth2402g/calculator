var ans=0;var s="";
add=()=>{
    var a =parseInt(document.getElementById("n1").value);
    document.getElementById("n1").value = null;
    ans=a+ans;
    document.getElementById("result").textContent=(ans);
    if(s.length==0)
       s=s+a;
    else
       s=s+("+"+a);
}
sub=()=>{
    var a =parseInt(document.getElementById("n1").value);
    document.getElementById("n1").value = null;
    ans=ans-a
    document.getElementById("result").textContent=(ans);
    if(s.length==0)
       s=s+a;
    else
       s=s+("-"+a);

}
mul=()=>{
    var a =parseInt(document.getElementById("n1").value);
    document.getElementById("n1").value = null;
    ans=ans*a
    document.getElementById("result").textContent=(ans);
    if(s.length==0)
       s=s+a;
    else
       s=s+("*"+a);
}
div=()=>{
    var a =parseInt(document.getElementById("n1").value);
    document.getElementById("n1").value = null;
    ans=ans/a
    document.getElementById("result").textContent=(ans);
    if(s.length==0)
       s=s+a;
    else
       s=s+("/"+a);
}
val=()=>{
   document.getElementById("val").textContent=s;
}
