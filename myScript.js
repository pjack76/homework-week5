
var showDate = document.getElementById("currentDay");
var todayDate = moment().format("dddd, MMMM Do YYYY");
var showClock= $(".clockDisplay");
var showClock10am = document.getElementById("10am");
var blockTime = $(".time-block").data("time");


//function liveTime() {
//var clock = moment().format("HH:mm:ss");
//showClock.innerHTML = clock;

//};
//setInterval(liveTime, 1000);
//liveTime();
//showClock10am.innerHTML = todayDate;
currentHour = moment().hour();
//console.log(blockTime);


showDate.innerHTML = todayDate;

var timeElement = $(".time-block");
for(var i=0; i < timeElement.length; i++){
    var blockTime = parseInt(timeElement.eq(i).data("time"));
    if (blockTime < currentHour) {
        timeElement.css("background-color", "gray");
    }
    else if (blockTime === currentHour) {
        timeElement.css("background-color", "blue");
    }
    else timeElement.css("background-color", "green");

};






$(document).ready(function(){
    var storedArray = JSON.parse(localStorage.getItem("occasion"))
    var eventArray = [];
   if (localStorage.getItem("occasion") === null){
       eventArray = []}
    else eventArray = JSON.parse(localStorage.getItem("occasion"));
     
    function checkInput(storedArray) {
        return activity
    
    };
    
    $("#saveButton1").click(function(event){
        event.preventDefault();        
        var activity = $("#plannedEvent1").val();
        if ($("#plannedEvent1").val() === "") {
            return } 
        else  eventArray.push(activity);
            localStorage.setItem("occasion", JSON.stringify(eventArray));
       
        $("#plannedEvent1").val(storedArray.find(checkInput));    });

    console.log($("#plannedEvent1").val(storedArray.find(checkInput())));
    
    $("#saveButton2").click(function(event){
        event.preventDefault();        
        var activity = $("#plannedEvent2").val();
        if ($("#plannedEvent2").val() === "") {
            return } 
        else  eventArray.push(activity);
            localStorage.setItem("occasion", JSON.stringify(eventArray));  
    });

    $("#saveButton3").click(function(event){
        event.preventDefault();        
        var activity = $("#plannedEvent3").val();
        if ($("#plannedEvent3").val() === "") {
            return } 
        else  eventArray.push(activity);
            localStorage.setItem("occasion", JSON.stringify(eventArray));  
    });

    $("#saveButton4").click(function(event){
        event.preventDefault();        
        var activity = $("#plannedEvent4").val();
        if ($("#plannedEvent4").val() === "") {
            return } 
        else  eventArray.push(activity);
            localStorage.setItem("occasion", JSON.stringify(eventArray));  
    });

    $("#saveButton5").click(function(event){
        event.preventDefault();        
        var activity = $("#plannedEvent5").val();
        if ($("#plannedEvent5").val() === "") {
            return } 
        else  eventArray.push(activity);
            localStorage.setItem("occasion", JSON.stringify(eventArray));  
    });

    $("#saveButton6").click(function(event){
        event.preventDefault();        
        var activity = $("#plannedEvent6").val();
        if ($("#plannedEvent6").val() === "") {
            return } 
        else  eventArray.push(activity);
            localStorage.setItem("occasion", JSON.stringify(eventArray));  
    });

    $("#saveButton7").click(function(event){
        event.preventDefault();        
        var activity = $("#plannedEvent7").val();
        if ($("#plannedEvent7").val() === "") {
            return } 
        else  eventArray.push(activity);
            localStorage.setItem("occasion", JSON.stringify(eventArray));  
    });

    $("#saveButton8").click(function(event){
        event.preventDefault();        
        var activity = $("#plannedEvent8").val();
        if ($("#plannedEvent8").val() === "") {
            return } 
        else  eventArray.push(activity);
            localStorage.setItem("occasion", JSON.stringify(eventArray));  
    });

    $("#saveButton9").click(function(event){
        event.preventDefault();        
        var activity = $("#plannedEvent9").val();
        if ($("#plannedEvent9").val() === "") {
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