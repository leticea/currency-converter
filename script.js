var options = {
  series: [
    {
      name: "cambio",
      data: [
        {
          x: new Date("2018-02-12").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-13").getTime(),
          y: 5.3,
        },
        {
          x: new Date("2018-02-14").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-15").getTime(),
          y: 5.14,
        },
        {
          x: new Date("2018-02-16").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-17").getTime(),
          y: 5.3,
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  yaxis: {
    min: 5,
    tickAmount: 4,
    labels: {
      formatter: (value) => {
        return value.toFixed(1).replace(".", ",");
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  colors: ["#7c3aed"],
  tooltip: {
    
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
