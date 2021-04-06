// chelsea is playing with js in this file

// from data.js
var coviddata = data2;

// YOUR CODE HERE!
// Table Stuff
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#date");
var inputdeathConfirmed = d3.select("#deathconfirmed");
var columns = ["date", "deathConfirmed", "deathIncrease", "deathConfirmed", "deathIncrease",
"positive","positiveIncrease","recovered","totalTestResults","totalTestResultsIncrease"]


var addData = (dataInput) => {
    dataInput.forEach(Covidstatistics => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(Covidstatistics[column])
        )
    });
}
addData(coviddata);


button.on("click",() => {

    d3.event.preventDefault();
    

    var inputDate = inputFieldDate.property("value").trim();
    var filterDate = coviddata.filter(coviddata => coviddata.date === inputDate);
    

    $tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    //Else statement
    
        else {
            $tbody.append("tr").append("td").text("Sorry about your luck...Keep er Moving...");
        }
})

    