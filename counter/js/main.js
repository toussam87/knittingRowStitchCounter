window.onload = function() { 
    document.querySelectorAll(".increase").forEach(function(buttonObj) {
        console.log("foreach registered");
        buttonObj.addEventListener("click", increaseCount, false);
    });
    document.querySelectorAll(".decrease").forEach(function(buttonObj) {
        console.log("foreach registered");
        buttonObj.addEventListener("click", decreaseCount, false);
    });
    document.querySelectorAll(".maxRowCount").forEach(function(buttonObj) {
        console.log("foreach registered");
        buttonObj.addEventListener("change", changeMaxRowCount, false);
    });
}

//function to decrease current Row Count
function decreaseCount() {
    var sectionRowCount = parseInt(event.target.parentElement.getAttribute("data-rowcount"), 10);
        if (sectionRowCount > 0) {
                event.target.parentElement.setAttribute("data-rowcount", (sectionRowCount - 1));
        } else {
            alert("You currently have zero rows.")
        }

        updateRowCounterDisplay();
};

function increaseCount(event) {
    var sectionRowCount = parseInt(event.target.parentElement.getAttribute("data-rowcount"), 10);
    event.target.parentElement.setAttribute("data-rowcount", (sectionRowCount + 1));
    var maxRowCount = parseInt(event.target.parentElement.getAttribute("data-maxrowcount"), 10)

    if (sectionRowCount == maxRowCount) {
        alert("You have reached your desired number of rows.")
    } else if (sectionRowCount > maxRowCount) {
        alert("You are going over your desired number of frows.")
    }
    
    updateRowCounterDisplay();
};

function updateRowCounterDisplay() {
    var sectionRowCount = parseInt(event.target.parentElement.getAttribute("data-rowcount"), 10);
    var maxRowCount = parseInt(event.target.parentElement.getAttribute("data-maxrowcount"), 10);

    var rowCounterDisplay = document.querySelector(".rowCount"); 
    if (maxRowCount > 0) {
        rowCounterDisplay.innerHTML = sectionRowCount + " of " + maxRowCount;
    } else {
        rowCounterDisplay.innerHTML = sectionRowCount;
    };
};

// function sets maximum Row Count
function changeMaxRowCount(event) {
    var a = event.target.value;

    if (isNaN(a) === false && a !== "") {
        if (a > 0) {
            var setMaxRowCount = document.querySelector(".count");
            setMaxRowCount.setAttribute("data-maxrowcount", a);
        
            // updateRowCounterDisplay();
            // var sectionRowCount = parseInt(event.target.parentElement.getAttribute("data-rowcount"), 10);
            // var maxRowCount = parseInt(event.target.parentElement.getAttribute("data-maxrowcount"), 10);
            // console.log(sectionRowCount);
            // console.log(maxRowCount);
            // var updateRowCounter = document.querySelector(".rowCount");
            // updateRowCounter.innerHTML = sectionRowCount + " of " + maxRowCount;
            // var maxRowCount = parseInt(a, 10);
            // var maxRowCount = document.querySelector(".rowCount");
        } 
        else {
            alert("You've entered a number less than or equal to zero.");
        }
    }
    else if (isNaN(a)) {
        alert("Please enter a number.");
    }
    else if (a === "") {
        maxRowCount = undefined;
    }
    // console.log(a);

}

function addSection(){
        var newSection = document.createElement("div");
        newSection.className = 'section';
        newSection.innerHTML = '<input class="sectionName" placeholder="Section Name"></input> <span class="count"> <button class="decrease"> - </button> <span class="rowCount">0 </span> <button class="increase" id="increase"> + </button> </span> <input class="maxRowCount" placeholder="Enter Max Row Count"></input> </div> </div>';
        document.getElementById("main").appendChild(newSection);
}

function appendClass() {
    document.querySelectorAll("body #main .section").forEach(function(n) {

        n.addEventListener("click", function(event) {
            var clickedThing = event.target;

            if (!clickedThing.classList.contains("selected")) {
                clickedThing.classList.add("selected");
            }
        });
    });
}

function removeSection() {
    document.querySelectorAll(".selected").forEach(function(thingToBeRemoved) {
        thingToBeRemoved.remove();
        });
    };