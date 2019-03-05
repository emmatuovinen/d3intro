let body = d3.select("#geoMap");

d3.json("countries.geo.json").then(showData);

function showData(mapInfo) {
    let bodyHeight = 400
    let bodyWidth = 400

    console.log(mapInfo)
    
    let projection = d3.geoNaturalEarth1()
        .scale(100)
        .translate([bodyWidth/2, bodyHeight/2])

    let path = d3.geoPath()
        .projection(projection)

    body.selectAll("path")
        .data(mapInfo.features)
        .enter()
        .append("path")
        .attr("d", d => path(d))
}