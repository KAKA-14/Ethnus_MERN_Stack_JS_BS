function validate(){
    if(fn()&&ln()&&mail()&&pwd&&rpwd()&&age()&&phone()&&add()&&state()){
        return true;
    }
    else{
        document.getElementById("val").innerText="Enter the correct details"
        return false;
    }
}

function fn(){
    let name=document.getElementById("fn").value;
    if(name.length<3){
        document.getElementById("fnvalid").innerText="Poor";
        return false;
    }
    else if(name.length<5){
        document.getElementById("fnvalid").innerText="weak";
        return false;

    }
    else{
        document.getElementById("fnvalid").innerText="Strong";
        return true;
    }
}
function ln(){
    let name=document.getElementById("ln").value;
    if(name.length<3){
        document.getElementById("lnvalid").innerText="Poor";
        return false;
    }
    else if(name.length<5){
        document.getElementById("lnvalid").innerText="weak";
        return false;

    }
    else{
        document.getElementById("lnvalid").innerText="Strong";
        return true;
    }
}
function mail(){
    let name=document.getElementById("e").value;
    if(name.length<5 || !name.includes('@')||!name.includes('.')){
        document.getElementById("mailvalid").innerText="Poor";
        return false;

    }
    else if(name.length<15 || !name.includes('@')||!name.includes('.')){
        document.getElementById("mailvalid").innerText="weak";
        return false;

    }
    else{
        document.getElementById("mailvalid").innerText="Strong";
        return true;

    }
}
function pwd(){
    var password=document.getElementById("p").value;
    if(password.length<5){
        document.getElementById("pwdvalid").innerText="Poor";
        return false;

    }
    else if(password.length<15){
        document.getElementById("pwdvalid").innerText="weak";
        return false;

    }
    else{
        document.getElementById("pwdvalid").innerText="Strong";
        return true;
    }
}
function rpwd(){
    var rpassword=document.getElementById("rep").value;
    var password=document.getElementById("p").value;
    if(rpassword!=password){
        document.getElementById('rpwdvalid').innerHTML="Poor or Mismatch";
        return false;

    }
    else{
        document.getElementById('rpwdvalid').innerHTML="Strong";
        return true;
    }
}
function age(){
    var age=document.getElementById("a").value;
    if(age>100){
        document.getElementById('agevalid').innerHTML="Poor";
        return false;
    }
    else{
        document.getElementById('agevalid').innerHTML="Strong";
        return true;
    }
}
function phone(){
    var phone=document.getElementById("pn").value;
    if(phone.length!=10){
        document.getElementById('pvalid').innerHTML="Poor";
        return false;
    }
    else{
        document.getElementById('pvalid').innerHTML="Strong";
        return true;
    }
}
function add(){
    let add=document.getElementsByTagName("textarea")[0].value;
    if(add.length<10){
        document.getElementById("advalid").innerText="Poor";
        return false;

    }
    else if(add.length<20){
        document.getElementById("advalid").innerText="weak";
        return false;

    }
    else{
        document.getElementById("advalid").innerText="Strong";
        return true;
    }
}
function state(){
    let state=document.getElementById("s").value;
    if(state.length<3){
        document.getElementById("svalid").innerText="Poor";
        return false;

    }
    else{
        document.getElementById("svalid").innerText="Strong";
    
        return true;
    }
}