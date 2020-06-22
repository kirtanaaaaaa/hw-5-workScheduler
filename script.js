var hours = {
   // "9", "10", "11", "12", "13", "14", "15", "16", "17", 
};

var date = moment().format("MMMM Do YYYY");
$("#currentDay").text(date);

var saveBtn = $(".saveBtn");
var scheduler = $(".container");

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

  