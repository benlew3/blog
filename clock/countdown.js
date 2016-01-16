function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);


  document.getElementById('txt').innerHTML =
      ("Airplane leaves in " + "<br>") + (" T \- minus: ") + ((h - 12) + ":" + (59 - m)  + ":" + (59 - s) + "<br>") + (" and counting");
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i}; //add zero in front of the number < 10
  return i;
}