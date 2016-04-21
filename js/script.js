function checkBirthday(name){
  var currentDate = new Date();
  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getMonth();
  $('#header').html("<h3>Is it " + name + "'s Birthday?</h3>");
  if (currentDay == 21 && currentMonth == 3){
    $('#message').html("<h1 class='display-1'>It is! Happy Birthday " + name + "!</h1>");
    var music = document.createElement('audio');
    music.setAttribute('src', 'resources/september.mp3');
    music.loop = true;
    music.currentTime = 10;
    music.play();
    $('#container').addClass("bg-yes");
  }
  else{
    $('#message').html("Nope, it isn't " + name + "'s Birthday today.");
    $('#container').addClass("bg-no");
  }
}
