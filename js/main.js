 var validateForm=function(){
   console.log("validation");

   var name = document.forms["userInfo"]["name"].value;
   var surname = document.forms["userInfo"]["surname"].value;
   var email = document.forms["userInfo"]["email"].value;

   if(!checkName(name)||!checkName(surname)||!checkEmail(email)){
     showError();
   }
   else {
     showSuccess();
   }

   return false;
 }


 function showError(){
     console.log("fail");
     var responseBox=document.getElementById("response-box")
     responseBox.style.background="#aa0000";
     responseBox.innerHTML="c'è stato un'errore con la compilazione del form, prego ricontrolla i campi";
 }

 function showSuccess(){
   console.log("success");
   var responseBox=document.getElementById("response-box")
   responseBox.style.background="#00aa00";
   responseBox.innerHTML="grazie per averci lasciato i tuoi dati";
 }

function checkName(str){
  nameRegExp=/^[a-zA-Z ]*$/;
  if(nameRegExp.test(str) == true&&str!="") {
    return true;
  }else{
    return false;
  }
}

function checkEmail(str){
  emailRegExp=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if(emailRegExp.test(str) == true) {
    return true;
  }else{
    return false;
  }
}
