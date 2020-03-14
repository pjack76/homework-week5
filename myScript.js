

var todayDate = moment().format("dddd, MMMM Do YYYY");
var showClock= $("#currentTime");
var showDate = $("#currentDay");


showDate.html(todayDate);

function liveTime() {
var clock = moment().format("HH:mm:ss");
showClock.html(clock);
};
setInterval(liveTime, 1000);
liveTime();





currentHour = moment().hour();

var blockTime = $(".time-block").data("time");
var timeElement = $(".time-block");
for(var i=0; i < timeElement.length; i++){
    var blockTime = parseInt(timeElement.eq(i).data("time"));
    if (blockTime < currentHour) {
        timeElement.eq(i).css("background-color", "gray");
    }
    else if (blockTime === currentHour) {
        timeElement.eq(i).css("background-color", "blue");
    }
    else timeElement.eq(i).css("background-color", "green");
    
};


   




$(document).ready(function(){
       // var storedArray = JSON.parse(localStorage.getItem("occasion"))
        var eventArray = [];
        var eventList = $(".plannedEvent");

    function checkInput(){
      if (localStorage.getItem("occasion") === null){
          eventArray = []}
       else eventArray = JSON.parse(localStorage.getItem("occasion"));};
       
        
        $(".saveButton").click(function(event){
            event.preventDefault();        
            checkInput();
            for (var i=0; i< eventList.length; i++){
                var activity = eventList.eq(i).val();
                
                if (activity === "") {
                    return } 
                else  eventArray.push(activity);
                    localStorage.setItem("occasion", JSON.stringify(eventArray))}})});
           
           // $("#plannedEvent1").val(storedArray.find(checkInput));    });
    
       // console.log($("#plannedEvent1").val(storedArray.find(checkInput())));
    

   // var storedArray = JSON.parse(localStorage.getItem("occasion"))
   // console.log(storedArray);
    
    //for (var i=0; i< storedArray.length; i++){
       // )};
    

    
    
    
     
    //console.log(storedArray.length);*/
      
    //console.log($("#plannedEvent1").val(storedArray.find(checkInput())));
    
   
    //$("#plannedEvent1").prop("disabled", true);

    
        
   


//localStorage.clear();*/