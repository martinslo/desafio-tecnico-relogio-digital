const currentDate = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");
  let textHours = document.querySelector(".hours");
  let textMinutes = document.querySelector(".minutes");
  let textSeconds = document.querySelector(".seconds");
  let textAmPm = document.querySelector(".amPm");

  textAmPm.innerHTML = hours < 12 ? "AM" : "PM"; 
  hours = hours % 12;
  textHours.innerHTML = hours ? hours.toString().padStart(2, "0") : "12";
  textMinutes.innerHTML = minutes;
  textSeconds.innerHTML = seconds;
};

currentDate();
setInterval(currentDate, 1000);