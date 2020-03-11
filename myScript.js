
var showDate = document.getElementById("currentDay");
var todayDate = moment().format("dddd, MMMM Do YYYY");
var showClock= $(".clockDisplay");
var showClock10am = document.getElementById("10am");
var blockTime = parseInt($(".xyz").attr("value"));


function liveTime() {
var clock = moment().format("HH:mm:ss");
showClock.innerHTML = clock;

};
setInterval(liveTime, 1000);
liveTime();
showClock10am.innerHTML = todayDate;
currentHour = moment().hour();
//console.log(blockTime);
//console.log(currentHour);

showDate.innerHTML = todayDate;

$.each($(".time-block"), function(i){
    if (blockTime < currentHour){
        $(".time-block").css("background-color", "gray");
    }
    else if (blockTime === currentHour) {
        $(".time-block").css("background-color", "yellow");
    }
    else $(".time-block").css("background-color", "green");
    
});




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