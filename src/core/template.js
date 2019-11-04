function template(chartType, chartData) {
  const generateCommonTemplate = data => `FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "${chartType}",
    renderAt: "chart-container",
    width: "100%", height: "100%",
    dataFormat: "json",
    dataSource: {
      chart: {},
      categories: [{
        category: ${JSON.stringify(data[0][0], null, 2)}
      }],
      dataSet: ${JSON.stringify(data[0][1], null, 2)}
    }
  }).render();
});`;

  let jsTemplate = "";
  switch (true) {
    // Single series charts
    case [
      "column2d",
      "column3d",
      "line",
      "area2d",
      "bar2d",
      "bar3d",
      "pie2d",
      "pie3d",
      "doughnut2d",
      "doughnut3d",
      "pareto2d",
      "pareto3d",
      "funnel",
      "pyramid",
      "spline",
      "splinearea",
      "waterfall2d",
      "kagi"
    ].indexOf(chartType) >= 0: {
      jsTemplate = `FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "${chartType}",
    renderAt: "chart-container",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource: {
      chart: {},
      data: ${JSON.stringify(chartData, null, 2)}
    }
  }).render();
});`;
      break;
    }
    // Multi series charts
    case [
      "mscolumn2d",
      "mscolumn3d",
      "msline",
      "msbar2d",
      "msbar3d",
      "msarea",
      "marimekko",
      "stackedcolumn2d",
      "stackedcolumn3d",
      "stackedbar2d",
      "stackedbar3d",
      "stackedarea2d",
      "scrollcolumn2d",
      "scrollline2d",
      "scrollarea2d",
      "scrollstackedcolumn2d",
      "logmscolumn2d",
      "logmsline",
      "msspline",
      "mssplinearea",
      "errorline",
      "inversemsarea",
      "inversemscolumn2d",
      "inversemsline",
      "dragcolumn2d",
      "dragline",
      "dragarea",
      "radar",
      "msstepLine",
      "errorbar2d"
    ].indexOf(chartType) >= 0: {
      jsTemplate = generateCommonTemplate(chartData);
      break;
    }
    case [
      "mscombi2d",
      "mscombi3d",
      "mscolumnline3d",
      "stackedcolumn2dline",
      "stackedcolumn3dline"
    ].indexOf(chartType) >= 0: {
      const dataArrLen = chartData[0][1].length;
      chartData[0][1][dataArrLen - 1].renderAs = "line";
      jsTemplate = generateCommonTemplate(chartData);
      break;
    }
    case chartType === "mscombidy2d":
    case chartType === "mscolumn3dlinedy":
    case chartType === "stackedcolumn3dlinedy":
    case chartType === "scrollcombi2d":
    case chartType === "scrollcombidy2d": {
      const dataArrLen = chartData[0][1].length;
      chartData[0][1][dataArrLen - 1].renderAs = "line";
      chartData[0][1][dataArrLen - 1].parentYAxis = "S";
      jsTemplate = generateCommonTemplate(chartData);
      break;
    }
    case chartType === "gantt": {
      jsTemplate = `\n  FusionCharts.ready(function() {\n    var myChart = new FusionCharts({
        type: "${chartType}",
      renderAt: "chart-container",
      width: "100%", height: "100%",
      dataFormat: "json",
      dataSource: ${JSON.stringify(
        chartData,
        null,
        2
      )}\n    }).render();\n  });`;
      break;
    }

    case chartType === "heatmap": {
      jsTemplate = `\n  FusionCharts.ready(function() {\n    var myChart = new FusionCharts({
        type: "${chartType}",
      renderAt: "chart-container",
      width: "100%", height: "100%",
      dataFormat: "json",
      dataSource: ${JSON.stringify(
        chartData,
        null,
        2
      )}\n    }).render();\n  });`;
      break;
    }

    case chartType === "treemap": {
      jsTemplate = `\n  FusionCharts.ready(function() {\n    var myChart = new FusionCharts({
        type: "${chartType}",
      renderAt: "chart-container",
      width: "100%", height: "100%",
      dataFormat: "json",
      dataSource: ${JSON.stringify(
        chartData,
        null,
        2
      )}\n    }).render();\n  });`;
      break;
    }

    case chartType === "multiaxisline": {
      jsTemplate = `\n  FusionCharts.ready(function() {\n    var myChart = new FusionCharts({
        type: "${chartType}",
      renderAt: "chart-container",
      width: "100%", height: "100%",
      dataFormat: "json",
      dataSource: ${JSON.stringify(
        chartData,
        null,
        2
      )}\n    }).render();\n  });`;
      break;
    }

    case chartType === "multilevelpie": {
      jsTemplate = `\n  FusionCharts.ready(function() {\n    var myChart = new FusionCharts({
        type: "${chartType}",
      renderAt: "chart-container",
      width: "100%", height: "100%",
      dataFormat: "json",
      dataSource: ${JSON.stringify(
        chartData,
        null,
        2
      )}\n    }).render();\n  });`;
      break;
    }

    case chartType === "dragnode": {
      jsTemplate = `\n  FusionCharts.ready(function() {\n    var myChart = new FusionCharts({
        type: "${chartType}",
      renderAt: "chart-container",
      width: "100%", height: "100%",
      dataFormat: "json",
      dataSource: ${JSON.stringify(
        chartData,
        null,
        2
      )}\n    }).render();\n  });`;
      break;
    }

    case chartType === "candlestick": {
      jsTemplate = `\n  FusionCharts.ready(function() {\n    var myChart = new FusionCharts({
        type: "${chartType}",
      renderAt: "chart-container",
      width: "100%", height: "100%",
      dataFormat: "json",
      dataSource: ${JSON.stringify(
        chartData,
        null,
        2
      )}\n    }).render();\n  });`;
      break;
    }

    case chartType === "bulb":
    case chartType === "cylinder":
    case chartType === "hled":
    case chartType === "thermometer":
    case chartType === "vled":
    case chartType === "hbullet":
    case chartType === "vbullet": {
      jsTemplate = `\n  FusionCharts.ready(function() {\n    var myChart = new FusionCharts({
        type: "${chartType}",
      renderAt: "chart-container",
      width: "100%", height: "100%",
      dataFormat: "json",
      dataSource: ${JSON.stringify(
        chartData,
        null,
        2
      )}\n    }).render();\n  });`;
      break;
    }

    case chartType === "timeseries": {
      jsTemplate = `Promise.all([
   loadData('https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/data.json'),
   loadData('https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/schema.json')
]).then(res => {
const data = res[0];
const schema = res[1];

const dataStore = new FusionCharts.DataStore(data, schema);

new FusionCharts({
   type: '${chartType}',
   renderAt: 'chart-container',
   width: '100%',
   height: '100%',
   dataSource: {
      caption: {
      text: 'Daily Visitors Count of a Website',
      },
      yAxis: [
      {
         columnName: 'Daily Visitors',
         plotType: 'column',
         title: 'Daily Visitors',
      },
      ],
      data: dataStore.getDataTable(),
   },
}).render();
});
`;
      break;
    }

    default:
      throw new Error("Invalid chart type");
  }
  return {
    jsCode: jsTemplate,
    htmlCode: '<div id="chart-container"></div>',
    cssCode: ""
  };
}

module.exports = template;
