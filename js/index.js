// Your code goes here
const logoheading = document.querySelector('.logo-heading');
const headerImg = document.querySelector('.intro img');
const h2 = document.querySelector('h2');
const buttElementZero = document.querySelectorAll(".btn");
const buttElementOne = document.querySelectorAll(".btn");
const buttElementTwo = document.querySelectorAll(".btn");
const DestinationP = document.querySelector(".content-destination p");
const h4 = document.querySelector('h4');

// LOGO CHAGES COLOR TO RED FOR 2 SECONDS AND THEN GOES BACK
logoheading.addEventListener('mouseover', function(event){
    event.target.style.color = "red";
   
    setTimeout(function(){
        event.target.style.color = "black";
    },2000);

}, false);

// img visible and disapear when mouse goes over
headerImg.addEventListener('mouseover', function(event) 
{
    event.target.style.visibility = "hidden";

});
headerImg.addEventListener('mouseout', function(event)
{
   event.target.style.visibility = "visible";

});


// the escapse key if pushed on document will change background to orange
function esckey(event){
    
    if (event.key === 'Escape'){
        event.target.style.backgroundColor ="orange" ;
    }
}
 document.addEventListener("keydown",esckey);

// h2 text change  when mouse is near
 h2.addEventListener('mouseover', event =>
{
    
    h2.textContent = "HELLO ,IS IT ME YOUR LOOKING FOR!";    
    
});
h2.addEventListener('mouseout', event =>
{
    
    h2.textContent = "Welcome To Fun Bus!!";
        
});
//button element 0 changes color


buttElementZero[0].addEventListener("mouseover", event =>
{
    buttElementZero[0].style.backgroundColor = "green";
    
});

buttElementZero[0].addEventListener("mouseout", event =>
{
    buttElementZero[0].style.backgroundColor = "white";
    
});

//button element 1 changes color


buttElementOne[1].addEventListener("mouseover", event =>
{
    buttElementOne[1].style.backgroundColor = "blue";
    
});

buttElementOne[1].addEventListener("mouseout", event =>
{
    buttElementOne[1].style.backgroundColor = "white";
    
});
//button element 2 changes color


buttElementTwo[2].addEventListener("mouseover", event =>
{
    buttElementTwo[2].style.backgroundColor = "purple";
    
});

buttElementTwo[2].addEventListener("mouseout", event =>
{
    buttElementTwo[2].style.backgroundColor = "white";
    
});

// destination img background change changeing
DestinationP.addEventListener("mouseover", () =>
{
    DestinationP.style.backgroundColor = "yellow"; 
});

DestinationP.addEventListener("mouseout", () =>
{
    DestinationP.style.backgroundColor = "white"; 
});

//  h4 will change text
// h4 text change  when mouse is near
h4.addEventListener('mouseover', event =>
{
    
    h4.textContent = "travel to the moon";    
    h4.style.backgroundColor = "blue";
});
h4.addEventListener('mouseout', event =>
{
    
    h4.textContent = "fun in the sun!";
    h4.style.backgroundColor = "white";   
});