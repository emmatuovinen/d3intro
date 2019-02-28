const canvas = d3.select(".canvas"); // d3 select -method wraps the element into a wrapper making it into a d3 object

// const svg =  canvas.append('svg');

// svg.attr('height', 600);
// svg.attr('width', 600);

// the code above can also be done via method chaining, as follows:

const svg =  canvas.append('svg')
    .attr('height', 600)
    .attr('width', 600);

const group = svg.append('g')
    .attr('transform', 'translate(100, 50)'); // translate/move the group on the x or y axis

// append shapes to svg container

group.append('rect') 
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', 'blue')
    .attr('x', 20)
    .attr('y', 20);

group.append('circle')
    .attr('r', 50)
    .attr('cx', 300)
    .attr('cy', 70)
    .attr('fill', 'pink');

group.append('line')
    .attr('x1', 370)
    .attr('x2', 400)
    .attr('y1', 20)
    .attr('y2', 120)
    .attr('stroke', 'red');

svg.append('text')
    .attr('x', 120)
    .attr('y', 200)
    .attr('fill', 'orange')
    .text('Hi there')
    .style('font-family', 'arial');



