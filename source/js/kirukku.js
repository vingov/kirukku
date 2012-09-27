const LINE_BREAK = "\n";
const WIDTH = 400;
const HEIGHT = 300;

var kx = WIDTH / 2;
var ky = HEIGHT / 2;
var kangle = 90;

var kcanvas;
var kcontext;

var lineno;

function kirukku_init() {
  kcanvas = document.getElementById("kcanvas");

  kcanvas.width = WIDTH;
  kcanvas.height = HEIGHT;

  kcontext = kcanvas.getContext('2d');
  kcontext.clearRect(0, 0, WIDTH, HEIGHT);
  kcontext.strokeStyle = "rgb(0, 0, 0)";
  kcontext.fillStyle = "rgb(0, 0, 0)";
}

function kparser(code) {
  // take one line at a time
  var lines = code.split(LINE_BREAK);
  lineno = 0;
  for (var i in lines) {
    lineno++;
    var line = lines[i];
    // tokenize the line
    var tokens = line.match(/[\S]+/g);
    if (tokens == null) 
      continue;
    var command = tokens.shift();
    switch(command) {
      case 'reset':
        reset_execute(tokens);
        break;
      case 'forward':
        forward_execute(tokens);
        break;
      case 'turnright':
        turnright_execute(tokens);
        break;
      case 'turnleft':
        turnleft_execute(tokens);
        break;
      default:
        throw new Error("Unknown command");
        break;
    }
  }
}

function forward_validate(tokens) {
  if ((tokens == null) || (tokens.length == 0)) {
    throw new Error("Too few parameters");
  }
  else if (tokens.length > 1) {
    throw new Error("Too many parameters");
  }
  
  var dist = new Number(tokens[0]);
  if (dist.NaN) {
    throw new Error("Parameter 1 is not a valid number");
  }
  else if (!isInt(dist)) {
    throw new Error("Parameter 1 is not a valid integer");
  }
}

function forward_execute(tokens) {
  var knewx = kx;
  var knewy = ky;

  forward_validate(tokens);

  dist = new Number(tokens[0]);

  knewx = kx + dist * Math.cos(kangle * Math.PI / 180);
  knewy = ky + dist * Math.sin((kangle + 180) * Math.PI / 180);

  knewx = Math.round(knewx);
  knewy = Math.round(knewy);

  rangeCheck(knewx, knewy);

  kcontext.beginPath();
  kcontext.moveTo(kx, ky);
  kcontext.lineTo(knewx, knewy);
  kcontext.stroke();

  kx = knewx;
  ky = knewy;
}

function turnright_validate(tokens) {
  if ((tokens == null) || (tokens.length == 0)) {
    throw new Error("Too few parameters");
  }
  else if (tokens.length > 1) {
    throw new Error("Too many parameters");
  }
  
  var angle = new Number(tokens[0]);
  if (angle.NaN) {
    throw new Error("Parameter 1 is not a valid number");
  }
}

function turnright_execute(tokens) {
  var knewx = kx;
  var knewy = ky;

  turnright_validate(tokens);

  var angle = new Number(tokens[0]);

  kangle -= angle;
  if (kangle < 0) {
    kangle += 360;  // -10 is the same as +350
  }
}

function turnleft_validate(tokens) {
  if ((tokens == null) || (tokens.length == 0)) {
    throw new Error("Too few parameters");
  }
  else if (tokens.length > 1) {
    throw new Error("Too many parameters");
  }
  
  var angle = new Number(tokens[0]);
  if (angle.NaN) {
    throw new Error("Parameter 1 is not a valid number");
  }
}

function turnleft_execute(tokens) {
  var knewx = kx;
  var knewy = ky;

  turnleft_validate(tokens);

  var angle = new Number(tokens[0]);

  kangle += angle;
  if (kangle > 0) {
    kangle -= 360;  // 370 is the same as 10
  }
}

function reset_validate(tokens) {
  if (tokens.length > 0) {
    throw new Error("Too many parameters");
  }
}

function reset_execute(tokens) {
  reset_validate(tokens);
  kx = WIDTH / 2;
  ky = HEIGHT / 2;
  kangle = 90;

  kcontext.clearRect(0, 0, WIDTH, HEIGHT);
}

function isInt(n) {
 return n % 1 === 0;
}

function rangeCheck(x, y) {
  if ((x < 0) || (x > WIDTH)) {
    throw new Error("Turtle escaped from the canvas");
  }
  if ((y < 0) || (y > HEIGHT)) {
    throw new Error("Turtle escaped from the canvas");
  }
}

