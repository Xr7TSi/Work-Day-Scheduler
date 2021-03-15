// use jquery switch class effect to change hour color for past, resent and future
// consider jquery buttons to submit user data to local storage 
// use bootstrap to build time blocks
var showCurrentDay = document.getElementById("showCurrentDay")
var dayIndex = moment().day()



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
