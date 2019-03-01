let people = [
    {
    Name: "dude1",
    Height: 170
    },
    {
    Name: "dude2",
    Height: 198
    },
    {
    Name: "dude3",
    Height: 155
    },
    {
    Name: "dude4",
    Height: 168
    }
]

let barChartContainer = d3.select("#chart");

let maxValue = d3.max(people, d => d.Height)

let scale = d3.scaleLinear()
    .domain([0, maxValue])
    .range([0, 300])

//Practicing visualization according to retrieved data:

let join = barChartContainer.selectAll("div")
    .data(people)

join.enter()
    .append("div")
    .text(d => d.Name + ": " + scale(d.Height))
    .style("background-color", "blue")
    .style("margin", "5px")
    .style("color", "white")
    .style("width", d => scale(d.Height)+"px")


//enter, exit, update 

let container = d3.select(".canvas")

let count = 1;


function addNewPerson() {
    people.push({Name: "Dude" + count})
    count += 1
    showData(people)
}

function removePerson() {
    people = people.slice(0, -1);
    count -= 1
    showData(people)
}

// this function we call every time the data is updated
function showData(people) {
    let joinAllData = container.selectAll("div")
        .data(people);

        joinAllData.enter()
            .append("div")
            .text(p => p.Name + " - New")
        
        joinAllData.exit().remove()

        joinAllData.text(p => p.Name + "- Updated")
}

