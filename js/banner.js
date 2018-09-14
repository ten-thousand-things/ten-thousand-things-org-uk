window.onload = D3Banner

function D3Banner () {
  var i = 0;

  var svg = d3.select("section#banner")
    .classed("svg-container", true)
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "1 0 2200 1800")
    .classed("svg-content-responsive", true);

  svg.append("rect")
    .classed("svg-child-element", true)
    .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

  function particle() {
    var m = d3.mouse(this);

    svg.insert("circle", "rect")
      .attr("cx", m[0])
      .attr("cy", m[1])
      .attr("r", 1e-6)
      .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
      .style("stroke-opacity", 1)
      .transition()
      .duration(2000)
      .ease(Math.sqrt)
      .attr("r", 200)
      .style("stroke-opacity", 1e-6)
      .remove();

    d3.event.preventDefault();
  }
}

