function init_ide() {
  document.title = labels[0];
  
  var run = document.getElementById("run");
  run.value = labels[1];

  var sourcelabel = document.getElementById("sourcelabel");
  sourcelabel.innerHTML = labels[2];

  var canvaslabel = document.getElementById("sourcelabel");
  canvaslabel.innerHTML = labels[2];

  kirukku_init();
}

function run() {
  var kcode = document.getElementById("kcode");
  var code = kcode.value;

  var run = document.getElementById("run");
  run.disabled = true;

  try {
    kparser(code);
  }
  catch (e) {
    alert("[Line " + lineno + "] " + e.name + "\n" + e.message);
  }

  run.disabled = false;
}

