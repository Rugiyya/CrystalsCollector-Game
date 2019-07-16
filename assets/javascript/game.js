var randomNumber = Math.floor(Math.random() * (120-19+1)+19);
//console.log(randomNumber);
$("#randomnumber").text(randomNumber)

var totalScore = 0;
var wins = 0;
var losses = 0;

//for (var i = 0; i < 4; i++){
    var numberOptions=Math.floor(Math.random() * (12-1+1)+1);
    var numberOptions=Math.floor(Math.random() * (12-1+1)+1);

    var numberOptions=Math.floor(Math.random() * (12-1+1)+1);
    var numberOptions=Math.floor(Math.random() * (12-1+1)+1);

    console.log(numberOptions);
    var imageCrystal = $("<img>");
    imageCrystal.attr("data-crystalvalue",numberOptions);  

 //   console.log(imageCrystal)
//}
$(".one").append(numberOptions);
$(".two").append(numberOptions);
$(".three").append(numberOptions);
$(".four").append(numberOptions);

$(".crystal-image").on("click", function() {
 totalScore += numberOptions;
   $("#score").text(totalScore);
   if(totalScore === randomNumber){
   wins++;
   $("#wins").text(wins);
   }
   else if (totalScore >= randomNumber){
   losses++;
   $("#losses").text(losses)
   }

  });
 