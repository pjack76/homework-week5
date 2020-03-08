
var showDate = document.getElementById("currentDay");
var todayDate = moment().format("dddd, MMMM Do YYYY");
var showClock9am = document.getElementById("9am");
var showClock10am = document.getElementById("10am");


showDate.innerHTML = todayDate;
showClock9am.innerHTML = todayDate;
showClock10am.innerHTML = todayDate;

