function calculate(){
 var x=document.getElementById("portionswasted").value;
 var fed= x / 4 ;
console.log(fed);
document.getElementById("foodforpeople").innerHTML= "Number of people that could have eaten well ,IF you had not decided to waste food: "+fed;


}