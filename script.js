var hours =  ["9", "10", "11", "12", "13", "14", "15", "16", "17",]

var date = moment().format("MMMM Do YYYY");
$("#currentDay").text(date);

if ((new Date().getHours()) === 9) {
    $("#timeBlock1").attr("class","present");
} else if ((new Date().getHours()) < 9) {
    $("#timeBlock1").attr("class","future");
} else {
    $("#timeBlock1").attr("class","past");
}

if ((new Date().getHours()) === 10) {
    $("#timeBlock2").attr("class","present");
} else if ((new Date().getHours()) < 10) {
    $("#timeBlock2").attr("class","future");
} else {
    $("#timeBlock2").attr("class","past");
}

if ((new Date().getHours()) === 11) {
    $("#timeBlock3").attr("class","present");
} else if ((new Date().getHours()) < 11) {
    $("#timeBlock3").attr("class","future");
} else {
    $("#timeBlock3").attr("class","past");
}

if ((new Date().getHours()) === 12) {
    $("#timeBlock4").attr("class","present");
} else if ((new Date().getHours()) < 12) {
    $("#timeBlock4").attr("class","future");
} else {
    $("#timeBlock4").attr("class","past");
}

if ((new Date().getHours()) === 13) {
    $("#timeBlock5").attr("class","present");
} else if ((new Date().getHours()) < 13) {
    $("#timeBlock5").attr("class","future");
} else {
    $("#timeBlock5").attr("class","past");
}

if ((new Date().getHours()) === 14) {
    $("#timeBlock6").attr("class","present");
} else if ((new Date().getHours()) < 14) {
    $("#timeBlock6").attr("class","future");
} else {
    $("#timeBlock6").attr("class","past");
}

if ((new Date().getHours()) === 15) {
    $("#timeBlock7").attr("class","present");
} else if ((new Date().getHours()) < 15) {
    $("#timeBlock7").attr("class","future");
} else {
    $("#timeBlock7").attr("class","past");
}

if ((new Date().getHours()) === 16) {
    $("#timeBlock8").attr("class","present");
} else if ((new Date().getHours()) < 16) {
    $("#timeBlock8").attr("class","future");
} else {
    $("#timeBlock8").attr("class","past");
}

if ((new Date().getHours()) === 17) {
    $("#timeBlock9").attr("class","present");
} else if ((new Date().getHours()) < 17) {
    $("#timeBlock9").attr("class","future");
} else {
    $("#timeBlock9").attr("class","past");
}

  var saveBtn = $(".saveBtn");

  var input9 = $(".input-box1");
  var input10 = $(".input-box2");
  var input11 = $(".input-box3");
  var input12 = $(".input-box4");
  var input1 = $(".input-box5");
  var input2 = $(".input-box6");
  var input3 = $(".input-box7");
  var input4 = $(".input-box8");
  var input5 = $(".input-box9");
 
saveBtn.click(function(event) {
	saveSchedule();
})

function saveSchedule(){
    event.preventDefault();

    var schedule = {
        tb1: $.trim(input9.val()), 
        tb2: $.trim(input10.val()), 
        tb3: $.trim(input11.val()), 
        tb4: $.trim(input12.val()), 
        tb5: $.trim(input1.val()), 
        tb6: $.trim(input2.val()), 
        tb7: $.trim(input3.val()), 
        tb8: $.trim(input4.val()), 
        tb9: $.trim(input5.val()),  
    };
    
    localStorage.setItem("schedule", JSON.stringify(schedule));
};

recentEvent();

function recentEvent(){
    var recentEvent = JSON.parse(localStorage.getItem("schedule"));

    input9.val(recentEvent.tb1);
    input10.val(recentEvent.tb2);
    input11.val(recentEvent.tb3);
    input12.val(recentEvent.tb4);
    input1.val(recentEvent.tb5);
    input2.val(recentEvent.tb6);
    input3.val(recentEvent.tb7);
    input4.val(recentEvent.tb8);
    input5.val(recentEvent.tb9)
   
}

