

// Gauge Chart


 var opts = {
  lines: 12, 
  angle: 0, 
  lineWidth: 0.11, 
  pointer: {
    length: 0.7, 
    strokeWidth: 0.035, 
    color: '#008B8B' 
  },
  limitMax: 'false',   
  colorStart: '#008B8B',   
  colorStop: '#008b8b   ',    
  strokeColor: '#E0E0E0',   
  generateGradient: true
};
var target = document.getElementById('demo-gauge'); 
var gauge = new Gauge(target).setOptions(opts); 
gauge.maxValue = 3000; 
gauge.animationSpeed = 32; 
gauge.set(850); 
gauge.setTextField(document.getElementById("demo-gauge-txt"));

// Pie chart

$('.chart').easyPieChart({
	easing: 'easeOutBounce',
	onStep: function(from, to, percent) {
	$(this.el).find('.percent').text(Math.round(percent));
	}
});

// Chatjs Charts

// Bar chart

var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

var barChartData = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			fillColor : "darkcyan",
			strokeColor : "rgba(0,0,0,0.0)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		},
		{
			fillColor : "#E0E0E0",
			strokeColor : "rgba(0,0,0,0.0)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		}
	]

}


// doughnut chart

var doughnutData = [
	{
		value: 300,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Red"
	},
	{
		value: 50,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "Green"
	},
	{
		value: 100,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "Yellow"
	},
	{
		value: 40,
		color: "#949FB1",
		highlight: "#A8B3C5",
		label: "Grey"
	},
	{
		value: 120,
		color: "#4D5360",
		highlight: "#616774",
		label: "Dark Grey"
	}

];

// line chart

var lineChartData = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			label: "My First dataset",
			fillColor : "rgba(220,220,220,0.2)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		},
		{
			label: "My Second dataset",
			fillColor : "rgba(151,187,205,0.2)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		}
	]

}


// pie chart

var pieData = [
	{
		value: 300,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Red"
	},
	{
		value: 50,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "Green"
	},
	{
		value: 100,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "Yellow"
	},
	{
		value: 40,
		color: "#949FB1",
		highlight: "#A8B3C5",
		label: "Grey"
	},
	{
		value: 120,
		color: "#4D5360",
		highlight: "#616774",
		label: "Dark Grey"
	}

];

// polor chart

var polarData = [
	{
		value: 300,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Red"
	},
	{
		value: 50,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "Green"
	},
	{
		value: 100,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "Yellow"
	},
	{
		value: 40,
		color: "#949FB1",
		highlight: "#A8B3C5",
		label: "Grey"
	},
	{
		value: 120,
		color: "#4D5360",
		highlight: "#616774",
		label: "Dark Grey"
	}

];

// radar chart

var radarChartData = {
	labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [65,59,90,81,56,55,40]
		},
		{
			label: "My Second dataset",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [28,48,40,19,96,27,100]
		}
	]
};



window.onload = function(){

	var ctx = document.getElementById("bar-canvas").getContext("2d");
	window.myBar = new Chart(ctx).Bar(barChartData, {
		responsive : true
	});

	var ctx = document.getElementById("doughnut-canvas").getContext("2d");
	window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});

	var ctx = document.getElementById("line-canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true
	});

	var ctx = document.getElementById("pie-canvas").getContext("2d");
	window.myPie = new Chart(ctx).Pie(pieData);

	var ctx = document.getElementById("polar-canvas").getContext("2d");
	window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
		responsive:true
	});

	window.myRadar = new Chart(document.getElementById("radar-canvas").getContext("2d")).Radar(radarChartData, {
		responsive: true
	});
};
