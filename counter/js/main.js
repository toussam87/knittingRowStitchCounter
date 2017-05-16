var maxRowCountNumber;
var currentRowCountNumber = 0;

//function to decrease current Row Count
function decreaseCount() {
    if (currentRowCountNumber > 0) {
        currentRowCountNumber--;
    } else {
        alert("You currently have zero rows.")
    }
    updateRowCounterDisplay();
};

//function to increase current Row Count
function increaseCount() {
    //checks to see if current Row Count is less than or equal to the desired set number of max row count
    if (currentRowCountNumber !== maxRowCountNumber) {
        currentRowCountNumber++;
        updateRowCounterDisplay();
    }

    //checks to see if current Row Count is equal to the desired set number of max row count
    else if (currentRowCountNumber === maxRowCountNumber) {
        alert("You have reached your desired number of rows.");
        currentRowCountNumber++;
         updateRowCounterDisplay();
    } 
    //increments current row count past set max row count
    else {
        alert("You are going over your desired number of rows.");
        currentRowCountNumber++;
        updateRowCounterDisplay();
    };
};

function updateRowCounterDisplay() {

    // maxRowCountNumber
    // currentRowCountNumber
    var rowCounterDisplay = document.getElementById("rowCount");

    if (maxRowCountNumber > 0) {
        rowCounterDisplay.innerHTML = currentRowCountNumber + " of " + maxRowCountNumber;
    } 
    else {
        rowCounterDisplay.innerHTML = currentRowCountNumber;
    };
};

// function sets max Row count
function changeMaxRowCount(event) {
    var a = event.target.value;

    console.log(document.getElementById(maxRowCountNumber));

    if (isNaN(a) === false) {
        if (a > 0) {
            maxRowCountNumber = parseInt(a);
            updateRowCounterDisplay();
        } 
        else {
            alert("You've entered a number less than or equal to zero.");
        }
    }
    else {
        alert("Please enter a number.");
    }
};

window.onload = function() {
    document.getElementById("decrease").addEventListener("click", decreaseCount, false);
    document.getElementById("increase").addEventListener("click", increaseCount, false);
    document.getElementById("maxRowCount").addEventListener("change", changeMaxRowCount, false);
};