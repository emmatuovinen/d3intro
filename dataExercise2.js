const svg = d3.select('svg');

d3.json("planets.json").then(data => {

    /* Manipulating data for testing purposes */
    for(let planet of data) {
        console.log(planet.fill)
    }

    data.sort( (planet1, planet2) => {
        return d3.ascending(
            planet1.radius,
            planet2.radius
        )
    })
    let filteredData = data.filter(d => {
        return d.distance < 401
    })

    console.log(filteredData);
    console.log(data);

    let distances = data.reduce(
        (previous, current) => {
            return previous + current.distance
        }, 0)
    let avgDist = distances/data.length;
    console.log(avgDist);

    /* visualization continues from here: */ 

    const circs = svg.selectAll('circle')
        .data(data);

    circs.attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', d => d.radius)
        .attr('fill', d => d.fill)

    circs.enter()
        .append('circle')
        .attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', d => d.radius)
        .attr('fill', d => d.fill)
})