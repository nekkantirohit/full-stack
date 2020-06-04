function validate(){
    if(document.getElementById("name").value==""){
    window.alert( "Please provide your Name!" );
    document.getElementById("name").focus;
    return false;
    }
    if( document.getElementById("rollno").value == "" ||
           isNaN( document.getElementById("rollno").value) ||
           document.getElementById("rollno").value.length != 10 )
   {
     window.alert( "Please provide a rollno No in the format 123." );
     document.getElementById("rollno").focus ;
     return false;
   }
 var email=document.getElementById("emailId").value;
 atpos=indexOf('@');
 dotpos=indexOf('.')
 if(email==""||atpos<1||dotpos-atpos<2){
     window.alert("enter correct email.id");
     document.getElementById("emailId").focus;
     return false;
 }
 if(document.getElementById("personal address").value==""){
     window.alert("enter correct address");
     document.getElementById("personal address").focus;
     return false;
 }
 if(document.getElementById("department").value==-1){
     window.alert("please choose your department");
     return false;
 }
 if(document.getElementById("joining year").value==-1){
    window.alert("please choose your joining year");
    return false;
 }
 if(document.getElementById("passing year").value==-1){
    window.alert("please choose your passing year");
    return false;
 }
 if(document.getElementById("dob").value==""){
    window.alert("enter your dob");
    document.getElementById("dob").focus;
    return false;
}
if( document.getElementById("mobileno").value == "" ||
isNaN( document.getElementById("mobileno").value) ||
document.getElementById("mobileno").value.length != 10 )
{
window.alert( "Please provide a Mobile No in the format 123." );
document.getElementById("mobileno").focus ;
return false;
}
}