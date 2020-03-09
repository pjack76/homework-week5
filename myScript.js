
var showDate = document.getElementById("currentDay");
var todayDate = moment().format("dddd, MMMM Do YYYY");
var showClock9am = document.getElementById("9am");
var showClock10am = document.getElementById("10am");

function liveTime() {
var clock = moment().format("HH:mm:ss");
showClock9am.innerHTML = clock;

};
setInterval(liveTime, 1000);
liveTime();


showDate.innerHTML = todayDate;

showClock10am.innerHTML = todayDate;

$(document).ready(function(){
  
    var eventArray = [];
   if (localStorage.getItem("occasion") === null){
       eventArray = []}
    else eventArray = JSON.parse(localStorage.getItem("occasion"));
     
    
    $("#saveButton1").click(function(event){
        event.preventDefault();        
        var activity = $("#plannedEvent1").val();
        if ($("#plannedEvent1").val() === "") {
            return } 
        else  eventArray.push(activity);
            localStorage.setItem("occasion", JSON.stringify(eventArray));
        
    });
    //$("#plannedEvent1").prop("disabled", true);

    $("#saveButton2").click(function(event){
        event.preventDefault();
        var activity = $("#plannedEvent2").val();
        eventArray.push(activity);
        localStorage.setItem("occasion", JSON.stringify(eventArray));
        
    });
});

//localStorage.clear();