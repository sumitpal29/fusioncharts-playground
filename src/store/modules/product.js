import examples from './examples.js';

// initial state
const state = {
  product: {
    selectedChartCategory: '',
    selectedChartType: '',
    version: 'latest',
  },
  categories: {
    single_series: {
      display: "Single Series Charts",
      charts: [
        {
          display: "Column 2D",
          value: "column2d"
        },
        {
          display: "Column 3D",
          value: "column3d"
        },
        {
          display: "Line 2D",
          value: "line"
        },
        {
          display: "Area 2D",
          value: "area2d"
        },
        {
          display: "Bar 2D",
          value: "bar2d"
        },
        {
          display: "Bar 3D",
          value: "bar3d"
        },
        {
          display: "Pie 2D",
          value: "pie2d"
        },
        {
          display: "Pie 3D",
          value: "pie3d"
        },
        {
          display: "Doughnut 2D",
          value: "doughnut2d"
        },
        {
          display: "Doughnut 3D",
          value: "doughnut3d"
        },
        {
          display: "Pareto 2D",
          value: "pareto2d"
        },
        {
          display: "Pareto 3D",
          value: "pareto3d"
        },
        {
          display: "Funnel",
          value: "funnel"
        },
        {
          display: "Pyramid",
          value: "pyramid"
        },
        {
          display: "Single-Series Spline 2D",
          value: "spline"
        },
        {
          display: "Single-Series Spline Area 2D",
          value: "splinearea"
        },
        {
          display: "Waterfall / Cascade Chart",
          value: "waterfall2d"
        },
        {
          display: "Kagi Chart",
          value: "kagi"
        }
      ]
    },
    multi_series: {
      display: "Multi Series Charts",
      charts: [
        {
          display: "Multi-series Column 2D",
          value: "mscolumn2d"
        },
        {
          display: "Multi-series Column 3D",
          value: "mscolumn3d"
        },
        {
          display: "Multi-series Line 2D",
          value: "msline"
        },
        {
          display: "Multi-series Bar 2D",
          value: "msbar2d"
        },
        {
          display: "Multi-series Bar 3D",
          value: "msbar3d"
        },
        {
          display: "Multi-series Area 2D",
          value: "msarea"
        },
        {
          display: "Marimekko",
          value: "marimekko"
        },
        {
          display: "Stacked Column 2D",
          value: "stackedcolumn2d"
        },
        {
          display: "Stacked Column 3D",
          value: "stackedcolumn3d"
        },
        {
          display: "Stacked Bar 2D",
          value: "stackedbar2d"
        },
        {
          display: "Stacked Bar 3D",
          value: "stackedbar3d"
        },
        {
          display: "Stacked Area 2D",
          value: "stackedarea2d"
        },
        {
          name:
            "Multi-series 2D Single Y Combination Chart (Column + Line + Area)",
          value: "mscombi2d"
        },
        {
          name:
            "Multi-series 3D Single Y Combination Chart (Column + Line + Area)",
          value: "mscombi3d"
        },
        {
          display: "Multi-series Column 3D + Line - Single Y Axis",
          value: "mscolumnline3d"
        },
        {
          display: "Stacked Column2D + Line single Y Axis",
          value: "stackedcolumn2dline"
        },
        {
          display: "Stacked Column3D + Line single Y Axis",
          value: "stackedcolumn3dline"
        },
        {
          name:
            "Multi-series 2D Dual Y Combination Chart (Column + Line + Area)",
          value: "mscombidy2d"
        },
        {
          display: "Multi-series Column 3D + Line - Dual Y Axis",
          value: "mscolumn3dlinedy"
        },
        {
          display: "Stacked Column 3D + Line Dual Y Axis",
          value: "stackedcolumn3dlinedy"
        },
        {
          display: "Scroll Column 2D",
          value: "scrollcolumn2d"
        },
        {
          display: "Scroll Line 2D",
          value: "scrollline2d"
        },
        {
          display: "Scroll Area 2D",
          value: "scrollarea2d"
        },
        {
          display: "Scroll Stacked Column 2D",
          value: "scrollstackedcolumn2d"
        },
        {
          display: "Scroll Combination 2D (Single Y)",
          value: "scrollcombi2d"
        },
        {
          display: "Scroll Combination 2D (Dual Y)",
          value: "scrollcombidy2d"
        },
        {
          display: "Real-time Area",
          value: "realtimearea"
        },
        {
          display: "Real-time Column",
          value: "realtimecolumn"
        },
        {
          display: "Real-time Line",
          value: "realtimeline"
        },
        {
          display: "Real-time Stacked Area",
          value: "realtimestackedarea"
        },
        {
          display: "Real-time Stacked Column",
          value: "realtimestackedcolumn"
        },
        {
          display: "Real-time Line (Dual Y)",
          value: "realtimelinedy"
        },
        {
          display: "Spark Line",
          value: "sparkline"
        },
        {
          display: "Spark Column",
          value: "sparkcolumn"
        },
        {
          display: "Spark Win/Loss",
          value: "sparkwinloss"
        },
        {
          display: "Logarithmic Column 2D Chart",
          value: "logmscolumn2d"
        },
        {
          display: "Logarithmic Line 2D Chart",
          value: "logmsline"
        },
        {
          display: "Multi-Series Spline 2D",
          value: "msspline"
        },
        {
          display: "Multi-Series Spline Area 2D",
          value: "mssplinearea"
        },
        {
          display: "Error Bar Chart",
          value: "errorbar2d"
        },
        {
          display: "Error Line 2D Chart",
          value: "errorline"
        },
        {
          display: "Inverse y-Axis Area 2D Chart",
          value: "inversemsarea"
        },
        {
          display: "Inverse y-Axis Column 2D Chart",
          value: "inversemscolumn2d"
        },
        {
          display: "Inverse y-Axis Line 2D Chart",
          value: "inversemsline"
        },
        {
          display: "Drag-able Column 2D Chart",
          value: "dragcolumn2d"
        },
        {
          display: "Drag-able Line 2D Chart",
          value: "dragline"
        },
        {
          display: "Drag-able Area 2D Chart",
          value: "dragarea"
        },
        {
          display: "Radar Chart",
          value: "radar"
        },
        {
          display: "Box and Whisker Chart",
          value: "boxandwhisker2d"
        },
        {
          display: "Step Line Charts",
          value: "msstepLine"
        }
      ]
    },
    zoom_charts: {
      display: "Zoom Line Charts",
      charts: [
        {
          display: "Zoom Line",
          value: "zoomline"
        },
        {
          display: "Zoom Line DY",
          value: "zoomlinedy"
        }
      ]
    },
    multi_stacked_charts: {
      display: "Multi-Dataset Stacked Charts",
      charts: [
        {
          display: "Multi-series Stacked Column 2D",
          value: "msstackedcolumn2d"
        }
      ]
    },
    multi_dataseries_stacked_charts: {
      display: "Multi-DataSeries Stacked Charts",
      charts: [
        {
          display: "Multi-series Stacked Column 2D + Line Dual Y Axis",
          value: "msstackedcolumn2dlinedy"
        }
      ]
    },
    xy_charts: {
      display: "XY Charts",
      charts: [
        {
          display: "Scatter Chart",
          value: "scatter"
        },
        {
          display: "Zoom Scatter Chart",
          value: "zoomscatter"
        },
        {
          display: "Bubble Chart",
          value: "bubble"
        },
        {
          display: "Error Scatter Chart",
          value: "errorscatter"
        },
        {
          display: "Select-Scatter Chart",
          value: "selectscatter"
        }
      ]
    },
    gauges_charts: {
      display: "Gauges",
      charts: [
        {
          display: "Real-time Bulb",
          value: "bulb"
        },
        {
          display: "Real-time Cylinder",
          value: "cylinder"
        },
        {
          display: "Real-time Horizontal LED",
          value: "hled"
        },
        {
          display: "Real-time Thermometer",
          value: "thermometer"
        },
        {
          display: "Real-time Vertical LED",
          value: "vled"
        },
        {
          display: "Horizontal bullet graph",
          value: "hbullet"
        },
        {
          display: "Vertical bullet graph",
          value: "vbullet"
        }
      ]
    },
    lgauges_charts: {
      display: "Linear Gauges",
      charts: [
        {
          display: "Real-time Horizontal Linear",
          value: "hlineargauge"
        }
      ]
    },
    angulargauge_charts: {
      display: "Angular Gauge",
      charts: [
        {
          display: "Real-time Angular",
          value: "angulargauge"
        }
      ]
    },
    gantt_charts: {
      display: "Gantt Charts",
      charts: [
        {
          display: "Gantt Chart",
          value: "gantt"
        }
      ]
    },
    treemap_charts: {
      display: "Treemap Charts",
      charts: [
        {
          display: "Treemap Chart",
          value: "treemap"
        }
      ]
    },
    heatmap_charts: {
      display: "Heat Map Charts",
      charts: [
        {
          display: "Heat Map Chart",
          value: "heatmap"
        }
      ]
    },
    candlestick_charts: {
      display: "Candle-stick Charts",
      charts: [
        {
          display: "Candle-Stick Chart",
          value: "candlestick"
        }
      ]
    },
    dragnode_charts: {
      display: "Drag Node Charts",
      charts: [
        {
          display: "Drag Node Chart",
          value: "dragnode"
        }
      ]
    },
    multiaxisline_charts: {
      display: "Multi-axis Line Charts",
      charts: [
        {
          display: "Multi-axis Line Chart",
          value: "multiaxisline"
        }
      ]
    },
    multilevelpie_charts: {
      display: "Multi-level Pie Charts",
      charts: [
        {
          display: "Multi-level Pie Chart",
          value: "multilevelpie"
        }
      ]
    },
    maps: {
      display: "Maps",
      charts: [
        {
          display: "Maps"
        }
      ]
    },
    fusion_time: {
      display: "FusionTime",
      charts: [
        {
          display: "timeseries",
          value: "timeseries"
        }
      ]
    }
  },
  examples,
};
// getters
const getters = {
  GETCATEGORY(state) {
    return Object.keys(state.categories).map(key => ({
      value: key,
      display: state.categories[key].display
    }));
  },
  GETCATEGORYCHARTS: state => category => category ? state.categories[category].charts : [],
  GETDEFAULTEXAMPLE: state => type => state.examples[type] || null,
}
// actions
const actions = {
  UPDATE_PRODUCT: (context, productData) => {
    context.commit('SET_UPDATE_PRODUCT', productData);
  }
}
// mutations
const mutations = {
  SET_UPDATE_PRODUCT: (state, data) => {
    state.product.selectedChartCategory = data.chartCategory;
    state.product.selectedChartType = data.chartType;
    state.product.selectedFCVersion = data.selectedFCVersion;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
