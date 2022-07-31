
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }



let m="";
$("#submmit").click(function(){
   
    if(isEmail($("#Email").val())==false){
     m=m+"<p>enter a vaid email<p>"
     $("#error").html(m);
    }
    if($.isNumeric($("#phone").val())==false){
       m=m+"<p>enter a valid number</p>"
       $("#error").html(m);
    }
    if($("#password").val()!=$("#conform").val()){
        m=m+"<p>password doesnt match try again</p>"
        $("#error").html(m);
    }
    if(m==""){
        m=m+"<p>Succesfully registered</p>"
        $("#error").html(m);
        $("#error").css("color","green");
    }
    
    
});





