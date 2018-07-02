  function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  var rad = 150;

  var minutePosX = 1.15;
  var minutePosY = 2.1;

  var doomLine = 2;

  function draw() {
    background('#222');
    fill('#fff');
    noStroke();
    ellipse(rad, rad, 200, 200);
    fill('#000');
    ellipse(rad/2.25, rad, 15, 15);
    ellipse(rad/1.875, rad/1.375, 15, 15);
    ellipse(rad/1.375, rad/1.875, 15, 15);
    ellipse(rad, rad/2.25, 15, 15);
    stroke('#000');
    strokeWeight(5);
    line(rad, rad, rad, rad/1.75);
    stroke('#FF4136')
    line(rad, rad, rad/minutePosX, rad/minutePosY);

    fill('#FF4136');
    strokeWeight(10);
    line(windowWidth/2, 0, windowWidth/2, windowHeight/doomLine);
  }

  var minuteCounter = 2;
  $('span#minutes').html(minuteCounter);

  $('#plusButton').click(function() {
      minuteCounter++;
      $('span#minutes').html(minuteCounter);
      $('#minusButton').attr('disabled', false);

      switch (minuteCounter) {
        case 15:
          minutePosX = 2.25;
          minutePosY = 1;
          doomLine = 15;
          $('#plusButton').attr('disabled', true);
          break;
        case 14:
          minutePosX = 2.175;
          minutePosY = 1.075;
          doomLine = 14;
          break;
        case 13:
          minutePosX = 2.1;
          minutePosY = 1.15;
          doomLine = 13;
          break;
        case 12:
          minutePosX = 2.025;
          minutePosY = 1.225;
          doomLine = 12;
          break;
        case 11:
          minutePosX = 1.95;
          minutePosY = 1.3;
          doomLine = 11;
          break;
        case 10:
          minutePosX = 1.875;
          minutePosY = 1.375;
          doomLine = 10;
          break;
        case 9:
          minutePosX = 1.725;
          minutePosY = 1.5;
          doomLine = 9;
          break;
        case 8:
          minutePosX = 1.65;
          minutePosY = 1.575;
          doomLine = 8;
          break;
        case 7:
          minutePosX = 1.575;
          minutePosY = 1.65;
          doomLine = 7;
          break;
        case 6:
          minutePosX = 1.5;
          minutePosY = 1.725;
          doomLine = 6;
          break;
        case 5:
          minutePosX = 1.375;
          minutePosY = 1.875;
          doomLine = 5;
          break;
        case 4:
          minutePosX = 1.3;
          minutePosY = 1.95;
          doomLine = 4;
          break;
        case 3:
          minutePosX = 1.225;
          minutePosY = 2.025;
          doomLine = 3;
          break;
        case 2:
          minutePosX = 1.15;
          minutePosY = 2.1;
          doomLine = 2;
          break;
        case 1:
          minutePosX = 1.075;
          minutePosY = 2.175;
          doomLine = 1.5;
          break;
        case 0:
          minutePosX = 1;
          minutePosY = 2.25;
          doomLine = 1;
          break;
      }
  });

  $('#minusButton').click(function() {
      minuteCounter--;
      $('span#minutes').html(minuteCounter);
      $('#plusButton').attr('disabled', false);

      switch (minuteCounter) {
        case 15:
          minutePosX = 2.25;
          minutePosY = 1;
          doomLine = 15;
          break;
        case 14:
          minutePosX = 2.175;
          minutePosY = 1.075;
          doomLine = 14;
          break;
        case 13:
          minutePosX = 2.1;
          minutePosY = 1.15;
          doomLine = 13;
          break;
        case 12:
          minutePosX = 2.025;
          minutePosY = 1.225;
          doomLine = 12;
          break;
        case 11:
          minutePosX = 1.95;
          minutePosY = 1.3;
          doomLine = 11;
          break;
        case 10:
          minutePosX = 1.875;
          minutePosY = 1.375;
          doomLine = 10;
          break;
        case 9:
          minutePosX = 1.725;
          minutePosY = 1.5;
          doomLine = 9;
          break;
        case 8:
          minutePosX = 1.65;
          minutePosY = 1.575;
          doomLine = 8;
          break;
        case 7:
          minutePosX = 1.575;
          minutePosY = 1.65;
          doomLine = 7;
          break;
        case 6:
          minutePosX = 1.5;
          minutePosY = 1.725;
          doomLine = 6;
          break;
        case 5:
          minutePosX = 1.375;
          minutePosY = 1.875;
          doomLine = 5;
          break;
        case 4:
          minutePosX = 1.3;
          minutePosY = 1.95;
          doomLine = 4;
          break;
        case 3:
          minutePosX = 1.225;
          minutePosY = 2.025;
          doomLine = 3;
          break;
        case 2:
          minutePosX = 1.15;
          minutePosY = 2.1;
          doomLine = 2;
          break;
        case 1:
          minutePosX = 1.075;
          minutePosY = 2.175;
          doomLine = 1.5;
          break;
        case 0:
          minutePosX = 1;
          minutePosY = 2.25;
          doomLine = 1;
          $('#minusButton').attr('disabled', true);
          break;
      }
  });

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
