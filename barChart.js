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

let ordinalChart = d3.select("#body");

let maxValue = d3.max(testData, d => d.Height)

let widthScale = d3.scaleLinear()
    .domain([0, maxValue])
    .range([0, 198])

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

let xAxis = d3.axisBottom(widthScale)
.ticks(6)
.tickFormat(d => d + "cm")
d3.select("#xAxis")
    .attr("transform", "translate(50, 200)")
    .call(xAxis)

let yAxis = d3.axisLeft(positionScale)
d3.select("#yAxis")
    .attr("transform", "translate(50, 0)")
    .call(yAxis)