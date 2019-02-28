const data = [
  { width: 200, height: 100, fill: "purple" },
  { width: 100, height: 60, fill: "pink" },
  { width: 50, height: 30, fill: "blue" }
];

const svg = d3.select("svg");

// join data to rects
const rects = svg.selectAll("rect")
    .data(data);


// add attrs to rects already in the DOM
rects.attr("width", (d, i, n) => {
    console.log("i: ", i);
    console.log("n: ", n);
    console.log(n[i]); // this is our way around using the function keyword in order to refer to the current element
    return d.width;
  })
  .attr("height", d => d.height) // above multiline arrow function, requires return and brackets. single line doesn't
  .attr("fill", d => d.fill);

// note that if you use the arrow function instead of the function keyword you might not have access to the
// element the same way. compare:
// .attr("height", function(d) {return d.height})
// and log "this" to console

// append the enter slelction to DOM
rects.enter()
  .append("rect")
  .attr("width", (d, i, n) => d.width)
  .attr("height", d => d.height)
  .attr("fill", d => d.fill);

console.log(rects);
