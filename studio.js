function getInputVals()
{
    
    const name= document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    


//Check if all input fields have been entered
if (name== "") {
    alert("The name field cannot be empty");
    return false;
}
if (email=="") {
    alert("The email field cannot be empty");
    return false;
}
if (message== "") {
    alert("The message field cannot be empty");
    return false;
}
var response= "Thankyou for submitting your Response!"


console.log(response)
// Display the Response
// document.getElementById("response").innerHTML= response
alert(response)
}
