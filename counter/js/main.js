var maxRowCountNumber;
var currentRowCountNumber = 0;
var sectionNumber = 1;

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
    currentRowCountNumber++;
    updateRowCounterDisplay();
    
    //checks to see if current Row Count is equal to the desired set number of max row count
    if (currentRowCountNumber === maxRowCountNumber) {
        alert("You have reached your desired number of rows.");
    } 
    //increments current row count past set max row count
    else if (currentRowCountNumber > maxRowCountNumber) {
        alert("You are going over your desired number of rows.");
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

    // console.log(document.getElementById(maxRowCountNumber));

    if (isNaN(a) === false && a !== "") {
        if (a > 0) {
            maxRowCountNumber = parseInt(a);
            
        } 
        else {
            alert("You've entered a number less than or equal to zero.");
        }
    }
    else if (isNaN(a)) {
        alert("Please enter a number.");
    }
    else if (a === "") {
        maxRowCountNumber = undefined;
    }
    updateRowCounterDisplay();
};

function increaseSectionNumber() {
    sectionNumber++;
}

function addSection(){
    var newSection = document.createElement("div");
    newSection.id = sectionNumber++;
    newSection.innerHTML = '<div id="main"> <div id="sectionNumber">  <input id="sectionName" placeholder="Section Name"></input> <span id="secondaryMain"> <button id="decrease"> - </button> <span id="rowCount">0 </span> <button id="increase"> + </button> </span> <input id="maxRowCount" placeholder="Enter Max Row Count"></input> </div> </div>';
    document.body.appendChild(newSection);
}

function removeSection() {
    var e = document.body;
    e.parentNode.removeChild(e);
}

window.onload = function() {
    document.getElementById("decrease").addEventListener("click", decreaseCount, false);
    document.getElementById("increase").addEventListener("click", increaseCount, false);
    document.getElementById("maxRowCount").addEventListener("change", changeMaxRowCount, false);
    document.getElementById("addSection").addEventListener("click", addSection, false);
    document.getElementById("removeSection").addEventListener("click", removeSection, false);
};