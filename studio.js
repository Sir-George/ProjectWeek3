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

$(function () {
    let desp = $('#desp');
    let devp = $('#devp');
    let prop = $('#prop');
    let destext = $('#destxt');
    let devtext = $('#devtext');
    let protext = $('#protext');

    $(desp).hide();
    $(devp).hide();
    $(prop).hide();

    //Show paragraph content
    $('.des').on('click', function () {
        $('.des').slideUp('slow');
        $(desp).show(500);
        $(destext).animate({fontWeight:'bolder',fontSize:'30px'})

    });
    $('.dev').on('click', function () {
        $('.dev').slideUp('slow');
        $(devp).show(500);
        $(devtext).animate({fontWeight:'bolder',fontSize:'30px'})
    });
    $('.pro').on('click', function () {
        $('.pro').slideUp('slow');
        $(prop).show(500);
        $(protext).animate({fontWeight:'bolder',fontSize:'30px'})
    });

    //Hide paragraph content
    $(desp, destext).on('click', function () {
        $('.des').slideDown();
        $(desp).hide(500);
        $(destext).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(devp, devtext).on('click', function () {
        $('.dev').slideDown();
        $(devp).hide(500);
        $(devtext).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(prop, protext).on('click', function () {
        $('.pro').slideDown();
        $(prop).hide(500);
        $(protext).animate({fontWeight:'normal',fontSize:'16px'})
    })

    $('.portimg').hover(function(){
        $('.porttext',this).slideToggle('slow');
     }, function(){
        $('.porttext',this).slideToggle('slow');
     });

});
   