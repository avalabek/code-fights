 function pad(val) {
    valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

  totalSeconds = 0;
  function setTime(minutesLabel, secondsLabel) {
    totalSeconds++;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }

  function set_timer() {
    minutesLabel = document.getElementById("minutes");
    secondsLabel = document.getElementById("seconds");
    my_int = setInterval(function () { setTime(minutesLabel, secondsLabel) }, 1000);
  }

  function stop_timer() {
    clearInterval(my_int);
  }