function Calculate() {
  var total = 0;
  var onetoseven = 0;
  var eighttoking = 0;
  var jokersandace = 0;
  var dirty = 0;
  var clean = 0;
  var redthrees = 0;


  
  var onetoseven = document.getElementById("1-7").value;
  var eighttoking = document.getElementById("8-king").value;
  var jokersandace = document.getElementById("JaA").value;
  var dirty = document.getElementById("Clean").value;
  var clean = document.getElementById("Dirty").value;
  var redthrees = document.getElementById("red_threes").value;



  
  total = total+onetoseven*5;
  total = total+eighttoking*10;
  total = total+jokersandace*20;
  total = total+dirty*300;
  total = total+clean*500;
  total = total-redthrees*300;

  document.getElementById("resultTab").innerHTML = (total);

  if (total<0){
    document.getElementById("Sentiment").innerHTML = ("Don't worry, you'll do better next time");
  }
  if (total>=0){
    document.getElementById("Sentiment").innerHTML = (" ");
  }
  

  

  
  
  console.log(total);
}
