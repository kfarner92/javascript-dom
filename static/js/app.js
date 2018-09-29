// from data.js
var tableData = data;


var tbody = d3.select("tbody");
console.log(data);

data.forEach(function(ufoSightings){
    console.log(ufoSightings);
    var row = tbody.append("tr");

    Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key, value);

        var cell =tbody.append("td");
        cell.text(value);
    });
});

var submit = d3.select("#filter-btn");

submit.on("click", function(){
    d3.event.preventDefault();

    d3.selectAll("td").remove()

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputElement);
    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    var tbody = d3.select("tbody");
        //console.log(data);

    filteredData.forEach(function(ufoSightings){
        console.log(ufoSightings);
        var row = tbody.append("tr");

        Object.entries(ufoSightings).forEach(function([key, value]) {
            console.log(key, value);

            var cell =tbody.append("td");
            cell.text(value);
        });
    });
})
