var schedule = require('node-schedule');
var PythonShell = require('python-shell');

var svetlo = false;

exports.home = (req, res) => {
  res.render('index', {
    title: "Automation",
  });
};
exports.bonsai = (req, res) => {
  var myPythonScriptPath = 'emes.py';

  var pyshell = new PythonShell(myPythonScriptPath);

  pyshell.on('message', function(message) {
    res.render('bonsai', {
      svetlo: svetlo,
      message: message,
      title: "Bonsai",
    });
    pyshell.end(function(err) {
      if (err) {
        throw err;
      };
    });
  });
};
exports.on = (req, res) => {
  svetlo = true;
  var j = schedule.scheduleJob('20 00* * *', function() {
    PythonShell.run('off.py', function(err) {
      if (err) throw err;
    });
  });
  PythonShell.run('on.py', function(err) {
    if (err) throw err;
    res.redirect('/');
  });
}
exports.off = (req, res) => {
  svetlo = false;
  PythonShell.run('off.py', function(err) {
    if (err) throw err;
    res.redirect('/');
  });
}
