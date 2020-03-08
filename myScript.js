
var showDate = document.getElementById("currentDay");
var todayDate = moment().format("dddd, MMMM Do YYYY");
var showClock9am = document.getElementById("9am");
var showClock10am = document.getElementById("10am");


showDate.innerHTML = todayDate;
showClock9am.innerHTML = todayDate;
showClock10am.innerHTML = todayDate;

$(document).ready(function(){
  
    var eventArray = [];
   if (eventArray === null){
      eventArray = ""}
        else eventArray = JSON.parse(localStorage.getItem("occasion"));
    
    $("#saveButton1").click(function(event){
        event.preventDefault();
        var comment = $("#plannedEvent1").val();
        eventArray.push(comment);
        localStorage.setItem("occasion", JSON.stringify(eventArray));
        
    });
    
    $("#saveButton2").click(function(event){
        event.preventDefault();
        var comment = $("#plannedEvent2").val();
        eventArray.push(comment);
        localStorage.setItem("occasion", JSON.stringify(eventArray));
        
    });
});

console.log(localStorage.getItem("occasion"));