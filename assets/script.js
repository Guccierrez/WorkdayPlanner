let time = moment();
$("#currentDay").text(time.format('MMM Do YYYY, HH:mm:ss a'));

function setTime() {
    let timeInterval = setInterval(function() {
        $("#currentDay").text(moment().format('MMM Do YYYY, HH:mm:ss a'))

    },1000);
  }
  setTime();

$(".saveBtn").on("click", function(){
    let text= $(this).siblings('textarea').val();
    let time= $(this).siblings('div').text();
    localStorage.setItem(time,text);
    console.log(text);
})

$("#hour09").text(localStorage.getItem("09"))
$("#hour10").text(localStorage.getItem("10"))
$("#hour11").text(localStorage.getItem("11"))
$("#hour12").text(localStorage.getItem("12"))
$("#hour13").text(localStorage.getItem("13"))
$("#hour14").text(localStorage.getItem("14"))
$("#hour15").text(localStorage.getItem("15"))
$("#hour16").text(localStorage.getItem("16"))
$("#hour17").text(localStorage.getItem("17"))


let currentHour = moment().hour();
console.log(currentHour)



$(".longBlock").each(function() {
let timeBlockHour=parseInt($(this).attr("id"));
console.log(timeBlockHour);
if (timeBlockHour === currentHour) {
   // $("textarea").addclass(present);
   //console.log(this.children[1])
   $(this.children[1]).addClass("present");
}
else if (timeBlockHour > currentHour){
    $(this.children[1]).addClass("future");
}else{
    $(this.children[1]).addClass("past");
}
});

    
    // //   GIVEN I am using a daily planner to create a schedule
    // WHEN I open the planner
    // THEN the current day is displayed at the top of the calendar
    // WHEN I scroll down
    // THEN I am presented with time blocks for standard business hours
    // WHEN I view the time blocks for that day
    // THEN each time block is color-coded to indicate whether it is in the past, present, or future
    // WHEN I click into a time block
    // THEN I can enter an event
    // WHEN I click the save button for that time block
    // THEN the text for that event is saved in local storage
    // WHEN I refresh the page
    // THEN the saved events persist