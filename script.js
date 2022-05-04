Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: '2019各國來台旅遊比例圖'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: '其他',
      y: 29.6,
      sliced: true,
      selected: true
    }, {
      name: '中國',
      y: 22
    }, {
      name: '日本',
      y: 17
    }, {
      name: '港澳',
      y: 14
    }, {
      name: '南韓',
      y: 10
    }, {
      name: '美國',
      y: 5
    }, {
      name: '馬來西亞',
      y: 4.4
    }, {
      name: '菲律賓',
      y: 4.2
    }, {
      name: '新加坡',
      y: 3.8
    }]
  }]
});
