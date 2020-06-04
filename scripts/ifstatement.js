function timeclock() {
    var thetime = new Date().getHours();
    var greets;
    if (thetime < 9) {
      greets = "Good morning sir/madam!";
    } if (thetime < 12) {
      greets = "Good day sir/madam!";
    } else if (thetime < 18) {
      greets = "Good day sir/madam!";
    } else {
      greets ="Good evening sir/madam!";
    }
  document.getElementById("clock").innerHTML = greets;
  }