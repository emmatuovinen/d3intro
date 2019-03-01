let testData = [
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

let ordinalChart = d3.select("#container2");

let maxValue = d3.max(testData, d => d.Height)

let widthScale = d3.scaleLinear()
    .domain([0, maxValue])
    .range([0, 300])

    let positionScale = d3.scaleBand()
    .range([0, 200])
    .domain(testData.map(d => d.Name))
    .padding(0.3)

let join = ordinalChart
    .selectAll("rect")
    .data(testData)

join.enter()
    .append("rect")
    .attr("fill", "pink")
    .attr("width", d => d.Height + "px")
    .attr("height", positionScale.bandwidth())
    .attr("y", d => positionScale(d.Name))