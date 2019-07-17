var randomNumber = Math.floor(Math.random() * (120-19+1)+19);
//console.log(randomNumber);
$("#randomnumber").text(randomNumber);

var totalScore = 0;
var wins = 0;
var losses = 0;

var imageArr = [$(".one"),$(".two"),$(".three"),$(".four")];
for (var i = 0; i < 4; i++){
    var numberOptions=Math.floor(Math.random() * (12-1+1)+1);
     console.log(numberOptions);
    
     imageArr[i].attr("data-crystalvalue",numberOptions);  
     console.log(imageArr[i]);
}
 function reset(){
     totalScore=0 ;
     randomNumber = Math.floor(Math.random() * (120-19+1)+19);
     for (var i = 0; i < 4; i++){
        var numberOptions=Math.floor(Math.random() * (12-1+1)+1);
        imageArr[i].attr("data-crystalvalue",numberOptions);  
    }
     $("#randomnumber").text(randomNumber)
     $("#score").text(totalScore);
     $("#reset").remove();
}
$(".crystal-image").on("click", function() {
    var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);
    totalScore = totalScore + crystalValue;
    $("#score").text(totalScore);
    if(totalScore === randomNumber){
    wins++;
    $("#wins").text(wins);
    $(".container5").append("<button id='reset'>Reset</button>");
    $("#reset").on("click",reset);
    }
    else if (totalScore >= randomNumber){
    losses++;
    $("#losses").text(losses);
    $(".container5").append("<button id='reset'>Reset</button>");
    $("#reset").on("click",reset);
    }
    
  });
