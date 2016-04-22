function checkBirthday(name, month, day, force){ //name is a string, month is a number, day is a number
  var currentDate = new Date();
  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getMonth();
  $('#header').html("<h3>Is it " + name + "'s Birthday?</h3>");
  if (force === true){
    $('#message').html("<h1 class='display-1'>It is! Happy Birthday " + name + "!</h1>");
    var music = document.createElement('audio');
    music.setAttribute('src', 'resources/september.mp3');
    music.loop = true;
    music.currentTime = 10;
    music.play();
    $('#container').addClass("bg-yes");
  }
  else if (currentDay == day && currentMonth == month-1){
    $('#message').html("<h1 class='display-1'>It is! Happy Birthday " + name + "!</h1>");
    var music = document.createElement('audio');
    music.setAttribute('src', 'resources/september.mp3');
    music.loop = true;
    music.currentTime = 10;
    music.play();
    $('#container').addClass("bg-yes");
  }
  else{
    $('#message').html("Nope, it isn't " + name + "'s Birthday today. </br><h1 class='display-3'>Wait until " + month + "/" + day + " to celebrate it! </br> <h4><a href='birthday.html'>But what if it was?</a></h4>");
    $('#container').addClass("bg-no");
  }
}
