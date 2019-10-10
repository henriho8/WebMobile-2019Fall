
// Declaring variables
var today = new Date();
var presentMonth = today.getMonth();
var presentYear = today.getFullYear();
var chooseYear = document.getElementById("year");
var chooseMonth = document.getElementById("month");

// Creating array of months
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var monthYear = document.getElementById("monthYear");
displayCalendar(presentMonth, presentYear);


function change() {
    presentYear = parseInt(chooseYear.value);
    presentMonth = parseInt(chooseMonth.value);
    displayCalendar(presentMonth, presentYear);
}


function previousMonth() {
    presentYear = (presentMonth === 0) ? presentYear - 1 : presentYear;
    presentMonth = (presentMonth === 0) ? 12 : presentMonth - 1;
    displayCalendar(presentMonth, presentYear);
}


function nextMonth() {
    presentYear = (presentMonth === 11) ? presentYear + 1 : presentYear;
    presentMonth = (presentMonth + 1) % 12;
    displayCalendar(presentMonth, presentYear);
}



function displayCalendar(month, year) {

    var firstDay = (new Date(year, month)).getDay();
    var daysInMonth = 32 - new Date(year, month, 32).getDate();

    // Where the calendar area is
    var table = document.getElementById("calendar-area");

    // Clear table
    table.innerHTML = "";

    // Fill data of month
    monthYear.innerHTML = months[month] + " " + year;
    chooseYear.value = year;
    chooseMonth.value = month;

    // Create all areas/cells
    var date = 1;
    for (var x = 0; x < 6; x++) {
        // Create table rows
        var tableRow = document.createElement("tr");

        // Create each area and fill with data
        for (let y = 0; y < 7; y++) {
            if (x === 0 && y < firstDay) {
                let area = document.createElement("td");
                let areaText = document.createTextNode("");
                area.append(areaText);
                tableRow.append(area);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let area = document.createElement("td");
                let areaText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    area.classList.add("bg-info");
                }
                area.append(areaText);
                tableRow.append(area);
                date++;
            }


        }
        // Adding each row into calendar area
        table.append(tableRow);
    }

}
