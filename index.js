
  var random1 = Math.random();
  random1 = Math.floor(random1*6+1);
  console.log(random1);

  var random2 = Math.random();
  random2 = Math.floor(random2*6+1);
  console.log(random2);


  document.querySelector(".dice1").setAttribute("src", "images/dice"+random1+".png");
  document.querySelector(".dice2").setAttribute("src", "images/dice"+random2+".png");

  if (random1 > random2) document.querySelector("h1").innerText = "Player 1 Win๐";
  else if (random1 === random2) document.querySelector("h1").innerText = "Draw!(โ'โก'โ)";
  else document.querySelector("h1").innerText = "Player 2 Win๐";
