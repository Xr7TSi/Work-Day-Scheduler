// used for day of week display
var showCurrentDay = document.getElementById("showCurrentDay");


// gets submit button from html
var submitBtn = $('.submitBtn');

// used for background color management
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


// displays current date with clock
setInterval(function(){ 
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
showCurrentDay.textContent = date;
});

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

// // adds user data to page on page load
function addUserData (){
    document.querySelector("#nineAm").value = nineAmLs;
    document.querySelector("#tenAm").value = tenAmLs;
    document.querySelector("#elevenAm").value = elevenAmLs;
    document.querySelector("#twelvePm").value = twelvePmLs;
    document.querySelector("#onePm").value = onePmLs;
    document.querySelector("#twoPm").value = twoPmLs;
    document.querySelector("#threePm").value = threePmLs;
    document.querySelector("#fourPm").value = fourPmLs;
    document.querySelector("#fivePm").value = fivePmLs;
} addUserData()

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


// ensures background color is updated while user has the app open
function checkHourReset() {

    setInterval(function() {

        // sets background color based on time
        // "#e97451" Orange
        //  "#AAAA" Gray
        // "#84d23c" Green
        function checkHour9() {
            if (currentHourIndex === 9) {
                nineAm.style.backgroundColor = "#ff6961"
            }  else 
            if (currentHourIndex >9) {
                nineAm.style.backgroundColor = "#d3d3d3"
            } else (nineAm.style.backgroundColor = "#77dd77" )
        }; checkHour9() 
        
        function checkHour10() {
            if (currentHourIndex === 10) {
                tenAm.style.backgroundColor = "#ff6961"
            }  else 
            if (currentHourIndex >10) {
                tenAm.style.backgroundColor = "#d3d3d3"
            } else (tenAm.style.backgroundColor = "#77dd77")
        }; checkHour10() 
        
        function checkHour11() {
            if (currentHourIndex === 11) {
                elevenAm.style.backgroundColor = "#ff6961"
            }  else 
            if (currentHourIndex >11) {
                elevenAm.style.backgroundColor = "#d3d3d3"
            } else (elevenAm.style.backgroundColor = "#77dd77")
        }; checkHour11() 
        
        function checkHour12() {
            if (currentHourIndex === 12) {
                twelvePm.style.backgroundColor = "#ff6961"
            }  else 
            if (currentHourIndex >12) {
                twelvePm.style.backgroundColor = "#d3d3d3"
            } else (twelvePm.style.backgroundColor = "#77dd77")
        }; checkHour12() 
        
        function checkHour13() {
            if (currentHourIndex === 13) {
                onePm.style.backgroundColor = "#ff6961"
            }  else 
            if (currentHourIndex >13) {
                onePm.style.backgroundColor = "#d3d3d3"
            } else ( onePm.style.backgroundColor = "#77dd77")
        }; checkHour13() 
        
        function checkHour14() {
            if (currentHourIndex === 14) {
                twoPm.style.backgroundColor = "#ff6961"
            }  else 
            if (currentHourIndex >14) {
                twoPm.style.backgroundColor = "#d3d3d3"
            } else (twoPm.style.backgroundColor = "#77dd77")
        }; checkHour14() 
        
        function checkHour15() {
            if (currentHourIndex === 15) {
                threePm.style.backgroundColor = "#ff6961"
            }  else 
            if (currentHourIndex >15) {
                threePm.style.backgroundColor = "#d3d3d3"
            } else (threePm.style.backgroundColor = "#77dd77")
        }; checkHour15() 
        
        function checkHour16() {
            if (currentHourIndex === 16) {
                fourPm.style.backgroundColor = "#ff6961"
            }  else 
            if (currentHourIndex >16) {
                fourPm.style.backgroundColor = "#d3d3d3"
            } else (fourPm.style.backgroundColor = "#77dd77")
        }; checkHour16() 
        
        function checkHour17() {
            if (currentHourIndex === 17) {
                fivePm.style.backgroundColor = "#ff6961"
            }  else 
            if (currentHourIndex >17) {
                fivePm.style.backgroundColor = "#d3d3d3"
            } else (fivePm.style.backgroundColor = "#77dd77")
        }; checkHour17() 
    },100)
} checkHourReset()
