// set svg size and position
const margin = { top: 50, right: 100, bottom: 50, left: 100 },
        width = 1200 - margin.left - margin.right,
        height = 700 - margin.top - margin.bottom;

// svg setting details
const svg = d3.select("#plotdiv")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Define functions
function showDefault(){
    svg.selectAll('*').remove()
    d3.csv("Country_AllSatellites.csv").then(function(data){
        const x = d3.scaleLinear()
        .domain([1970, 2050])
        .range([0, width]);

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        const y = d3.scaleLog()
        .domain([100, 50000])
        .range([height, 200]);
        svg.append("g")
            .attr("class", "myYaxis")
            .call(d3.axisLeft(y));

        const Tooltip = d3.select("#plotdiv")
        .append("div")
        .style("opacity", 0)
        .style("position", "absolute")
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        const mousemove = function (event, d) {
            Tooltip
            .style("opacity", 0.8)
        }
        const mouseover = function (event, d) {
            Tooltip
            .html(d.Country + `<br> Orbit Type:` + d.OrbitType + `<br> Launched/Plan Year: `+ d.Launchedin  + `<br> Retirement year: ` + d.Outofservicesince)
            .style("left", (event.x + 15 ) + "px")
            .style("top", (event.y + 15) + "px")
        }
        const mouseleave = function (event, d) {
            Tooltip
            .transition()
            .duration(500)
            .style("opacity", 0)
        }

        svg.append('g')
            .selectAll("dot")
            .data(data)
            .enter().append("circle")
            .attr("cx", function (d) { return x(d.Launchedin); } )
            .attr("cy", height )
            .attr("r", 6)
            .style("fill", "BLue")
            .style("opacity", 0.5)
            .style("stroke", "black")
            .style("position", "absolute")
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave);

        svg.selectAll("circle")
        .transition()
        .delay(function(d,i){return(i*2)})
        .duration(500)
        .attr("cx", function (d) { return x(d.Launchedin); } )
        .attr("cy", function (d) { return y(d.OrbitHeight); } )

        svg.append('rect')
        .attr('x', -30)
        .attr('y', -15)
        .attr('width', 1100)
        .attr('height', 105)
        .attr('stroke', 'white')
        .attr('fill', 'lightgreen')
        .attr('opacity', 0.2)

        svg.append("text")
        .attr('x', -20)
        .attr('y', 0)
        .text(`Satellites have been used in many fields:`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "firebirck");

        svg.append("text")
        .attr('x', -20)
        .attr('y', 20)
        .text(`Localization: Satellite navigation systems is widely used in almost all industries. These satellites determine the location, velocity, and current time.`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");

        svg.append("text")
        .attr('x', -20)
        .attr('y', 40)
        .text(`Communications: Satellites are used for television, radio, and internet broadcasting.`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");

        svg.append("text")
        .attr('x', -20)
        .attr('y', 60)
        .text(`Earth Observation: Satellites provide information about earth resources, weather, climate, and environmental monitoring.`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");     

        svg.append("text")
        .attr('x', -20)
        .attr('y', 80)
        .text(`Space Observation: Satellite telescopes have been critical to understanding phenomena like pulsars, black holes, and measuring the age of the universe.`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");    
        
        svg.append("text")
        .attr('x', width/2 -55)
        .attr('y', height + 50)
        .text(`Launched Year`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");   

        svg.append("text")
        .attr("x", "-450")
        .attr("y", -40)
        .text("Orbit Height (km)")
        .attr("transform", "rotate(-90)")
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");  
    })
}

function showCountry(){
    svg.selectAll('*').remove()
    d3.csv("Country_AllSatellites.csv").then(function(data){
        const x = d3.scaleLinear()
        .domain([1970, 2050])
        .range([0, width]);

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        const y = d3.scaleLog()
        .domain([100, 50000])
        .range([height, 200]);
        svg.append("g")
            .attr("class", "myYaxis")
            .call(d3.axisLeft(y));

        const Tooltip = d3.select("#plotdiv")
            .append("div")
            .style("opacity", 0)
            .style("position", "absolute")
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")

        // Three function that change the tooltip when user hover / move / leave a cell
        const mousemove = function (event, d) {
            Tooltip
            .style("opacity", 0.8)
        }
        const mouseover = function (event, d) {
            Tooltip
            .html(d.Country + `<br> Orbit Type:` + d.OrbitType + `<br> Launched/Plan Year: `+ d.Launchedin  + `<br> Retirement year: ` + d.Outofservicesince)
            .style("left", (event.x + 15 ) + "px")
            .style("top", (event.y + 15) + "px")
        }
        const mouseleave = function (event, d) {
            Tooltip
            .transition()
            .duration(500)
            .style("opacity", 0)
        }

        const allGroup = ["USA", "China", "UK", "EU", "Russia", "Japan", "India", "Korea", "Canada", "Other"]
        const myColor = d3.scaleOrdinal()
          .domain(allGroup)
          .range(d3.schemeSet1);

        svg.append('g')
            .selectAll("dot")
            .data(data)
            .enter().append("circle")
            .attr("cx", function (d) { return x(d.Launchedin); } )
            .attr("cy", height) // put the circles at initial height (y axis bottom)
            .attr("r", 6)
            .style("fill",  function(d) {return myColor(d.Country)})
            .style("opacity", 0.5)
            .style("stroke", "black")
            .style("position", "absolute")
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave);

        svg.selectAll("circle")
        .transition()
        .delay(function(d,i){return(i*2)})
        .duration(500)
        .attr("cx", function (d) { return x(d.Launchedin); } )
        .attr("cy", function (d) { return y(d.OrbitHeight); } ) // final circles height

        // Legend frame color
        svg.append('rect')
        .attr('x', 10)
        .attr('y', 200)
        .attr('width', 80)
        .attr('height', 230)
        .attr('stroke', 'black')
        .attr('fill', 'lightgreen')
        .attr('opacity', 0.2)

        // Legend
        for (let i = 0; i < allGroup.length; i++) {
            svg.append("text")
            .attr("x", 20)
            .attr("y", 220 + i*22)
            .text(allGroup[i])
            .style("font-size", "16px")
            .style("font-weight", "bold")
            .style("fill", function (d) { return myColor(allGroup[i]) })
        }

        svg.append('rect')
        .attr('x', -5)
        .attr('y', -15)
        .attr('width', 750)
        .attr('height', 125)
        .attr('stroke', 'white')
        .attr('fill', 'lightgreen')
        .attr('opacity', 0.2)

        svg.append("text")
        .attr('x', 0)
        .attr('y', 0)
        .text(`75 different countries have at least one satellite orbiting Earth.`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");
        
        svg.append("text")
        .attr('x', 0)
        .attr('y', 20)
        .text('United States, China, and United Kingdom top the list of countries with hundreds of operational satellites.')
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");      

        svg.append("text")
        .attr('x', 0)
        .attr('y', 40)
        .text(`USA owns 59.77% of total satellites.`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");

        svg.append("text")
        .attr('x', 0)
        .attr('y', 60)
        .text(`China owns 10.35% of total satellites.`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");

        svg.append("text")
        .attr('x', 0)
        .attr('y', 80)
        .text(`UK owns 9.99% of total satellites.`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");

        svg.append("text")
        .attr('x', 0)
        .attr('y', 100)
        .text(`Russia owns 3.49% of total satellites.`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");

        svg.append("text")
        .attr('x', width/2 -55)
        .attr('y', height + 50)
        .text(`Launched Year`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");   

        svg.append("text")
        .attr("x", "-450")
        .attr("y", -40)
        .text("Orbit Height (km)")
        .attr("transform", "rotate(-90)")
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");  
    })
}

function showType(){
    svg.selectAll('*').remove()
    d3.csv("Country_AllSatellites.csv").then(function(data){
        const x = d3.scaleLinear()
        .domain([1970, 2050])
        .range([0, width]);

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        const y = d3.scaleLog()
        .domain([100, 50000])
        .range([height, 200]);
        svg.append("g")
            .attr("class", "myYaxis")
            .call(d3.axisLeft(y));

        const Tooltip = d3.select("#plotdiv")
            .append("div")
            .style("opacity", 0)
            .style("position", "absolute")
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")

        // Three function that change the tooltip when user hover / move / leave a cell
        const mousemove = function (event, d) {
            Tooltip
            .style("opacity", 0.8)
        }
        const mouseover = function (event, d) {
            Tooltip
            .html(d.Country + `<br> Orbit Type:` + d.OrbitType + `<br> Launched/Plan Year: `+ d.Launchedin  + `<br> Retirement year: ` + d.Outofservicesince)
            .style("left", (event.x + 15 ) + "px")
            .style("top", (event.y + 15) + "px")
        }
        const mouseleave = function (event, d) {
            Tooltip
            .transition()
            .duration(500)
            .style("opacity", 0)
        }

        var allGroup = ["Geostationary", "Sun Synchronous",  "Non Sun Synchronous", "Near polar", "Circular", "Other"]
        var myColor = d3.scaleOrdinal()
          .domain(allGroup)
          .range(d3.schemeSet3);

        svg.append('g')
            .selectAll("dot")
            .data(data)
            .enter().append("circle")
            .attr("cx", function (d) { return x(d.Launchedin); } )
            .attr("cy", height )
            .attr("r", 6)
            .style("fill",  function(d) {return myColor(d.OrbitType)})
            .style("opacity", 0.5)
            .style("stroke", "black")
            .style("position", "absolute")
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave);

        svg.selectAll("circle")
        .transition()
        .delay(function(d,i){return(i*3)})
        .duration(500)
        .attr("cx", function (d) { return x(d.Launchedin); } )
        .attr("cy", function (d) { return y(d.OrbitHeight); } )

        svg.append('rect')
        .attr('x', 10)
        .attr('y', 200)
        .attr('width', 240)
        .attr('height', 140)
        .attr('stroke', 'black')
        .attr('fill', 'dimgray')
        .attr('opacity', 0.2)

        for (let i = 0; i < allGroup.length; i++) {
            svg.append("text")
            .attr("x", 15)
            .attr("y", 220 + i*22)
            .text(allGroup[i])
            .style("font-size", "16px")
            .style("font-weight", "bold")
            .style("fill", function (d) { return myColor(allGroup[i]) })
        }

        svg.append('rect')
        .attr('x', -25)
        .attr('y', -15)
        .attr('width', 1070)
        .attr('height', 105)
        .attr('stroke', 'white')
        .attr('fill', 'lightgreen')
        .attr('opacity', 0.2)

        svg.append("text")
        .attr('x', -20)
        .attr('y', 0)
        .text(`Geostationary orbit: This type has an orbital period that matches Earth's rotation. These satellites have a constant altitude of 35,786 km. `)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");        

        svg.append("text")
        .attr('x', -20)
        .attr('y', 20)
        .text(`Sun Synchronous orbit: Nearly polar orbit, in which satellites pass over any given point of earth's surface at the same local solar time.`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");      

        svg.append("text")
        .attr('x', -20)
        .attr('y', 40)
        .text(`Non Sun Synchronous orbit: Nearly polar orbit but with small inclination`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");             
        
        svg.append("text")
        .attr('x', -20)
        .attr('y', 60)
        .text(`Near polar orbit: The near polar orbit is used for satellites providing reconnaissance, weather tracking, atmospheric conditions, and Earth observation.`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");          

        svg.append("text")
        .attr('x', -20)
        .attr('y', 80)
        .text(`Circular orbit: These orbits have a fixed distance around the barycenter, which means an eccentricity of 0.`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");   
        
        svg.append("text")
        .attr('x', width/2 -55)
        .attr('y', height + 50)
        .text(`Launched Year`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");   

        svg.append("text")
        .attr("x", "-450")
        .attr("y", -40)
        .text("Orbit Height (km)")
        .attr("transform", "rotate(-90)")
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");  
    })
}

function showStatus(){
    svg.selectAll('*').remove()
    d3.csv("Country_AllSatellites.csv").then(function(data){
        const x = d3.scaleLinear()
        .domain([1970, 2050])
        .range([0, width]);

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        const y = d3.scaleLog()
        .domain([100, 50000])
        .range([height, 200]);
        svg.append("g")
            .attr("class", "myYaxis")
            .call(d3.axisLeft(y));

        const Tooltip = d3.select("#plotdiv")
            .append("div")
            .style("opacity", 0)
            .style("position", "absolute")
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")

        // Three function that change the tooltip when user hover / move / leave a cell
        const mousemove = function (event, d) {
            Tooltip
            .style("opacity", 0.8)
        }
        const mouseover = function (event, d) {
            Tooltip
            .html(d.Country + `<br> Orbit Type:` + d.OrbitType + `<br> Launched/Plan Year: `+ d.Launchedin  + `<br> Retirement year: ` + d.Outofservicesince)
            .style("left", (event.x + 15 ) + "px")
            .style("top", (event.y + 15) + "px")
        }
        const mouseleave = function (event, d) {
            Tooltip
            .transition()
            .duration(500)
            .style("opacity", 0)
        }

        svg.append('g')
            .selectAll("dot")
            .data(data)
            .enter().append("circle")
            .attr("cx", function (d) { return x(d.Launchedin); } )
            .attr("cy", height )
            .attr("r", 6)
            .style("fill",  function(d) {return d.Outofservicesince === '??' ? "Blue" : "Red";})
            .style("opacity", 0.5)
            .style("stroke", "black")
            .style("position", "absolute")
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave);

        svg.selectAll("circle")
        .transition()
        .delay(function(d,i){return(i*2)})
        .duration(500)
        .attr("cx", function (d) { return x(d.Launchedin); } )
        .attr("cy", function (d) { return y(d.OrbitHeight); } )

        svg.append('rect')
        .attr('x', 10)
        .attr('y', 200)
        .attr('width', 150)
        .attr('height', 50)
        .attr('stroke', 'black')
        .attr('fill', 'cyan')
        .attr('opacity', 0.1)

        allGroup = ['Active Satellites', 'Inactive Satellites']
        colorGroup = ['Blue', 'Red']
        for (let i = 0; i < allGroup.length; i++) {
            svg.append("text")
            .attr("x", 15)
            .attr("y", 220 + i*22)
            .text(allGroup[i])
            .style("font-size", "16px")
            .style("font-weight", "bold")
            .style("fill", colorGroup[i])
        }

        svg.append('rect')
        .attr('x', 0)
        .attr('y', -15)
        .attr('width', 680)
        .attr('height', 45)
        .attr('stroke', 'white')
        .attr('fill', 'lightgreen')
        .attr('opacity', 0.2)

        svg.append("text")
        .attr('x', 0)
        .attr('y', 0)
        .text(`There are typically between 30 and 40 launches a year, most done by commercial companies.`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");   

        svg.append("text")
        .attr('x', 0)
        .attr('y', 20)
        .text(`Usually, the lifespan on a satellite is typically only fifteen years before they have to be replaced.`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");  

        svg.append("text")
        .attr('x', width/2 -55)
        .attr('y', height + 50)
        .text(`Launched Year`)
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");   

        svg.append("text")
        .attr("x", "-450")
        .attr("y", -40)
        .text("Orbit Height (km)")
        .attr("transform", "rotate(-90)")
        .style("font-size", "16px")
        .style("font-weight", "normal")
        .style("fill", "black");  
    })
}

// call the first function
showDefault()
