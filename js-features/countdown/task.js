let count = 1;
let started = false;
function start() {
  const startTime = new Date(); 
  const stopTime = startTime.setMinutes(startTime.getMinutes() + count); 
  let countdown = setInterval(function() {
    const nowDate = new Date().getTime();
     const remainder = stopTime - nowDate; 
       const sec = Math.floor( (remainder % (1000 * 60)) / 1000 );
     document.getElementById("timer").innerHTML =  sec;
    if (remainder <= 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML ="0";
      alert("Вы победили в конкурсе!");
      start()
     }
  }, 1000);
  started = true;
}
start()