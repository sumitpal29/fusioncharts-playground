 const examples = {
  single_series: {
    data: [
      {
        label: 'Gold',
        value: 30,
      },
      {
        label: 'Silver',
        value: 21,
      },
    ],
  },
  multi_series: {
    categories: [
      {
        category: [
          {
            label: 'Sounds',
          },
        ],
      },
    ],
    dataset: [
      {
        seriesname: 'Thunder',
        data: [
          {
            value: '800',
          },
        ],
      },
      {
        seriesname: 'Roar',
        data: [
          {
            value: '100',
          },
        ],
      },
    ],
  },
  zoom_charts: {
    categories: [
      {
        category:
          'Jan 01|Jan 02|Jan 03|Jan 04|Jan 05|Jan 06|Jan 07|Jan 08|Jan 09|Jan 10|Jan 11|Jan 12|Jan 13|Jan 14|Jan 15|Jan 16|Jan 17|Jan 18|Jan 19|Jan 20|Jan 21|Jan 22|Jan 23|Jan 24|Jan 25|Jan 26|Jan 27|Jan 28|Jan 29|Jan 30|Jan 31|Feb 01|Feb 02|Feb 03|Feb 04|Feb 05|Feb 06|Feb 07|Feb 08|Feb 09|Feb 10|Feb 11|Feb 12|Feb 13|Feb 14|Feb 15|Feb 16|Feb 17|Feb 18|Feb 19|Feb 20|Feb 21|Feb 22|Feb 23|Feb 24|Feb 25|Feb 26|Feb 27|Feb 28|Mar 01|Mar 02|Mar 03|Mar 04|Mar 05|Mar 06|Mar 07|Mar 08|Mar 09|Mar 10|Mar 11|Mar 12|Mar 13|Mar 14|Mar 15|Mar 16|Mar 17|Mar 18|Mar 19|Mar 20|Mar 21|Mar 22|Mar 23|Mar 24|Mar 25|Mar 26|Mar 27|Mar 28|Mar 29|Mar 30|Mar 31|Apr 01|Apr 02|Apr 03|Apr 04|Apr 05|Apr 06|Apr 07|Apr 08|Apr 09|Apr 10|Apr 11|Apr 12|Apr 13|Apr 14|Apr 15|Apr 16|Apr 17|Apr 18|Apr 19|Apr 20|Apr 21|Apr 22|Apr 23|Apr 24|Apr 25|Apr 26|Apr 27|Apr 28|Apr 29|Apr 30|May 01|May 02|May 03|May 04|May 05|May 06|May 07|May 08|May 09|May 10|May 11|May 12|May 13|May 14|May 15|May 16|May 17|May 18|May 19|May 20|May 21|May 22|May 23|May 24|May 25|May 26|May 27|May 28|May 29|May 30|May 31|Jun 01|Jun 02|Jun 03|Jun 04|Jun 05|Jun 06|Jun 07|Jun 08|Jun 09|Jun 10|Jun 11|Jun 12|Jun 13|Jun 14|Jun 15|Jun 16|Jun 17|Jun 18|Jun 19|Jun 20|Jun 21|Jun 22|Jun 23|Jun 24|Jun 25|Jun 26|Jun 27|Jun 28|Jun 29|Jun 30|Jul 01|Jul 02|Jul 03|Jul 04|Jul 05|Jul 06|Jul 07|Jul 08|Jul 09|Jul 10|Jul 11|Jul 12|Jul 13|Jul 14|Jul 15|Jul 16|Jul 17|Jul 18|Jul 19|Jul 20|Jul 21|Jul 22|Jul 23|Jul 24|Jul 25|Jul 26|Jul 27|Jul 28|Jul 29|Jul 30|Jul 31|Aug 01|Aug 02|Aug 03|Aug 04|Aug 05|Aug 06|Aug 07|Aug 08|Aug 09|Aug 10|Aug 11|Aug 12|Aug 13|Aug 14|Aug 15|Aug 16|Aug 17|Aug 18|Aug 19|Aug 20|Aug 21|Aug 22|Aug 23|Aug 24|Aug 25|Aug 26|Aug 27|Aug 28|Aug 29|Aug 30|Aug 31|Sep 01|Sep 02|Sep 03|Sep 04|Sep 05|Sep 06|Sep 07|Sep 08|Sep 09|Sep 10|Sep 11|Sep 12|Sep 13|Sep 14|Sep 15|Sep 16|Sep 17|Sep 18|Sep 19|Sep 20|Sep 21|Sep 22|Sep 23|Sep 24|Sep 25|Sep 26|Sep 27|Sep 28|Sep 29|Sep 30|Oct 01|Oct 02|Oct 03|Oct 04|Oct 05|Oct 06|Oct 07|Oct 08|Oct 09|Oct 10|Oct 11|Oct 12|Oct 13|Oct 14|Oct 15|Oct 16|Oct 17|Oct 18|Oct 19|Oct 20|Oct 21|Oct 22|Oct 23|Oct 24|Oct 25|Oct 26|Oct 27|Oct 28|Oct 29|Oct 30|Oct 31|Nov 01|Nov 02|Nov 03|Nov 04|Nov 05|Nov 06|Nov 07|Nov 08|Nov 09|Nov 10|Nov 11|Nov 12|Nov 13|Nov 14|Nov 15|Nov 16|Nov 17|Nov 18|Nov 19|Nov 20|Nov 21|Nov 22|Nov 23|Nov 24|Nov 25|Nov 26|Nov 27|Nov 28|Nov 29|Nov 30|Dec 01|Dec 02|Dec 03|Dec 04|Dec 05|Dec 06|Dec 07|Dec 08|Dec 09|Dec 10|Dec 11|Dec 12|Dec 13|Dec 14|Dec 15|Dec 16|Dec 17|Dec 18|Dec 19|Dec 20|Dec 21|Dec 22|Dec 23|Dec 24|Dec 25|Dec 26|Dec 27|Dec 28|Dec 29|Dec 30|Dec 31',
      },
    ],
    dataset: [
      {
        seriesname: 'harrysfoodmart.com',
        data:
          '978|976|955|981|992|964|973|949|985|962|977|955|988|959|985|965|991|985|966|989|960|944|976|980|940|941|945|952|973|946|951|983|942|964|937|942|963|971|969|967|934|935|956|974|930|936|935|973|979|990|994|992|994|984|991|986|963|985|1006|965|958|976|993|974|995|989|966|965|1011|995|1007|978|985|1012|997|985|1004|987|986|981|991|982|992|983|1018|994|976|989|1022|989|1002|983|1015|1006|1005|1003|1017|1014|995|1007|1001|1019|1012|1005|1027|1011|1013|1035|1010|1011|1011|1036|1041|1005|1005|997|1012|1032|1025|1020|998|1018|1000|1009|1005|1004|1042|1047|1021|1032|1019|1038|1050|1037|1019|1018|1035|1055|1028|1049|1013|1028|1023|1054|1041|1051|1069|1051|1072|1049|1054|1035|1072|1042|1048|1083|1054|1048|1065|1046|1055|1056|1085|1046|1048|1048|1068|1089|1074|1078|1046|1052|1082|1052|1067|1058|1051|1052|1082|1060|1076|1077|1059|1070|1082|1093|1100|1089|1079|1075|1087|1089|1088|1106|1107|1067|1076|1101|1094|1078|1097|1094|1083|1066|1079|1111|1100|1085|1091|1095|1081|1091|1077|1095|1107|1083|1116|1118|1101|1111|1096|1077|1086|1117|1087|1105|1107|1094|1112|1101|1084|1094|1125|1099|1108|1084|1099|1120|1122|1092|1120|1121|1094|1114|1099|1129|1095|1125|1127|1121|1129|1110|1097|1136|1110|1098|1131|1125|1144|1104|1117|1105|1105|1145|1102|1143|1115|1147|1149|1129|1108|1109|1130|1153|1121|1127|1133|1120|1155|1120|1147|1118|1117|1145|1152|1145|1130|1157|1135|1115|1156|1163|1131|1123|1137|1151|1160|1152|1166|1144|1137|1124|1151|1129|1133|1143|1139|1171|1135|1132|1174|1170|1163|1175|1152|1142|1160|1148|1173|1158|1160|1151|1142|1168|1153|1143|1157|1142|1172|1186|1176|1185|1175|1178|1184|1166|1148|1166|1186|1187|1180|1179|1161|1174|1155|1172|1173|1179|1149|1170|1175|1162|1151|1152|1163|1155|1197|1174|1199|1180|1160|1174|1159|1168|1160',
      },
      {
        seriesname: 'harrysfashion.com',
        data:
          '1053|1057|1084|1082|1098|1055|1068|1067|1074|1056|1067|1078|1079|1084|1041|1052|1066|1080|1049|1051|1049|1044|1083|1053|1038|1077|1046|1067|1053|1033|1047|1055|1031|1074|1031|1041|1071|1057|1035|1070|1050|1069|1054|1049|1022|1044|1049|1058|1064|1088|1093|1103|1085|1072|1104|1106|1078|1061|1078|1105|1105|1062|1076|1074|1114|1069|1091|1086|1094|1072|1079|1088|1082|1075|1110|1120|1108|1102|1090|1088|1092|1102|1110|1111|1085|1113|1110|1116|1095|1105|1105|1122|1133|1132|1093|1097|1120|1105|1135|1106|1108|1135|1098|1136|1122|1113|1113|1145|1103|1127|1104|1126|1147|1120|1119|1120|1132|1107|1149|1147|1149|1141|1145|1152|1117|1144|1157|1134|1157|1120|1125|1153|1141|1132|1158|1134|1166|1167|1170|1163|1139|1171|1145|1156|1158|1154|1196|1196|1169|1174|1174|1195|1161|1201|1208|1188|1182|1188|1162|1174|1174|1211|1189|1211|1172|1211|1179|1199|1216|1184|1209|1181|1186|1174|1185|1220|1206|1190|1206|1201|1190|1209|1208|1189|1195|1188|1193|1206|1214|1205|1215|1200|1194|1210|1205|1236|1226|1208|1228|1235|1197|1197|1198|1224|1220|1210|1226|1244|1228|1241|1237|1201|1208|1238|1213|1222|1213|1249|1222|1221|1230|1223|1214|1251|1234|1220|1240|1213|1252|1224|1222|1234|1262|1255|1225|1226|1242|1240|1250|1265|1235|1228|1261|1221|1230|1235|1260|1273|1253|1268|1258|1233|1258|1248|1230|1270|1246|1242|1246|1253|1253|1257|1253|1266|1248|1247|1257|1245|1281|1271|1272|1248|1292|1251|1253|1257|1259|1288|1252|1297|1290|1268|1291|1258|1263|1254|1302|1279|1272|1271|1281|1261|1263|1289|1294|1272|1296|1264|1282|1268|1296|1280|1281|1277|1277|1292|1266|1310|1288|1312|1308|1300|1289|1273|1282|1300|1322|1301|1314|1296|1305|1305|1327|1323|1295|1314|1298|1312|1330|1293|1309|1286|1309|1332|1300|1295|1325|1322|1305|1323|1300|1308|1299|1324|1338|1313|1329|1331|1299|1329|1344|1335|1342|1307|1314|1326|1331|1328|1328|1311|1352|1328|1309|1311|1312',
      },
    ],
  },
  multi_stacked_charts: {
    categories: [
      {
        category: [
          {
            label: 'Q1',
          },
          {
            label: 'Q2',
          },
          {
            label: 'Q3',
          },
          {
            label: 'Q4',
          },
        ],
      },
    ],
    dataset: [
      {
        dataset: [
          {
            seriesname: 'Processed Food',
            data: [
              {
                value: '30',
              },
              {
                value: '26',
              },
              {
                value: '29',
              },
              {
                value: '31',
              },
            ],
          },
          {
            seriesname: 'Un-Processed Food',
            data: [
              {
                value: '21',
              },
              {
                value: '28',
              },
              {
                value: '39',
              },
              {
                value: '41',
              },
            ],
          },
        ],
      },
      {
        dataset: [
          {
            seriesname: 'Electronics',
            data: [
              {
                value: '27',
              },
              {
                value: '25',
              },
              {
                value: '28',
              },
              {
                value: '26',
              },
            ],
          },
          {
            seriesname: 'Apparels',
            data: [
              {
                value: '17',
              },
              {
                value: '15',
              },
              {
                value: '18',
              },
              {
                value: '16',
              },
            ],
          },
          {
            seriesname: 'Others',
            data: [
              {
                value: '12',
              },
              {
                value: '17',
              },
              {
                value: '16',
              },
              {
                value: '15',
              },
            ],
          },
        ],
      },
    ],
  },
  multi_dataseries_stacked_charts: {
    categories: [
      {
        category: [
          {
            label: 'Q1',
          },
          {
            label: 'Q2',
          },
          {
            label: 'Q3',
          },
          {
            label: 'Q4',
          },
        ],
      },
    ],
    dataset: [
      {
        dataset: [
          {
            seriesname: 'Processed Food',
            data: [
              {
                value: '30',
              },
              {
                value: '26',
              },
              {
                value: '33',
              },
              {
                value: '31',
              },
            ],
          },
          {
            seriesname: 'Un-Processed Food',
            data: [
              {
                value: '21',
              },
              {
                value: '28',
              },
              {
                value: '39',
              },
              {
                value: '41',
              },
            ],
          },
        ],
      },
      {
        dataset: [
          {
            seriesname: 'Electronics',
            data: [
              {
                value: '27',
              },
              {
                value: '25',
              },
              {
                value: '28',
              },
              {
                value: '26',
              },
            ],
          },
          {
            seriesname: 'Apparels',
            data: [
              {
                value: '17',
              },
              {
                value: '15',
              },
              {
                value: '18',
              },
              {
                value: '16',
              },
            ],
          },
        ],
      },
    ],
    lineset: [
      {
        seriesname: 'Profit %',
        showValues: '0',
        data: [
          {
            value: '14',
          },
          {
            value: '16',
          },
          {
            value: '15',
          },
          {
            value: '17',
          },
        ],
      },
    ],
  },
  xy_charts: {},
  gauges_charts: {
    colorRange: {
      color: [
        {
          minValue: '0',
          maxValue: '50',
          code: '#e44a00',
        },
        {
          minValue: '50',
          maxValue: '75',
          code: '#f8bd19',
        },
        {
          minValue: '75',
          maxValue: '100',
          code: '#6baa01',
        },
      ],
    },
    dials: {
      dial: [
        {
          value: '67',
        },
      ],
    },
  },
  lgauges_charts: {
    colorRange: {
      color: [
        {
          minValue: '0',
          maxValue: '35',
          label: 'Low',
        },
        {
          minValue: '35',
          maxValue: '70',
          label: 'Moderate',
        },
        {
          minValue: '70',
          maxValue: '100',
          label: 'High',
        },
      ],
    },
    pointers: {
      pointer: [
        {
          value: '75',
        },
      ],
    },
    trendPoints: {
      point: [
        {
          startValue: '70',
          displayValue: ' ',
          dashed: '1',
          showValues: '0',
        },
        {
          startValue: '85',
          displayValue: ' ',
          dashed: '1',
          showValues: '0',
        },
        {
          startValue: '70',
          endValue: '85',
          displayValue: ' ',
          alpha: '40',
        },
      ],
    },
    annotations: {
      origw: '400',
      origh: '190',
      autoscale: '1',
      groups: [
        {
          id: 'range',
          items: [
            {
              id: 'rangeBg',
              type: 'rectangle',
              x: '$chartCenterX-115',
              y: '$chartEndY-35',
              tox: '$chartCenterX +115',
              toy: '$chartEndY-15',
              fillcolor: '#0075c2',
            },
            {
              id: 'rangeText',
              type: 'Text',
              fontSize: '11',
              fillcolor: '#ffffff',
              text: 'Recommended Utilization Range : 70% - 85%',
              x: '$chartCenterX',
              y: '$chartEndY-25',
            },
          ],
        },
      ],
    },
  },
  angulargauge_charts: {
    colorRange: {
      color: [
        {
          minValue: '0',
          maxValue: '50',
          code: '#e44a00',
        },
        {
          minValue: '50',
          maxValue: '75',
          code: '#f8bd19',
        },
        {
          minValue: '75',
          maxValue: '100',
          code: '#6baa01',
        },
      ],
    },
    dials: {
      dial: [
        {
          value: '67',
        },
      ],
    },
  },
  gantt_charts: {
    categories: [
      {
        bgcolor: '#999999',
        category: [
          {
            start: '1/4/2014',
            end: '30/6/2014',
            label: 'Months',
            align: 'middle',
            fontcolor: '#ffffff',
            fontsize: '12',
          },
        ],
      },
      {
        bgcolor: '#999999',
        align: 'middle',
        fontcolor: '#ffffff',
        fontsize: '12',
        category: [
          {
            start: '1/4/2014',
            end: '30/4/2014',
            label: 'April',
          },
          {
            start: '1/5/2014',
            end: '31/5/2014',
            label: 'May',
          },
          {
            start: '1/6/2014',
            end: '30/6/2014',
            label: 'June',
          },
        ],
      },
      {
        bgcolor: '#ffffff',
        fontcolor: '#333333',
        fontsize: '11',
        align: 'center',
        category: [
          {
            start: '1/4/2014',
            end: '5/4/2014',
            label: 'Week 1',
          },
          {
            start: '6/4/2014',
            end: '12/4/2014',
            label: 'Week 2',
          },
          {
            start: '13/4/2014',
            end: '19/4/2014',
            label: 'Week 3',
          },
          {
            start: '20/4/2014',
            end: '26/4/2014',
            label: 'Week 4',
          },
          {
            start: '27/4/2014',
            end: '3/5/2014',
            label: 'Week 5',
          },
          {
            start: '4/5/2014',
            end: '10/5/2014',
            label: 'Week 6',
          },
          {
            start: '11/5/2014',
            end: '17/5/2014',
            label: 'Week 7',
          },
          {
            start: '18/5/2014',
            end: '24/5/2014',
            label: 'Week 8',
          },
          {
            start: '25/5/2014',
            end: '31/5/2014',
            label: 'Week 9',
          },
          {
            start: '1/6/2014',
            end: '7/6/2014',
            label: 'Week 10',
          },
          {
            start: '8/6/2014',
            end: '14/6/2014',
            label: 'Week 11',
          },
          {
            start: '15/6/2014',
            end: '21/6/2014',
            label: 'Week 12',
          },
          {
            start: '22/6/2014',
            end: '28/6/2014',
            label: 'Week 13',
          },
        ],
      },
    ],
    processes: {
      headertext: 'Task',
      fontcolor: '#000000',
      fontsize: '11',
      isanimated: '1',
      bgcolor: '#6baa01',
      headervalign: 'bottom',
      headeralign: 'left',
      headerbgcolor: '#999999',
      headerfontcolor: '#ffffff',
      headerfontsize: '12',
      align: 'left',
      isbold: '1',
      bgalpha: '25',
      process: [
        {
          label: 'Clear site',
          id: '1',
        },
        {
          label: 'Excavate Foundation',
          id: '2',
          hoverBandColor: '#e44a00',
          hoverBandAlpha: '40',
        },
        {
          label: 'Concrete Foundation',
          id: '3',
          hoverBandColor: '#e44a00',
          hoverBandAlpha: '40',
        },
        {
          label: 'Footing to DPC',
          id: '4',
          hoverBandColor: '#e44a00',
          hoverBandAlpha: '40',
        },
        {
          label: 'Drainage Services',
          id: '5',
          hoverBandColor: '#e44a00',
          hoverBandAlpha: '40',
        },
        {
          label: 'Backfill',
          id: '6',
          hoverBandColor: '#e44a00',
          hoverBandAlpha: '40',
        },
        {
          label: 'Ground Floor',
          id: '7',
        },
        {
          label: 'Walls on First Floor',
          id: '8',
        },
        {
          label: 'First Floor Carcass',
          id: '9',
          hoverBandColor: '#e44a00',
          hoverBandAlpha: '40',
        },
        {
          label: 'First Floor Deck',
          id: '10',
          hoverBandColor: '#e44a00',
          hoverBandAlpha: '40',
        },
        {
          label: 'Roof Structure',
          id: '11',
        },
        {
          label: 'Roof Covering',
          id: '12',
        },
        {
          label: 'Rainwater Gear',
          id: '13',
        },
        {
          label: 'Windows',
          id: '14',
        },
        {
          label: 'External Doors',
          id: '15',
        },
        {
          label: 'Connect Electricity',
          id: '16',
        },
        {
          label: 'Connect Water Supply',
          id: '17',
          hoverBandColor: '#e44a00',
          hoverBandAlpha: '40',
        },
        {
          label: 'Install Air Conditioning',
          id: '18',
          hoverBandColor: '#e44a00',
          hoverBandAlpha: '40',
        },
        {
          label: 'Interior Decoration',
          id: '19',
          hoverBandColor: '#e44a00',
          hoverBandAlpha: '40',
        },
        {
          label: 'Fencing And signs',
          id: '20',
        },
        {
          label: 'Exterior Decoration',
          id: '21',
          hoverBandColor: '#e44a00',
          hoverBandAlpha: '40',
        },
        {
          label: 'Setup racks',
          id: '22',
        },
      ],
    },
    datatable: {
      showprocessname: '1',
      namealign: 'left',
      fontcolor: '#000000',
      fontsize: '10',
      valign: 'right',
      align: 'center',
      headervalign: 'bottom',
      headeralign: 'center',
      headerbgcolor: '#999999',
      headerfontcolor: '#ffffff',
      headerfontsize: '12',
      datacolumn: [
        {
          bgcolor: '#eeeeee',
          headertext: 'Actual{br}Start{br}Date',
          text: [
            {
              label: '9/4/2014',
            },
            {
              label: '13/4/2014',
            },
            {
              label: '26/4/2014',
              bgcolor: '#e44a00',
              bgAlpha: '40',
            },
            {
              label: '4/5/2014',
              bgcolor: '#e44a00',
              bgAlpha: '40',
            },
            {
              label: '6/5/2014',
            },
            {
              label: '5/5/2014',
              bgcolor: '#e44a00',
              bgAlpha: '40',
            },
            {
              label: '11/5/2014',
            },
            {
              label: '16/5/2014',
            },
            {
              label: '16/5/2014',
            },
            {
              label: '21/5/2014',
              bgcolor: '#e44a00',
              bgAlpha: '40',
            },
            {
              label: '25/5/2014',
            },
            {
              label: '28/5/2014',
            },
            {
              label: '4/6/2014',
            },
            {
              label: '4/6/2014',
            },
            {
              label: '4/6/2014',
            },
            {
              label: '2/6/2014',
            },
            {
              label: '5/6/2014',
            },
            {
              label: '18/6/2014',
              bgcolor: '#e44a00',
              bgAlpha: '40',
            },
            {
              label: '16/6/2014',
              bgcolor: '#e44a00',
              bgAlpha: '40',
            },
            {
              label: '23/6/2014',
            },
            {
              label: '18/6/2014',
            },
            {
              label: '25/6/2014',
            },
          ],
        },
        {
          bgcolor: '#eeeeee',
          headertext: 'Actual{br}End{br}Date',
          text: [
            {
              label: '12/4/2014',
            },
            {
              label: '25/4/2014',
              bgcolor: '#e44a00',
              bgAlpha: '40',
            },
            {
              label: '4/5/2014',
              bgcolor: '#e44a00',
              bgAlpha: '40',
            },
            {
              label: '10/5/2014',
            },
            {
              label: '10/5/2014',
            },
            {
              label: '11/5/2014',
              bgcolor: '#e44a00',
              bgAlpha: '40',
            },
            {
              label: '14/5/2014',
            },
            {
              label: '19/5/2014',
            },
            {
              label: '21/5/2014',
              bgcolor: '#e44a00',
              bgAlpha: '40',
            },
            {
              label: '24/5/2014',
              bgcolor: '#e44a00',
              bgAlpha: '40',
            },
            {
              label: '27/5/2014',
            },
            {
              label: '1/6/2014',
            },
            {
              label: '6/6/2014',
            },
            {
              label: '4/6/2014',
            },
            {
              label: '4/6/2014',
            },
            {
              label: '7/6/2014',
            },
            {
              label: '17/6/2014',
              bgcolor: '#e44a00',
              bgAlpha: '40',
            },
            {
              label: '20/6/2014',
              bgcolor: '#e44a00',
              bgAlpha: '40',
            },
            {
              label: '23/6/2014',
            },
            {
              label: '23/6/2014',
            },
            {
              label: '23/6/2014',
              bgcolor: '#e44a00',
              bgAlpha: '40',
            },
            {
              label: '28/6/2014',
            },
          ],
        },
      ],
    },
    tasks: {
      task: [
        {
          label: 'Planned',
          processid: '1',
          start: '9/4/2014',
          end: '12/4/2014',
          id: '1-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '1',
          start: '9/4/2014',
          end: '12/4/2014',
          id: '1',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Planned',
          processid: '2',
          start: '13/4/2014',
          end: '23/4/2014',
          id: '2-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '2',
          start: '13/4/2014',
          end: '25/4/2014',
          id: '2',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Delay',
          processid: '2',
          start: '23/4/2014',
          end: '25/4/2014',
          id: '2-2',
          color: '#e44a00',
          toppadding: '56%',
          height: '32%',
          tooltext: 'Delayed by 2 days.',
        },
        {
          label: 'Planned',
          processid: '3',
          start: '23/4/2014',
          end: '30/4/2014',
          id: '3-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '3',
          start: '26/4/2014',
          end: '4/5/2014',
          id: '3',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Delay',
          processid: '3',
          start: '3/5/2014',
          end: '4/5/2014',
          id: '3-2',
          color: '#e44a00',
          toppadding: '56%',
          height: '32%',
          tooltext: 'Delayed by 1 days.',
        },
        {
          label: 'Planned',
          processid: '4',
          start: '3/5/2014',
          end: '10/5/2014',
          id: '4-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '4',
          start: '4/5/2014',
          end: '10/5/2014',
          id: '4',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Planned',
          processid: '5',
          start: '6/5/2014',
          end: '11/5/2014',
          id: '5-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '5',
          start: '6/5/2014',
          end: '10/5/2014',
          id: '5',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Planned',
          processid: '6',
          start: '4/5/2014',
          end: '7/5/2014',
          id: '6-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '6',
          start: '5/5/2014',
          end: '11/5/2014',
          id: '6',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Delay',
          processid: '6',
          start: '7/5/2014',
          end: '11/5/2014',
          id: '6-2',
          color: '#e44a00',
          toppadding: '56%',
          height: '32%',
          tooltext: 'Delayed by 4 days.',
        },
        {
          label: 'Planned',
          processid: '7',
          start: '11/5/2014',
          end: '14/5/2014',
          id: '7-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '7',
          start: '11/5/2014',
          end: '14/5/2014',
          id: '7',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Planned',
          processid: '8',
          start: '16/5/2014',
          end: '19/5/2014',
          id: '8-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '8',
          start: '16/5/2014',
          end: '19/5/2014',
          id: '8',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Planned',
          processid: '9',
          start: '16/5/2014',
          end: '18/5/2014',
          id: '9-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '9',
          start: '16/5/2014',
          end: '21/5/2014',
          id: '9',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Delay',
          processid: '9',
          start: '18/5/2014',
          end: '21/5/2014',
          id: '9-2',
          color: '#e44a00',
          toppadding: '56%',
          height: '32%',
          tooltext: 'Delayed by 3 days.',
        },
        {
          label: 'Planned',
          processid: '10',
          start: '20/5/2014',
          end: '23/5/2014',
          id: '10-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '10',
          start: '21/5/2014',
          end: '24/5/2014',
          id: '10',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Delay',
          processid: '10',
          start: '23/5/2014',
          end: '24/5/2014',
          id: '10-2',
          color: '#e44a00',
          toppadding: '56%',
          height: '32%',
          tooltext: 'Delayed by 1 days.',
        },
        {
          label: 'Planned',
          processid: '11',
          start: '25/5/2014',
          end: '27/5/2014',
          id: '11-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '11',
          start: '25/5/2014',
          end: '27/5/2014',
          id: '11',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Planned',
          processid: '12',
          start: '28/5/2014',
          end: '1/6/2014',
          id: '12-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '12',
          start: '28/5/2014',
          end: '1/6/2014',
          id: '12',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Planned',
          processid: '13',
          start: '4/6/2014',
          end: '6/6/2014',
          id: '13-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '13',
          start: '4/6/2014',
          end: '6/6/2014',
          id: '13',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Planned',
          processid: '14',
          start: '4/6/2014',
          end: '4/6/2014',
          id: '14-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '14',
          start: '4/6/2014',
          end: '4/6/2014',
          id: '14',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Planned',
          processid: '15',
          start: '4/6/2014',
          end: '4/6/2014',
          id: '15-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '15',
          start: '4/6/2014',
          end: '4/6/2014',
          id: '15',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Planned',
          processid: '16',
          start: '2/6/2014',
          end: '7/6/2014',
          id: '16-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '16',
          start: '2/6/2014',
          end: '7/6/2014',
          id: '16',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Planned',
          processid: '17',
          start: '5/6/2014',
          end: '10/6/2014',
          id: '17-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '17',
          start: '5/6/2014',
          end: '17/6/2014',
          id: '17',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Delay',
          processid: '17',
          start: '10/6/2014',
          end: '17/6/2014',
          id: '17-2',
          color: '#e44a00',
          toppadding: '56%',
          height: '32%',
          tooltext: 'Delayed by 7 days.',
        },
        {
          label: 'Planned',
          processid: '18',
          start: '10/6/2014',
          end: '12/6/2014',
          id: '18-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Delay',
          processid: '18',
          start: '18/6/2014',
          end: '20/6/2014',
          id: '18',
          color: '#e44a00',
          toppadding: '56%',
          height: '32%',
          tooltext: 'Delayed by 8 days.',
        },
        {
          label: 'Planned',
          processid: '19',
          start: '15/6/2014',
          end: '23/6/2014',
          id: '19-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '19',
          start: '16/6/2014',
          end: '23/6/2014',
          id: '19',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Planned',
          processid: '20',
          start: '23/6/2014',
          end: '23/6/2014',
          id: '20-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '20',
          start: '23/6/2014',
          end: '23/6/2014',
          id: '20',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Planned',
          processid: '21',
          start: '18/6/2014',
          end: '21/6/2014',
          id: '21-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '21',
          start: '18/6/2014',
          end: '23/6/2014',
          id: '21',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
        {
          label: 'Delay',
          processid: '21',
          start: '21/6/2014',
          end: '23/6/2014',
          id: '21-2',
          color: '#e44a00',
          toppadding: '56%',
          height: '32%',
          tooltext: 'Delayed by 2 days.',
        },
        {
          label: 'Planned',
          processid: '22',
          start: '24/6/2014',
          end: '28/6/2014',
          id: '22-1',
          color: '#008ee4',
          height: '32%',
          toppadding: '12%',
        },
        {
          label: 'Actual',
          processid: '22',
          start: '25/6/2014',
          end: '28/6/2014',
          id: '22',
          color: '#6baa01',
          toppadding: '56%',
          height: '32%',
        },
      ],
    },
    connectors: [
      {
        connector: [
          {
            fromtaskid: '1',
            totaskid: '2',
            color: '#008ee4',
            thickness: '2',
            fromtaskconnectstart_: '1',
          },
          {
            fromtaskid: '2-2',
            totaskid: '3',
            color: '#008ee4',
            thickness: '2',
          },
          {
            fromtaskid: '3-2',
            totaskid: '4',
            color: '#008ee4',
            thickness: '2',
          },
          {
            fromtaskid: '3-2',
            totaskid: '6',
            color: '#008ee4',
            thickness: '2',
          },
          {
            fromtaskid: '7',
            totaskid: '8',
            color: '#008ee4',
            thickness: '2',
          },
          {
            fromtaskid: '7',
            totaskid: '9',
            color: '#008ee4',
            thickness: '2',
          },
          {
            fromtaskid: '12',
            totaskid: '16',
            color: '#008ee4',
            thickness: '2',
          },
          {
            fromtaskid: '12',
            totaskid: '17',
            color: '#008ee4',
            thickness: '2',
          },
          {
            fromtaskid: '17-2',
            totaskid: '18',
            color: '#008ee4',
            thickness: '2',
          },
          {
            fromtaskid: '19',
            totaskid: '22',
            color: '#008ee4',
            thickness: '2',
          },
        ],
      },
    ],
    milestones: {
      milestone: [
        {
          date: '2/6/2014',
          taskid: '12',
          color: '#f8bd19',
          shape: 'star',
          tooltext: 'Completion of Phase 1',
        },
      ],
    },
    legend: {
      item: [
        {
          label: 'Planned',
          color: '#008ee4',
        },
        {
          label: 'Actual',
          color: '#6baa01',
        },
        {
          label: 'Slack (Delay)',
          color: '#e44a00',
        },
      ],
    },
  },
  treemap_charts: {
    data: [
      {
        label: 'USA',
        fillcolor: '8c8c8c',
        value: '8635000',
        data: [
          {
            label: 'Northern Region',
            value: '4140000',
            data: [
              {
                label: 'Carol Francis',
                value: '84000',
                sValue: '15',
              },
              {
                label: 'Otis Newman',
                value: '60000',
                sValue: '10',
              },
              {
                label: 'Darlene Alvarez',
                value: '50000',
                sValue: '11',
              },
              {
                label: 'Lucas Cannon',
                value: '58000',
                sValue: '5',
              },
              {
                label: 'Rosalie Huff',
                value: '36000',
                sValue: '-5',
              },
              {
                label: 'Jerome Vargas',
                value: '72000',
                sValue: '14',
              },
              {
                label: 'Becky Barton',
                value: '18000',
                sValue: '-10',
              },
              {
                label: 'Ben Rios',
                value: '14000',
                sValue: '-5',
              },
              {
                label: 'Donnie Patton',
                value: '37000',
                sValue: '2',
              },
              {
                label: 'Dana Freeman',
                value: '41000',
                sValue: '5',
              },
              {
                label: 'Darren Barrett',
                value: '54000',
                sValue: '7',
              },
              {
                label: 'Steve Vaughn',
                value: '35000',
                sValue: '12',
              },
              {
                label: 'Roosevelt Rhodes',
                value: '48000',
                sValue: '15',
              },
              {
                label: 'Moses Sparks',
                value: '38000',
                sValue: '-4',
              },
              {
                label: 'Hope Cox',
                value: '32000',
                sValue: '-10',
              },
              {
                label: 'Hector Lowe',
                value: '66000',
                sValue: '15',
              },
              {
                label: 'Lori Christensen',
                value: '47000',
                sValue: '10',
              },
              {
                label: 'Roman Aguilar',
                value: '14000',
                sValue: '-15',
              },
              {
                label: 'Brittany Chandler',
                value: '21000',
                sValue: '-12',
              },
              {
                label: 'Tiffaney Battle',
                value: '60000',
                sValue: '10',
              },
              {
                label: 'Elin Stamps',
                value: '54000',
                sValue: '5',
              },
              {
                label: 'Donnetta Coley',
                value: '59000',
                sValue: '+14',
              },
              {
                label: 'Emmaline Halcomb',
                value: '34000',
                sValue: '-5',
              },
              {
                label: 'Natosha Hammett',
                value: '39000',
                sValue: '-7',
              },
              {
                label: 'Kimi Stegall',
                value: '15000',
                sValue: '-19',
              },
              {
                label: 'Norberto Kirk',
                value: '46000',
                sValue: '2',
              },
              {
                label: 'Noma Martindale',
                value: '52000',
                sValue: '12',
              },
              {
                label: 'Coreen Numbers',
                value: '30000',
                sValue: '-1',
              },
              {
                label: 'Chas Irvin',
                value: '26000',
                sValue: '-17',
              },
              {
                label: 'Carlo Tobin',
                value: '31000',
                sValue: '-14',
              },
              {
                label: 'Ayanna Mclain',
                value: '29000',
                sValue: '-5',
              },
              {
                label: 'Rolland Turney',
                value: '42000',
                sValue: '+5',
              },
              {
                label: 'Ona Roden',
                value: '64000',
                sValue: '+20',
              },
              {
                label: 'Drew Clarkson',
                value: '24000',
                sValue: '-20',
              },
              {
                label: 'Samuel Adler',
                value: '29000',
                sValue: '-15',
              },
              {
                label: 'Adrian Steen',
                value: '51000',
                sValue: '2',
              },
              {
                label: 'Xiao Batson',
                value: '35000',
                sValue: '-2',
              },
              {
                label: 'Britney Hammonds',
                value: '45000',
                sValue: '3',
              },
              {
                label: 'Roslyn Wilhelm',
                value: '28000',
                sValue: '-5',
              },
              {
                label: 'Alva Puente',
                value: '26000',
                sValue: '-8',
              },
              {
                label: 'Daina Horvath',
                value: '49000',
                sValue: '9',
              },
              {
                label: 'Louie Chaney',
                value: '54000',
                sValue: '15',
              },
              {
                label: 'Olympia Mcmullen',
                value: '71000',
                sValue: '14',
              },
              {
                label: 'Nichol Leclair',
                value: '38000',
                sValue: '-10',
              },
              {
                label: 'Marylou Messenger',
                value: '41000',
                sValue: '5',
              },
              {
                label: 'Christoper Crowley',
                value: '34000',
                sValue: '-4',
              },
              {
                label: 'Neville Venable',
                value: '37000',
                sValue: '-10',
              },
              {
                label: 'Brock Rowell',
                value: '35000',
                sValue: '-4',
              },
              {
                label: 'Gisele Pelletier',
                value: '32000',
                sValue: '-5',
              },
              {
                label: 'Thelma Caldwell',
                value: '35000',
                sValue: '5',
              },
              {
                label: 'Shyla Plunkett',
                value: '84000',
                sValue: '15',
              },
              {
                label: 'Joie Dickson',
                value: '60000',
                sValue: '10',
              },
              {
                label: 'Shana Nabors',
                value: '50000',
                sValue: '11',
              },
              {
                label: 'Catina Burris',
                value: '58000',
                sValue: '5',
              },
              {
                label: 'Man Spearman',
                value: '36000',
                sValue: '-5',
              },
              {
                label: 'Shaunna Hamby',
                value: '72000',
                sValue: '14',
              },
              {
                label: 'Stormy Read',
                value: '18000',
                sValue: '-10',
              },
              {
                label: 'Wen Coe',
                value: '14000',
                sValue: '-5',
              },
              {
                label: 'Elizebeth Poston',
                value: '37000',
                sValue: '2',
              },
              {
                label: 'Breanna Stringer',
                value: '41000',
                sValue: '5',
              },
              {
                label: 'Allyn Holly',
                value: '54000',
                sValue: '7',
              },
              {
                label: 'Lera Gaylord',
                value: '35000',
                sValue: '12',
              },
              {
                label: 'Lashunda Dowd',
                value: '48000',
                sValue: '15',
              },
              {
                label: 'Kiesha Tyner',
                value: '38000',
                sValue: '-4',
              },
              {
                label: 'Lamont Allman',
                value: '32000',
                sValue: '-10',
              },
              {
                label: 'Sun Switzer',
                value: '66000',
                sValue: '15',
              },
              {
                label: 'Dorene Small',
                value: '47000',
                sValue: '10',
              },
              {
                label: 'Cherlyn Bozeman',
                value: '14000',
                sValue: '-15',
              },
              {
                label: 'Stephani Contreras',
                value: '21000',
                sValue: '-12',
              },
              {
                label: 'Bebe Holcomb',
                value: '60000',
                sValue: '10',
              },
              {
                label: 'Shenika Barham',
                value: '54000',
                sValue: '5',
              },
              {
                label: 'Troy Hobbs',
                value: '59000',
                sValue: '+14',
              },
              {
                label: 'Thomas Tom',
                value: '34000',
                sValue: '-5',
              },
              {
                label: 'Sunshine Libby',
                value: '39000',
                sValue: '-7',
              },
              {
                label: 'Tambra Patten',
                value: '15000',
                sValue: '-19',
              },
              {
                label: 'Marlyn Cato',
                value: '46000',
                sValue: '2',
              },
              {
                label: 'Jeanelle Ham',
                value: '52000',
                sValue: '12',
              },
              {
                label: 'Armanda Kimble',
                value: '30000',
                sValue: '-1',
              },
              {
                label: 'Danna Fitzpatrick',
                value: '26000',
                sValue: '-17',
              },
              {
                label: 'Elmira Nagle',
                value: '31000',
                sValue: '-14',
              },
              {
                label: 'Bella Marx',
                value: '29000',
                sValue: '-5',
              },
              {
                label: 'Vania Meeks',
                value: '42000',
                sValue: '+5',
              },
              {
                label: 'Florencio Heffner',
                value: '64000',
                sValue: '+20',
              },
              {
                label: 'Amie Peoples',
                value: '24000',
                sValue: '-20',
              },
              {
                label: 'Chrystal Downs',
                value: '29000',
                sValue: '-15',
              },
              {
                label: 'Glennis Chisholm',
                value: '51000',
                sValue: '2',
              },
              {
                label: 'Sydney Castaneda',
                value: '35000',
                sValue: '-2',
              },
              {
                label: 'Gregory Drummond',
                value: '45000',
                sValue: '3',
              },
              {
                label: 'Birdie Neely',
                value: '28000',
                sValue: '-5',
              },
              {
                label: 'Ciera Mcafee',
                value: '26000',
                sValue: '-8',
              },
              {
                label: 'Martin Larose',
                value: '49000',
                sValue: '9',
              },
              {
                label: 'Bobette Dutton',
                value: '54000',
                sValue: '15',
              },
              {
                label: 'Numbers Yarbrough',
                value: '71000',
                sValue: '14',
              },
              {
                label: 'Sanjuanita Croteau',
                value: '38000',
                sValue: '-10',
              },
              {
                label: 'Alysha Aguirre',
                value: '41000',
                sValue: '5',
              },
              {
                label: 'Beau Welker',
                value: '34000',
                sValue: '-4',
              },
              {
                label: 'Yuri Brannon',
                value: '37000',
                sValue: '-10',
              },
              {
                label: 'Breana Marion',
                value: '35000',
                sValue: '-4',
              },
              {
                label: 'Bernardina Fennell',
                value: '32000',
                sValue: '-5',
              },
              {
                label: 'Bridgette Gould',
                value: '35000',
                sValue: '5',
              },
            ],
          },
          {
            label: 'Eastern Region',
            value: '1110000',
            data: [
              {
                label: 'Lee Miles',
                value: '18000',
                sValue: '-5',
              },
              {
                label: 'Eduardo Day',
                value: '21000',
                sValue: '5',
              },
              {
                label: 'Darrell Schultz',
                value: '29500',
                sValue: '10',
              },
              {
                label: 'Troy Patrick',
                value: '25500',
                sValue: '12',
              },
              {
                label: 'Kerry Smith',
                value: '30000',
                sValue: '15',
              },
              {
                label: 'Franklin Walker',
                value: '18500',
                sValue: '-5',
              },
              {
                label: 'Toby Brady',
                value: '28500',
                sValue: '-2',
              },
              {
                label: 'Kenneth Wilkerson',
                value: '25000',
                sValue: '5',
              },
              {
                label: 'Ralph Goodman',
                value: '36000',
                sValue: '10',
              },
              {
                label: 'Lela Glover',
                value: '15500',
                sValue: '-14',
              },
              {
                label: 'Warren Gordon',
                value: '25500',
                sValue: '-10',
              },
              {
                label: 'Gladys Ruiz',
                value: '33000',
                sValue: '15',
              },
              {
                label: 'Mabel Norris',
                value: '14000',
                sValue: '-5',
              },
              {
                label: 'Darrel Rodgers',
                value: '17500',
                sValue: '-15',
              },
              {
                label: 'Barry Larson',
                value: '20000',
                sValue: '2',
              },
              {
                label: 'Alma Houston',
                value: '31000',
                sValue: '-3',
              },
              {
                label: 'Rochelle Burke',
                value: '12500',
                sValue: '5',
              },
              {
                label: 'Orville Garza',
                value: '34500',
                sValue: '-7',
              },
              {
                label: 'Rex Nichols',
                value: '14500',
                sValue: '-10',
              },
              {
                label: 'Jenna Burton',
                value: '18500',
                sValue: '8',
              },
              {
                label: 'Jordan Little',
                value: '21000',
                sValue: '3',
              },
              {
                label: 'Rodolfo Dawson',
                value: '28500',
                sValue: '10',
              },
              {
                label: 'Darryl Bowen',
                value: '15500',
                sValue: '-10',
              },
              {
                label: 'Marsha Foster',
                value: '12500',
                sValue: '-18',
              },
              {
                label: 'Sandra Curtis',
                value: '32000',
                sValue: '19',
              },
              {
                label: 'Alexis Robinson',
                value: '19500',
                sValue: '-4',
              },
              {
                label: 'Courtney Stokes',
                value: '27500',
                sValue: '10',
              },
              {
                label: 'Kelli Miller',
                value: '34500',
                sValue: '14',
              },
              {
                label: 'Cathy Davis',
                value: '14500',
                sValue: '-16',
              },
              {
                label: 'Gaynell Mcafee',
                value: '14000',
                sValue: '-5',
              },
              {
                label: 'Trinidad Iverson',
                value: '24500',
                sValue: '5',
              },
              {
                label: 'Anjelica Kilpatrick',
                value: '27000',
                sValue: '15',
              },
              {
                label: 'Cheryle Hearn',
                value: '17500',
                sValue: '-10',
              },
              {
                label: 'Rosamond Gass',
                value: '21000',
                sValue: '5',
              },
              {
                label: 'Katharine Perrin',
                value: '12500',
                sValue: '-20',
              },
              {
                label: 'Heide Matteson',
                value: '32000',
                sValue: '20',
              },
              {
                label: 'Amparo Fortin',
                value: '25500',
                sValue: '10',
              },
              {
                label: 'Charlena Bills',
                value: '19500',
                sValue: '-2',
              },
              {
                label: 'Ronna Irizarry',
                value: '30000',
                sValue: '15',
              },
              {
                label: 'Fidelia Hummel',
                value: '28000',
                sValue: '5',
              },
              {
                label: 'Darlena Maher',
                value: '14500',
                sValue: '-7',
              },
              {
                label: 'Isa Browning',
                value: '17000',
                sValue: '-10',
              },
              {
                label: 'Dalene Baron',
                value: '22500',
                sValue: '10',
              },
              {
                label: 'Ghislaine Loy',
                value: '12000',
                sValue: '-18',
              },
              {
                label: 'Alexander Eldridge',
                value: '18500',
                sValue: '-2',
              },
              {
                label: 'Brett Clemmons',
                value: '13000',
                sValue: '-15',
              },
              {
                label: 'Mellie Hackney',
                value: '13000',
                sValue: '-18',
              },
              {
                label: 'Gerry Felder',
                value: '35500',
                sValue: '15',
              },
              {
                label: 'Librada Creighton',
                value: '17500',
                sValue: '-7',
              },
              {
                label: 'Florence Pierce',
                value: '21000',
                sValue: '5',
              },
            ],
          },
          {
            label: 'Southern Region',
            value: '1555000',
            data: [
              {
                label: 'Derek Sandoval',
                value: '12000',
                sValue: '-15',
              },
              {
                label: 'Bertha Bishop',
                value: '55000',
                sValue: '10',
              },
              {
                label: 'Dominick Price',
                value: '24500',
                sValue: '10',
              },
              {
                label: 'Sylvia Rodriquez',
                value: '15000',
                sValue: '-2',
              },
              {
                label: 'Leland Jennings',
                value: '63000',
                sValue: '-5',
              },
              {
                label: 'Dean Collins',
                value: '56000',
                sValue: '3',
              },
              {
                label: 'Jamie Cohen',
                value: '19500',
                sValue: '4',
              },
              {
                label: 'Elias Hammond',
                value: '29500',
                sValue: '12',
              },
              {
                label: 'Kristy Stone',
                value: '24500',
                sValue: '5',
              },
              {
                label: 'Jeanette Wood',
                value: '17500',
                sValue: '-10',
              },
              {
                label: 'Salvador Colon',
                value: '75000',
                sValue: '18',
              },
              {
                label: 'Victor Ferguson',
                value: '60000',
                sValue: '10',
              },
              {
                label: 'Marion Hernandez',
                value: '14500',
                sValue: '-18',
              },
              {
                label: 'Javier Erickson',
                value: '18000',
                sValue: '-19',
              },
              {
                label: 'Stephanie Matthews',
                value: '16500',
                sValue: '5',
              },
              {
                label: 'Deanna Russell',
                value: '25500',
                sValue: '1',
              },
              {
                label: 'Nettie Holt',
                value: '32500',
                sValue: '-10',
              },
              {
                label: 'Lynne Mack',
                value: '50000',
                sValue: '8',
              },
              {
                label: 'Carrie Stevens',
                value: '47000',
                sValue: '14',
              },
              {
                label: 'Janyce Hildebrand',
                value: '29000',
                sValue: '-5',
              },
              {
                label: 'Emery Underhill',
                value: '67000',
                sValue: '20',
              },
              {
                label: 'Priscila Coy',
                value: '72000',
                sValue: '15',
              },
              {
                label: 'Dede Moffett',
                value: '12500',
                sValue: '-15',
              },
              {
                label: 'Sydney Merchant',
                value: '65500',
                sValue: '10',
              },
              {
                label: 'Daryl Farrar',
                value: '65000',
                sValue: '5',
              },
              {
                label: 'Nella Nickerson',
                value: '27000',
                sValue: '14',
              },
              {
                label: 'Octavia Mccorkle',
                value: '17500',
                sValue: '-2',
              },
              {
                label: 'Lynsey Boren',
                value: '22500',
                sValue: '5',
              },
              {
                label: 'Argentina Ireland',
                value: '15500',
                sValue: '-8',
              },
              {
                label: 'Tonda Ricks',
                value: '14500',
                sValue: '-10',
              },
              {
                label: 'Shira Laporte',
                value: '25500',
                sValue: '-5',
              },
              {
                label: 'Reuben Upshaw',
                value: '12000',
                sValue: '-15',
              },
              {
                label: 'Angelia Mcalister',
                value: '23500',
                sValue: '15',
              },
              {
                label: 'Ludivina Teel',
                value: '19000',
                sValue: '-10',
              },
              {
                label: 'Darcel Scarbrough',
                value: '13000',
                sValue: '-20',
              },
              {
                label: 'Chantelle Carl',
                value: '14000',
                sValue: '2',
              },
              {
                label: 'Young Chestnut',
                value: '14500',
                sValue: '-7',
              },
              {
                label: 'Janetta Gilman',
                value: '17000',
                sValue: '-8',
              },
              {
                label: 'Otto Pfeifer',
                value: '29500',
                sValue: '10',
              },
              {
                label: 'Queen Trudeau',
                value: '70000',
                sValue: '15',
              },
              {
                label: 'Candie Vang',
                value: '17000',
                sValue: '-12',
              },
              {
                label: 'Tia Burgos',
                value: '21000',
                sValue: '12',
              },
              {
                label: 'Teresita Sprague',
                value: '46500',
                sValue: '18',
              },
              {
                label: 'Tomoko Shull',
                value: '17000',
                sValue: '-4',
              },
              {
                label: 'Yahaira Snider',
                value: '24500',
                sValue: '8',
              },
              {
                label: 'Zina Espinoza',
                value: '51000',
                sValue: '5',
              },
              {
                label: 'Jamal Crespo',
                value: '12000',
                sValue: '-20',
              },
              {
                label: 'Ariel Jorgensen',
                value: '16000',
                sValue: '5',
              },
              {
                label: 'Fredda Tuttle',
                value: '14000',
                sValue: '-10',
              },
              {
                label: 'Gerardo Carter',
                value: '34500',
                sValue: '-16',
              },
            ],
          },
          {
            label: 'Western Region',
            value: '1830000',
            data: [
              {
                label: 'Sadie Wells',
                value: '30000',
                sValue: '-10',
              },
              {
                label: 'Jacqueline Griffith',
                value: '45000',
                sValue: '2',
              },
              {
                label: 'Malcolm Lee',
                value: '55000',
                sValue: '18',
              },
              {
                label: 'Martin Hudson',
                value: '59000',
                sValue: '-15',
              },
              {
                label: 'Carlos Hart',
                value: '64000',
                sValue: '18',
              },
              {
                label: 'Alison Luna',
                value: '35000',
                sValue: '-20',
              },
              {
                label: 'Pablo Paul',
                value: '72000',
                sValue: '20',
              },
              {
                label: 'Arlene Fox',
                value: '33000',
                sValue: '-15',
              },
              {
                label: 'Lillian Young',
                value: '39000',
                sValue: '-5',
              },
              {
                label: 'Annie Ford',
                value: '66000',
                sValue: '10',
              },
              {
                label: 'Manuel Delgado',
                value: '46000',
                sValue: '-5',
              },
              {
                label: 'Arthur Pope',
                value: '28000',
                sValue: '-15',
              },
              {
                label: 'Antonia Marshall',
                value: '24000',
                sValue: '-17',
              },
              {
                label: 'Glen Alexander',
                value: '29000',
                sValue: '15',
              },
              {
                label: 'Myrtle Bass',
                value: '40000',
                sValue: '10',
              },
              {
                label: 'Garry Palmer',
                value: '27000',
                sValue: '-18',
              },
              {
                label: 'Dianne Blair',
                value: '35000',
                sValue: '-1',
              },
              {
                label: 'Melba Page',
                value: '36000',
                sValue: '5',
              },
              {
                label: 'Darla Nelson',
                value: '60000',
                sValue: '14',
              },
              {
                label: 'Winston Brewer',
                value: '43000',
                sValue: '17',
              },
              {
                label: 'Drew Osborne',
                value: '21000',
                sValue: '-12',
              },
              {
                label: 'Jesus Sullivan',
                value: '46000',
                sValue: '18',
              },
              {
                label: 'Jeremiah Flowers',
                value: '15000',
                sValue: '-20',
              },
              {
                label: 'Suzanne Richardson',
                value: '24000',
                sValue: '-15',
              },
              {
                label: 'Nicholas Mathis',
                value: '71000',
                sValue: '20',
              },
              {
                label: 'Della King',
                value: '28000',
                sValue: '-10',
              },
              {
                label: 'Beth Boone',
                value: '40000',
                sValue: '15',
              },
              {
                label: 'Ruben Powell',
                value: '35000',
                sValue: '6',
              },
              {
                label: 'Marlon Harrington',
                value: '14000',
                sValue: '-7',
              },
              {
                label: 'Sharice Kang',
                value: '25000',
                sValue: '-20',
              },
              {
                label: 'Lizette Stout',
                value: '55000',
                sValue: '15',
              },
              {
                label: 'Jimmy Cho',
                value: '41000',
                sValue: '10',
              },
              {
                label: 'Weston Alcorn',
                value: '21000',
                sValue: '-5',
              },
              {
                label: 'Omer Whitfield',
                value: '18000',
                sValue: '-10',
              },
              {
                label: 'Delora Downs',
                value: '35000',
                sValue: '2',
              },
              {
                label: 'Rea Booker',
                value: '22000',
                sValue: '12',
              },
              {
                label: 'Jon Blue',
                value: '73000',
                sValue: '20',
              },
              {
                label: 'Haley Cameron',
                value: '17000',
                sValue: '-15',
              },
              {
                label: 'Jani Fortune',
                value: '23000',
                sValue: '-15',
              },
              {
                label: 'Theressa Talbot',
                value: '26000',
                sValue: '8',
              },
              {
                label: 'Tashia Crane',
                value: '38000',
                sValue: '-2',
              },
              {
                label: 'Latonya Grey',
                value: '19000',
                sValue: '-20',
              },
              {
                label: 'Lyndsey Song',
                value: '40000',
                sValue: '15',
              },
              {
                label: 'Lan Bean',
                value: '48000',
                sValue: '5',
              },
              {
                label: 'Ethelene Haas',
                value: '52000',
                sValue: '10',
              },
              {
                label: 'Lauran Dunaway',
                value: '29000',
                sValue: '8',
              },
              {
                label: 'Williams Hodge',
                value: '14000',
                sValue: '-18',
              },
              {
                label: 'Elwanda Archuleta',
                value: '24000',
                sValue: '-5',
              },
              {
                label: 'Florida Andersen',
                value: '30000',
                sValue: '5',
              },
              {
                label: 'Scott Perry',
                value: '20000',
                sValue: '2',
              },
            ],
          },
        ],
      },
    ],
    colorrange: {
      mapbypercent: '1',
      gradient: '1',
      minvalue: '-25',
      code: 'e24b1a',
      startlabel: 'Decline',
      endlabel: 'Rise',
      color: [
        {
          code: 'ffffff',
          maxvalue: '0',
          label: 'Static',
        },
        {
          code: '6da81e',
          maxvalue: '25',
          label: 'AVERAGE',
        },
      ],
    },
  },
  heatmap_charts: {
    rows: {
      row: [
        {
          id: 'SGS5',
          label: 'Samsung Galaxy S5',
        },
        {
          id: 'HTC1M8',
          label: 'HTC One (M8)',
        },
        {
          id: 'IPHONES5',
          label: 'Apple iPhone 5S',
        },
        {
          id: 'LUMIA',
          label: 'Nokia Lumia 1520',
        },
      ],
    },
    columns: {
      column: [
        {
          id: 'processor',
          label: 'Processor',
        },
        {
          id: 'screen',
          label: 'Screen Size',
        },
        {
          id: 'price',
          label: 'Price',
        },
        {
          id: 'backup',
          label: 'Battery Backup',
        },
        {
          id: 'cam',
          label: 'Camera',
        },
      ],
    },
    dataset: [
      {
        data: [
          {
            rowid: 'SGS5',
            columnid: 'processor',
            value: '8.7',
            tllabel: 'Quad Core 2.5 GHz',
            trlabel: 'OS : Android 4.4 Kitkat',
          },
          {
            rowid: 'SGS5',
            columnid: 'screen',
            value: '8.5',
            tllabel: '5.1 inch',
            trlabel: 'AMOLED screen',
          },
          {
            rowid: 'SGS5',
            columnid: 'price',
            value: '9.3',
            tllabel: '$600',
          },
          {
            rowid: 'SGS5',
            columnid: 'backup',
            value: '9.7',
            tllabel: '29 Hrs',
            trlabel: 'Battery : 2800 MAH',
          },
          {
            rowid: 'SGS5',
            columnid: 'cam',
            value: '8',
            tllabel: '16 MP',
            trlabel: 'Front Camera : 2.1 MP',
          },
          {
            rowid: 'HTC1M8',
            columnid: 'processor',
            value: '9.2',
            tllabel: 'Quad Core 2.3 GHz',
            trlabel: 'OS : Android 4.4 Kitkat',
          },
          {
            rowid: 'HTC1M8',
            columnid: 'screen',
            value: '8.3',
            tllabel: '5 inch',
            trlabel: 'LCD screen',
          },
          {
            rowid: 'HTC1M8',
            columnid: 'price',
            value: '7.3',
            tllabel: '$600',
          },
          {
            rowid: 'HTC1M8',
            columnid: 'backup',
            value: '8.8',
            tllabel: '20 Hrs',
            trlabel: 'Battery : 2600 MAH',
          },
          {
            rowid: 'HTC1M8',
            columnid: 'cam',
            value: '8.7',
            tllabel: '4 MP',
            trlabel: 'Front Camera : 5 MP',
          },
          {
            rowid: 'IPHONES5',
            columnid: 'processor',
            value: '9.1',
            tllabel: 'Dual Core',
            trlabel: 'OS : iOS 7',
          },
          {
            rowid: 'IPHONES5',
            columnid: 'screen',
            value: '8.6',
            tllabel: '4 inch',
            trlabel: 'Retina LCD screen',
          },
          {
            rowid: 'IPHONES5',
            columnid: 'price',
            value: '7.2',
            tllabel: '$649',
          },
          {
            rowid: 'IPHONES5',
            columnid: 'backup',
            value: '8.4',
            tllabel: '10 Hrs',
            trlabel: 'Battery : 1560 MAH',
          },
          {
            rowid: 'IPHONES5',
            columnid: 'cam',
            value: '9.5',
            tllabel: '8 MP',
            trlabel: 'Front Camera : 1.2 MP',
          },
          {
            rowid: 'LUMIA',
            columnid: 'processor',
            value: '8.8',
            tllabel: 'Quad Core 2.2 GHz',
            trlabel: 'OS: Windows Phone 8',
          },
          {
            rowid: 'LUMIA',
            columnid: 'screen',
            value: '9.1',
            tllabel: '6 inch',
            trlabel: 'LCD screen',
          },
          {
            rowid: 'LUMIA',
            columnid: 'price',
            value: '9.7',
            tllabel: '$470',
          },
          {
            rowid: 'LUMIA',
            columnid: 'backup',
            value: '9.2',
            tllabel: '27 Hrs',
            trlabel: 'Battery : 3400 MAH',
          },
          {
            rowid: 'LUMIA',
            columnid: 'cam',
            value: '8.1',
            tllabel: '20MP',
            trlabel: 'Front Camera : 1.2 MP',
          },
        ],
      },
    ],
    colorrange: {
      gradient: '0',
      minvalue: '0',
      code: 'E24B1A',
      startlabel: 'Poor',
      endlabel: 'Good',
      color: [
        {
          code: 'E24B1A',
          minvalue: '1',
          maxvalue: '5',
          label: 'Bad',
        },
        {
          code: 'F6BC33',
          minvalue: '5',
          maxvalue: '8.5',
          label: 'Average',
        },
        {
          code: '6DA81E',
          minvalue: '8.5',
          maxvalue: '10',
          label: 'Good',
        },
      ],
    },
  },
  candlestick_charts: {
    categories: [
      {
        category: [
          {
            label: '2 month ago',
            x: '1',
          },
          {
            label: '1 month ago',
            x: '31',
          },
          {
            label: 'Today',
            x: '60',
          },
        ],
      },
    ],
    dataset: [
      {
        data: [
          {
            open: '18.74',
            high: '19.16',
            low: '18.67 ',
            close: '18.99',
            x: '1',
            volume: '4991285',
          },
          {
            open: '18.74',
            high: '19.06',
            low: '18.54',
            close: '18.82',
            x: '2',
            volume: '3615889',
          },
          {
            open: '19.21',
            high: '19.3',
            low: '18.59 ',
            close: '18.65',
            x: '3',
            volume: '4749586',
          },
          {
            open: '19.85',
            high: '19.86',
            low: '19.12',
            close: '19.4',
            x: '4',
            volume: '4366740',
          },
          {
            open: '20.19',
            high: '20.21',
            low: '19.57',
            close: '19.92',
            x: '5',
            volume: '3982709',
          },
          {
            open: '20.47',
            high: '20.64',
            low: '20.15',
            close: '20.16',
            x: '6',
            volume: '2289403',
          },
          {
            open: '20.36',
            high: '20.52',
            low: '20.29',
            close: '20.48',
            x: '7',
            volume: '1950919',
          },
          {
            open: '20.21',
            high: '20.25',
            low: '19.91',
            close: '20.15',
            x: '8',
            volume: '2391070',
          },
          {
            open: '19.46',
            high: '20.54',
            low: '19.46',
            close: '20.22',
            x: '9',
            volume: '4548422',
          },
          {
            open: '19.24',
            high: '19.5',
            low: '19.13',
            close: '19.44',
            x: '10',
            volume: '1889811',
          },
          {
            open: '19.25',
            high: '19.41',
            low: '18.99',
            close: '19.22',
            x: '11',
            volume: '2543355',
          },
          {
            open: '18.85',
            high: '19.45',
            low: '18.8',
            close: '19.24',
            x: '12',
            volume: '2134393',
          },
          {
            open: '18.97',
            high: '19.01',
            low: '18.68',
            close: '18.95',
            x: '13',
            volume: '1740852',
          },
          {
            open: '18.69',
            high: '19',
            low: '18.35',
            close: '18.97',
            x: '14',
            volume: '2701392',
          },
          {
            open: '19.02',
            high: '19.1',
            low: '18.68',
            close: '18.7',
            x: '15',
            volume: '2198755',
          },
          {
            open: '19.29',
            high: '19.38',
            low: '18.88',
            close: '19.05',
            x: '16',
            volume: '2464958',
          },
          {
            open: '18.64',
            high: '19.35',
            low: '18.53',
            close: '19.33',
            x: '17',
            volume: '2962994',
          },
          {
            open: '18.14',
            high: '18.58',
            low: '18.08',
            close: '18.52',
            x: '18',
            volume: '1964932',
          },
          {
            open: '18.49',
            high: '18.92',
            low: '18.19',
            close: '18.26',
            x: '19',
            volume: '3013102',
          },
          {
            open: '18.71',
            high: '18.84',
            low: '18',
            close: '18.51',
            x: '20',
            volume: '4435894',
          },
          {
            open: '19.17',
            high: '19.35',
            low: '18.61',
            close: '18.66',
            x: '21',
            volume: '3245851',
          },
          {
            open: '19.12',
            high: '19.41',
            low: '18.92',
            close: '19.2',
            x: '22',
            volume: '2259792',
          },
          {
            open: '19.43',
            high: '19.58',
            low: '19.16',
            close: '19.33',
            x: '23',
            volume: '3531327',
          },
          {
            open: '19.72',
            high: '19.81',
            low: '19.04',
            close: '19.27',
            x: '24',
            volume: '5834733',
          },
          {
            open: '19.7',
            high: '19.94',
            low: '19.49',
            close: '19.77',
            x: '25',
            volume: '2009987',
          },
          {
            open: '19.84',
            high: '19.98',
            low: '19.39',
            close: '19.88',
            x: '26',
            volume: '2767592',
          },
          {
            open: '20.71',
            high: '20.73',
            low: '19.16',
            close: '19.63',
            x: '27',
            volume: '673358',
          },
          {
            open: '21.14',
            high: '21.14',
            low: '20.55',
            close: '20.65',
            x: '28',
            volume: '3164006',
          },
          {
            open: '21.5',
            high: '21.86',
            low: '21.2',
            close: '21.33',
            x: '29',
            volume: '7986466',
          },
          {
            open: '20.45',
            high: '21.08',
            low: '20.1',
            close: '20.56',
            x: '30',
            volume: '5813040',
          },
          {
            open: '20.07',
            high: '20.69',
            low: '20.04',
            close: '20.36',
            x: '31',
            volume: '3440002',
          },
          {
            open: '19.88',
            high: '20.11',
            low: '19.51',
            close: '20.03',
            x: '32',
            volume: '2779171',
          },
          {
            open: '19.76',
            high: '20.13',
            low: '19.65',
            close: '19.88',
            x: '33',
            volume: '2918115',
          },
          {
            open: '19.77',
            high: '19.97',
            low: '19.27',
            close: '19.9',
            x: '34',
            volume: '3850357',
          },
          {
            open: '19.43',
            high: '19.72',
            low: '18.88',
            close: '19.5',
            x: '35',
            volume: '5047378',
          },
          {
            open: '19.69',
            high: '19.84',
            low: '19.17',
            close: '19.43',
            x: '36',
            volume: '3479017',
          },
          {
            open: '19.59',
            high: '20.02',
            low: '19.02',
            close: '19.41',
            x: '37',
            volume: '5749874',
          },
          {
            open: '20.95',
            high: '21.09',
            low: '19.64',
            close: '19.83',
            x: '38',
            volume: '6319111',
          },
          {
            open: '20.52',
            high: '21.03',
            low: '20.45',
            close: '21',
            x: '39',
            volume: '4412413',
          },
          {
            open: '20.36',
            high: '20.96',
            low: '20.2',
            close: '20.44',
            x: '40',
            volume: '5948318',
          },
          {
            open: '21.45',
            high: '21.48',
            low: '19.63',
            close: '20.3',
            x: '41',
            volume: '11935440',
          },
          {
            open: '23.49',
            high: '23.57',
            low: '21.12',
            close: '21.63',
            x: '42',
            volume: '10523910',
          },
          {
            open: '24.04',
            high: '24.21',
            low: '23.04',
            close: '23.28',
            x: '43',
            volume: '3843797',
          },
          {
            open: '23.6',
            high: '24.065',
            low: '23.51',
            close: '23.94',
            x: '44',
            volume: '3691404',
          },
          {
            open: '22.87',
            high: '23.49',
            low: '22.86',
            close: '23.48',
            x: '45',
            volume: '3387393',
          },
          {
            open: '22.35',
            high: '22.89',
            low: '22.35',
            close: '22.74',
            x: '46',
            volume: '3737330',
          },
          {
            open: '22.11',
            high: '22.5',
            low: '21.9',
            close: '22.24',
            x: '47',
            volume: '4630397',
          },
          {
            open: '22.58',
            high: '22.80',
            low: '22.25',
            close: '22.42',
            x: '48',
            volume: '3024711',
          },
          {
            open: '23.54',
            high: '23.76',
            low: '22.6',
            close: '22.68',
            x: '49',
            volume: '3984508',
          },
          {
            open: '23.66',
            high: '24.09',
            low: '23.09',
            close: '23.46',
            x: '50',
            volume: '3420204',
          },
          {
            open: '24.36',
            high: '24.42',
            low: '22.90',
            close: '23.6',
            x: '51',
            volume: '5151096',
          },
          {
            open: '24.34',
            high: '24.6',
            low: '23.73',
            close: '24.15',
            x: '52',
            volume: '5999654',
          },
          {
            open: '23.38',
            high: '24.8',
            low: '23.36',
            close: '24.1',
            x: '53',
            volume: '5382049',
          },
          {
            open: '23.76',
            high: '23.84',
            low: '23.23',
            close: '23.47',
            x: '54',
            volume: '3508510',
          },
          {
            open: '23.64',
            high: '23.94',
            low: '23.48',
            close: '23.76',
            x: '55',
            volume: '2718428',
          },
          {
            open: '23.99',
            high: '24.18',
            low: '23.59',
            close: '23.66',
            x: '56',
            volume: '2859391',
          },
          {
            open: '23.32',
            high: '24.26',
            low: '23.32',
            close: '23.79',
            x: '57',
            volume: '4138618',
          },
          {
            open: '24.08',
            high: '24.4',
            low: '23.26',
            close: '23.39',
            x: '58',
            volume: '4477478',
          },
          {
            open: '22.84',
            high: '23.96',
            low: '22.83',
            close: '23.88',
            x: '59',
            volume: '4822378',
          },
          {
            open: '23.38',
            high: '23.78',
            low: '22.94',
            close: '23.01',
            x: '60',
            volume: '4037312',
          },
          {
            open: '23.97',
            high: '23.99',
            low: '23.14',
            close: '23.32',
            x: '61',
            volume: '4879546',
          },
        ],
      },
    ],
  },
  dragnode_charts: {
    dataset: [
      {
        id: '1',
        seriesname: 'DS1',
        data: [
          {
            id: '2',
            x: '15',
            y: '56',
            name: 'A',
            radius: '20',
            shape: 'CIRCLE',
            tooltext: 'A. Excavate',
          },
          {
            id: '3',
            x: '28',
            y: '56',
            name: 'B',
            radius: '20',
            shape: 'CIRCLE',
            tooltext: 'B. Foundation',
          },
          {
            id: '4',
            x: '42',
            y: '56',
            name: 'C',
            radius: '20',
            shape: 'CIRCLE',
            tooltext: 'C. Rough Wall',
          },
          {
            id: '5',
            x: '45',
            y: '28',
            name: 'D',
            radius: '20',
            shape: 'CIRCLE',
            tooltext: 'D. Roof',
          },
          {
            id: '6',
            x: '56',
            y: '56',
            name: 'E',
            radius: '20',
            shape: 'CIRCLE',
            tooltext: 'E. Exterior Plumbing',
          },
          {
            id: '7',
            x: '64',
            y: '71',
            name: 'F',
            radius: '20',
            shape: 'CIRCLE',
            tooltext: 'F. Interior Plumbing',
          },
          {
            id: '8',
            x: '59',
            y: '28',
            name: 'G',
            radius: '20',
            shape: 'CIRCLE',
            tooltext: 'G. Exterior Siding',
          },
          {
            id: '9',
            x: '70',
            y: '28',
            name: 'H',
            radius: '20',
            shape: 'CIRCLE',
            tooltext: 'H. Exterior Painting',
          },
          {
            id: '10',
            x: '82',
            y: '40',
            name: 'M',
            radius: '20',
            shape: 'CIRCLE',
            tooltext: 'M. Exterior Fixtures',
          },
          {
            id: '11',
            x: '44',
            y: '81',
            name: 'I',
            radius: '20',
            shape: 'CIRCLE',
            tooltext: 'I. Electrical Work',
          },
          {
            id: '12',
            x: '70',
            y: '82',
            name: 'J',
            radius: '20',
            shape: 'CIRCLE',
            tooltext: 'J. Wallboard',
          },
          {
            id: '13',
            x: '79',
            y: '94',
            name: 'L',
            radius: '20',
            shape: 'CIRCLE',
            tooltext: 'L. Interior Painting',
          },
          {
            id: '14',
            x: '87',
            y: '82',
            name: 'N',
            radius: '20',
            shape: 'CIRCLE',
            tooltext: 'N. Interior Fixtures',
          },
          {
            id: '15',
            x: '80',
            y: '70',
            name: 'K',
            radius: '20',
            shape: 'CIRCLE',
            tooltext: 'K. Flooring',
          },
          {
            id: '1',
            x: '4',
            y: '57',
            name: 'Start',
            height: '15',
            width: '40',
            shape: 'RECTANGLE',
            tooltext: 'Start of Construction',
          },
          {
            id: '16',
            x: '95',
            y: '59',
            name: 'Finish',
            height: '15',
            width: '40',
            shape: 'RECTANGLE',
            tooltext: 'End Of Construction',
          },
        ],
      },
    ],
    connectors: [
      {
        stdthickness: '2',
        connector: [
          {
            from: '2',
            to: '3',
            color: '#1aaf5d',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '4',
          },
          {
            from: '3',
            to: '4',
            color: '#1aaf5d',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '10',
          },
          {
            from: '4',
            to: '5',
            color: '#1aaf5d',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '6',
          },
          {
            from: '4',
            to: '6',
            color: '#f2c500',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '4',
          },
          {
            from: '4',
            to: '11',
            color: '#1aaf5d',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '7',
          },
          {
            from: '5',
            to: '8',
            color: '#f2c500',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '7',
          },
          {
            from: '6',
            to: '9',
            color: '#f2c500',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '9',
          },
          {
            from: '9',
            to: '10',
            color: '#f2c500',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '2',
          },
          {
            from: '6',
            to: '7',
            color: '#f2c500',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '5',
          },
          {
            from: '11',
            to: '12',
            color: '#1aaf5d',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '8',
          },
          {
            from: '7',
            to: '12',
            color: '#f2c500',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '',
          },
          {
            from: '12',
            to: '13',
            color: '#1aaf5d',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '5',
          },
          {
            from: '12',
            to: '15',
            color: '#f2c500',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '4',
          },
          {
            from: '13',
            to: '14',
            color: '#1aaf5d',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '6',
          },
          {
            from: '15',
            to: '14',
            color: '#f2c500',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '',
          },
          {
            from: '1',
            to: '2',
            color: '#1aaf5d',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '2',
          },
          {
            from: '8',
            to: '9',
            color: '#f2c500',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '',
          },
          {
            from: '14',
            to: '16',
            color: '#1aaf5d',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '',
          },
          {
            from: '10',
            to: '16',
            color: '#f2c500',
            strength: '1',
            arrowatstart: '0',
            alpha: '100',
            label: '',
          },
        ],
      },
    ],
    annotations: {
      origw: '400',
      origh: '300',
      autoscale: '1',
      groups: [
        {
          color: '#0075c2',
          fontSize: '12',
          y: '$chartEndY - $chartBottomMargin - 54',
          items: [
            {
              id: 'anno-A',
              type: 'text',
              label: 'A. Excavate',
              align: 'Left',
              verticalAlign: 'top',
              bold: '1',
              x: '$chartStartX + $chartLeftMargin + 24',
            },
            {
              id: 'anno-B',
              type: 'text',
              label: 'B. Foundation',
              align: 'Left',
              verticalAlign: 'top',
              bold: '1',
              x: '$chartStartX + $chartLeftMargin + 124',
            },
            {
              id: 'anno-C',
              type: 'text',
              label: 'C. Rough Wall',
              align: 'Left',
              verticalAlign: 'top',
              bold: '1',
              x: '$chartStartX + $chartLeftMargin + 224',
            },
            {
              id: 'anno-D',
              type: 'text',
              label: 'D. Roof',
              align: 'Left',
              verticalAlign: 'top',
              bold: '1',
              x: '$chartStartX + $chartLeftMargin + 315',
            },
          ],
        },
        {
          color: '#0075c2',
          fontSize: '12',
          y: '$chartEndY - $chartBottomMargin - 42',
          items: [
            {
              id: 'anno-E',
              type: 'text',
              label: 'E. Exterior Plumbing',
              align: 'Left',
              verticalAlign: 'top',
              bold: '1',
              x: '$chartStartX + $chartLeftMargin + 24',
            },
            {
              id: 'anno-F',
              type: 'text',
              label: 'F. Interior Plumbing',
              align: 'Left',
              verticalAlign: 'top',
              bold: '1',
              x: '$chartStartX + $chartLeftMargin + 124',
            },
            {
              id: 'anno-G',
              type: 'text',
              label: 'G. Exterior Siding',
              align: 'Left',
              verticalAlign: 'top',
              bold: '1',
              x: '$chartStartX + $chartLeftMargin + 224',
            },
            {
              id: 'anno-H',
              type: 'text',
              label: 'H. Exterior Painting',
              align: 'Left',
              verticalAlign: 'top',
              bold: '1',
              x: '$chartStartX + $chartLeftMargin + 315',
            },
          ],
        },
        {
          color: '#0075c2',
          fontSize: '12',
          y: '$chartEndY - $chartBottomMargin - 30',
          items: [
            {
              id: 'anno-I',
              type: 'text',
              label: 'I. Electrical Work',
              align: 'Left',
              verticalAlign: 'top',
              bold: '1',
              x: '$chartStartX + $chartLeftMargin + 24',
            },
            {
              id: 'anno-J',
              type: 'text',
              label: 'J. Wallboard',
              align: 'Left',
              verticalAlign: 'top',
              bold: '1',
              x: '$chartStartX + $chartLeftMargin + 124',
            },
            {
              id: 'anno-K',
              type: 'text',
              label: 'K. Flooring',
              align: 'Left',
              verticalAlign: 'top',
              bold: '1',
              x: '$chartStartX + $chartLeftMargin + 224',
            },
            {
              id: 'anno-L',
              type: 'text',
              label: 'L. Interior Painting',
              align: 'Left',
              verticalAlign: 'top',
              bold: '1',
              x: '$chartStartX + $chartLeftMargin + 315',
            },
          ],
        },
        {
          color: '#0075c2',
          fontSize: '12',
          y: '$chartEndY - $chartBottomMargin - 18',
          items: [
            {
              id: 'anno-M',
              type: 'text',
              label: 'M. Exterior Fixtures',
              align: 'Left',
              verticalAlign: 'top',
              bold: '1',
              x: '$chartStartX + $chartLeftMargin + 24',
            },
            {
              id: 'anno-N',
              type: 'text',
              label: 'N. Interior Fixtures',
              align: 'Left',
              verticalAlign: 'top',
              bold: '1',
              x: '$chartStartX + $chartLeftMargin + 124',
            },
          ],
        },
      ],
    },
  },
  multiaxisline_charts: {
    categories: [
      {
        category: [
          {
            label: '10:00',
          },
          {
            label: '11:00',
          },
          {
            label: '12:00',
          },
          {
            label: '13:00',
          },
          {
            label: '14:00',
          },
          {
            label: '15:00',
          },
          {
            label: '16:00',
          },
          {
            label: '17:00',
          },
          {
            label: '18:00',
          },
          {
            label: '19:00',
          },
        ],
      },
    ],
    axis: [
      {
        title: 'CPU Usage',
        tickwidth: '10',
        divlineDashed: '1',
        numbersuffix: '%',
        dataset: [
          {
            seriesname: 'CPU 1',
            linethickness: '3',
            color: 'CC0000',
            data: [
              {
                value: '16',
              },
              {
                value: '19',
              },
              {
                value: '16',
              },
              {
                value: '17',
              },
              {
                value: '23',
              },
              {
                value: '23',
              },
              {
                value: '15',
              },
              {
                value: '14',
              },
              {
                value: '19',
              },
              {
                value: '21',
              },
            ],
          },
          {
            seriesname: 'CPU 2',
            linethickness: '3',
            color: '0372AB',
            data: [
              {
                value: '12',
              },
              {
                value: '12',
              },
              {
                value: '9',
              },
              {
                value: '9',
              },
              {
                value: '11',
              },
              {
                value: '13',
              },
              {
                value: '16',
              },
              {
                value: '14',
              },
              {
                value: '16',
              },
              {
                value: '11',
              },
            ],
          },
        ],
      },
      {
        title: 'PF Usage',
        axisonleft: '0',
        numdivlines: '4',
        tickwidth: '10',
        divlineDashed: '1',
        formatnumberscale: '1',
        defaultnumberscale: ' MB',
        numberscaleunit: 'GB',
        numberscalevalue: '1024',
        dataset: [
          {
            seriesname: 'PF Usage',
            data: [
              {
                value: '696',
              },
              {
                value: '711',
              },
              {
                value: '636',
              },
              {
                value: '671',
              },
              {
                value: '1293',
              },
              {
                value: '789',
              },
              {
                value: '793',
              },
              {
                value: '993',
              },
              {
                value: '657',
              },
              {
                value: '693',
              },
            ],
          },
        ],
      },
      {
        title: 'Processes',
        axisonleft: '0',
        numdivlines: '5',
        tickwidth: '10',
        divlineDashed: '1',
        dataset: [
          {
            seriesname: 'Processes',
            data: [
              {
                value: '543',
              },
              {
                value: '511',
              },
              {
                value: '536',
              },
              {
                value: '449',
              },
              {
                value: '668',
              },
              {
                value: '588',
              },
              {
                value: '511',
              },
              {
                value: '536',
              },
              {
                value: '449',
              },
              {
                value: '668',
              },
            ],
          },
        ],
      },
    ],
  },
  multilevelpie_charts: {
    category: [
      {
        label: 'Sales by category',
        color: '#ffffff',
        value: '150',
        category: [
          {
            label: 'Food & {br}Beverages',
            color: '#f8bd19',
            value: '55.5',
            category: [
              {
                label: 'Breads',
                color: '#f8bd19',
                value: '11.1',
              },
              {
                label: 'Juice',
                color: '#f8bd19',
                value: '27.75',
              },
              {
                label: 'Noodles',
                color: '#f8bd19',
                value: '9.99',
              },
              {
                label: 'Seafood',
                color: '#f8bd19',
                value: '6.66',
              },
            ],
          },
          {
            label: 'Apparel &{br}Accessories',
            color: '#e44a00',
            value: '42',
            category: [
              {
                label: 'Sun Glasses',
                color: '#e44a00',
                value: '10.08',
              },
              {
                label: 'Clothing',
                color: '#e44a00',
                value: '18.9',
              },
              {
                label: 'Handbags',
                color: '#e44a00',
                value: '6.3',
              },
              {
                label: 'Shoes',
                color: '#e44a00',
                value: '6.72',
              },
            ],
          },
          {
            label: 'Baby {br}Products',
            color: '#008ee4',
            value: '22.5',
            category: [
              {
                label: 'Bath &{br}Grooming',
                color: '#008ee4',
                value: '9.45',
              },
              {
                label: 'Feeding',
                color: '#008ee4',
                value: '6.3',
              },
              {
                label: 'Diapers',
                color: '#008ee4',
                value: '6.75',
              },
            ],
          },
          {
            label: 'Electronics',
            color: '#33bdda',
            value: '30',
            category: [
              {
                label: 'Laptops',
                color: '#33bdda',
                value: '8.1',
              },
              {
                label: 'Televisions',
                color: '#33bdda',
                value: '10.5',
              },
              {
                label: 'SmartPhones',
                color: '#33bdda',
                value: '11.4',
              },
            ],
          },
        ],
      },
    ],
  },
  maps: {
    colorrange: {
      minvalue: '0',
      startlabel: 'Low',
      endlabel: 'High',
      code: '#e44a00',
      gradient: '1',
      color: [
        {
          maxvalue: '56580',
          displayvalue: 'Average',
          code: '#f8bd19',
        },
        {
          maxvalue: '100000',
          code: '#6baa01',
        },
      ],
    },
    data: [
      {
        id: 'HI',
        value: '3189',
      },
      {
        id: 'DC',
        value: '2879',
      },
      {
        id: 'MD',
        value: '920',
      },
      {
        id: 'DE',
        value: '4607',
      },
      {
        id: 'RI',
        value: '4890',
      },
      {
        id: 'WA',
        value: '34927',
      },
      {
        id: 'OR',
        value: '65798',
      },
      {
        id: 'CA',
        value: '61861',
      },
      {
        id: 'AK',
        value: '58911',
      },
      {
        id: 'ID',
        value: '42662',
      },
      {
        id: 'NV',
        value: '78041',
      },
      {
        id: 'AZ',
        value: '41558',
      },
      {
        id: 'MT',
        value: '62942',
      },
      {
        id: 'WY',
        value: '78834',
      },
      {
        id: 'UT',
        value: '50512',
      },
      {
        id: 'CO',
        value: '73026',
      },
      {
        id: 'NM',
        value: '78865',
      },
      {
        id: 'ND',
        value: '50554',
      },
      {
        id: 'SD',
        value: '35922',
      },
      {
        id: 'NE',
        value: '43736',
      },
      {
        id: 'KS',
        value: '32681',
      },
      {
        id: 'OK',
        value: '79038',
      },
      {
        id: 'TX',
        value: '75425',
      },
      {
        id: 'MN',
        value: '43485',
      },
      {
        id: 'IA',
        value: '46515',
      },
      {
        id: 'MO',
        value: '63715',
      },
      {
        id: 'AR',
        value: '34497',
      },
      {
        id: 'LA',
        value: '70706',
      },
      {
        id: 'WI',
        value: '42382',
      },
      {
        id: 'IL',
        value: '73202',
      },
      {
        id: 'KY',
        value: '79118',
      },
      {
        id: 'TN',
        value: '44657',
      },
      {
        id: 'MS',
        value: '66205',
      },
      {
        id: 'AL',
        value: '75873',
      },
      {
        id: 'GA',
        value: '76895',
      },
      {
        id: 'MI',
        value: '67695',
      },
      {
        id: 'IN',
        value: '33592',
      },
      {
        id: 'OH',
        value: '32960',
      },
      {
        id: 'PA',
        value: '54346',
      },
      {
        id: 'NY',
        value: '42828',
      },
      {
        id: 'VT',
        value: '77411',
      },
      {
        id: 'NH',
        value: '51403',
      },
      {
        id: 'ME',
        value: '64636',
      },
      {
        id: 'MA',
        value: '51767',
      },
      {
        id: 'CT',
        value: '57353',
      },
      {
        id: 'NJ',
        value: '80788',
      },
      {
        id: 'WV',
        value: '95890',
      },
      {
        id: 'VA',
        value: '83140',
      },
      {
        id: 'NC',
        value: '97344',
      },
      {
        id: 'SC',
        value: '88234',
      },
      {
        id: 'FL',
        value: '88234',
      },
    ],
  },
};

export default examples;
