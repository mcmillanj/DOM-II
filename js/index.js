// Your code goes here
const logoheading = document.querySelector('.logo-heading');
const headerImg = document.querySelector('.intro img');

// LOGO CHAGES COLOR TO RED FOR 2 SECONDS AND THEN GOES BACK
logoheading.addEventListener('mouseover', function(event){
    event.target.style.color = "red";
   
    setTimeout(function(){
        event.target.style.color = "black";
    },2000);

}, false);

// IMG VISIBLE AND NOT
headerImg.addEventListener('mouseover', function(event) 
{
    event.target.style.visibility = "hidden";

});
headerImg.addEventListener('mouseout', function(event)
{
   event.target.style.visibility = "visible";

});
