// used for day of week display
var showCurrentDay = document.getElementById("showCurrentDay");
var dayIndex = moment().day();

// gets submit button from html
var submitBtn = $('.submitBtn');

// used for background color management
var currentHour = moment().format("ha");
var currentHourIndex = moment().hour();
var nineAm = document.getElementById("nineAm");
var tenAm = document.getElementById("tenAm");
var elevenAm = document.getElementById("elevenAm"); 
var twelvePm = document.getElementById("twelvePm");
var onePm = document.getElementById("onePm");  
var twoPm = document.getElementById("twoPm"); 
var threePm = document.getElementById("threePm"); 
var fourPm = document.getElementById("fourPm"); 
var fivePm = document.getElementById("fivePm"); 




// pulls user data from local storage
function getUserData () {
 nineAmLs = JSON.parse(localStorage.getItem("nineAmValue"));
 tenAmLs = JSON.parse(localStorage.getItem("tenAmValue"));
 elevenAmLs = JSON.parse(localStorage.getItem("elevenAmValue"));
 twelvePmLs = JSON.parse(localStorage.getItem("twelvePmValue"));
 onePmLs = JSON.parse(localStorage.getItem("onePmValue"));
 twoPmLs = JSON.parse(localStorage.getItem("twoPmValue"));
 threePmLs = JSON.parse(localStorage.getItem("threePmValue"));
 fourPmLs = JSON.parse(localStorage.getItem("fourPmValue"));
 fivePmLs = JSON.parse(localStorage.getItem("fivePmValue"));
} getUserData()

// sends user data to local storage on click
submitBtn.on('click', function () {    // sets user input to local storage   
    var nineAmEl = $("#nineAm").val(); 
    var tenAmEl = $("#tenAm").val(); 
    var elevenAmEl = $("#elevenAm").val(); 
    var twelvePmEl = $("#twelvePm").val(); 
    var onePmEl = $("#onePm").val(); 
    var twoPmEl = $("#twoPm").val(); 
    var threePmEl = $("#threePm").val(); 
    var fourPmEl = $("#fourPm").val(); 
    var fivePmEl = $("#fivePm").val(); 
     

    localStorage.setItem("nineAmValue", JSON.stringify(nineAmEl));  
    localStorage.setItem("tenAmValue", JSON.stringify(tenAmEl));
    localStorage.setItem("elevenAmValue", JSON.stringify(elevenAmEl));
    localStorage.setItem("twelvePmValue", JSON.stringify(twelvePmEl));      
    localStorage.setItem("onePmValue", JSON.stringify(onePmEl)); 
    localStorage.setItem("twoPmValue", JSON.stringify(twoPmEl)); 
    localStorage.setItem("threePmValue", JSON.stringify(threePmEl)); 
    localStorage.setItem("fourPmValue", JSON.stringify(fourPmEl)); 
    localStorage.setItem("fivePmValue", JSON.stringify(fivePmEl));
    });



// displays current day of week
function showDayOfWeek()
 {
    if (dayIndex = 0) {
        todayIs = "Sunday"
    } else
    if (dayIndex = 1) {
        todayIs = "Monday"
    } else
    if (dayIndex = 2) {
        todayIs = "Tuesday"
    } else
    if (dayIndex = 3) {
        todayIs = "Wednesday"
    } else
    if (dayIndex = 3) {
        todayIs = "Thursday"
    } else
    if (dayIndex = 5) {
        todayIs = "Friday"
    } else
    if (dayIndex = 6) {
        todayIs = "Saturday"
    } 
    showCurrentDay.textContent = todayIs;
} showDayOfWeek()


// sets background color based on time
// "#e97451" Orange
//  "#AAAA" Gray
// "#84d23c" Green

function checkHour9() {
    if (currentHourIndex === 9) {
        nineAm.style.backgroundColor = "#e97451"
    }  else 
    if (currentHourIndex >9) {
        nineAm.style.backgroundColor = "#AAAA"
    } else (nineAm.style.backgroundColor = "#84d23c" )
}; checkHour9() 

function checkHour10() {
    if (currentHourIndex === 10) {
        tenAm.style.backgroundColor = "#e97451"
    }  else 
    if (currentHourIndex >10) {
        tenAm.style.backgroundColor = "#AAAA"
    } else (tenAm.style.backgroundColor = "#84d23c")
}; checkHour10() 

function checkHour11() {
    if (currentHourIndex === 11) {
        elevenAm.style.backgroundColor = "#e97451"
    }  else 
    if (currentHourIndex >11) {
        elevenAm.style.backgroundColor = "#AAAA"
    } else (elevenAm.style.backgroundColor = "#84d23c")
}; checkHour11() 

function checkHour12() {
    if (currentHourIndex === 12) {
        twelvePm.style.backgroundColor = "#e97451"
    }  else 
    if (currentHourIndex >12) {
        twelvePm.style.backgroundColor = "#AAAA"
    } else (twelvePm.style.backgroundColor = "#84d23c")
}; checkHour12() 

function checkHour13() {
    if (currentHourIndex === 13) {
        onePm.style.backgroundColor = "#e97451"
    }  else 
    if (currentHourIndex >13) {
        onePm.style.backgroundColor = "#AAAA"
    } else ( onePm.style.backgroundColor = "#84d23c")
}; checkHour13() 

function checkHour14() {
    if (currentHourIndex === 14) {
        twoPm.style.backgroundColor = "#e97451"
    }  else 
    if (currentHourIndex >14) {
        twoPm.style.backgroundColor = "#AAAA"
    } else (twoPm.style.backgroundColor = "#84d23c")
}; checkHour14() 

function checkHour15() {
    if (currentHourIndex === 15) {
        threePm.style.backgroundColor = "#e97451"
    }  else 
    if (currentHourIndex >15) {
        threePm.style.backgroundColor = "#AAAA"
    } else (threePm.style.backgroundColor = "#84d23c")
}; checkHour15() 

function checkHour16() {
    if (currentHourIndex === 16) {
        fourPm.style.backgroundColor = "#e97451"
    }  else 
    if (currentHourIndex >16) {
        fourPm.style.backgroundColor = "#AAAA"
    } else (fourPm.style.backgroundColor = "#84d23c")
}; checkHour16() 

function checkHour17() {
    if (currentHourIndex === 17) {
        fivePm.style.backgroundColor = "#e97451"
    }  else 
    if (currentHourIndex >17) {
        fivePm.style.backgroundColor = "#AAAA"
    } else (fivePm.style.backgroundColor = "#84d23c")
}; checkHour17() 

