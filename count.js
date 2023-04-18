// Set target date  (Cél dátum beállítása) 
const countDownDate = new Date("2023-04-20T14:45:00Z").getTime();

// Start a timer that updates the time every second (Időzítő indítása, amely minden másodpercben frissíti az időt)
const x = setInterval(function() {

  //Request current time (Jelenlegi idő lekérése)
  const now = new Date().getTime();

  //Calculating the elapsed time (Az eltelt idő kiszámítása)
  const distance = countDownDate - now;

  //Calculation of elapsed time in hours, minutes and seconds (Az eltelt idő számítása órákban, percekben és másodpercekben)
  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Show the result in the div (Az eredmény megjelenítése a HTML div-ben)
  document.getElementById("countdown").innerHTML =  hours + " óra "
  + minutes + " perc " + seconds + " másodperc ";

  //If the time is up, stop the countdown and display the message (Ha az idő lejárt, akkor a visszaszámláló leállítása és az üzenet megjelenítése)
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "  Go for Launch";
  }
}, 1000);
