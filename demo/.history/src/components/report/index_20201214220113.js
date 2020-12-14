/*
 * @Author: your name
 * @Date: 2019-12-14 14:33:02
 * @LastEditTime: 2020-12-14 22:01:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\bi-repot\bi-report.js
 */
import React from "react";
// import { hashHistory } from "react-router";
import axios from "axios";
import echarts from "echarts";
import { Button, Modal, Form, Input, Radio, Select,Cascader ,message, Breadcrumb } from "antd";

class ReportComponent extends React.Component{
    constructor(props){
      super(props)
      this.state ={
        pictrueData:[],
        reportShow: '',
      }
    }
    componentDidMount(){
        console.log('fff',this.refs.echarts)
        axios.post('/caseManage/getAnalysisData').then(res=>{
          console.log('res',res)
          if(res){
            this.setState({pictrueData:res.data.data})
            this.drawChat()
          }
        })

    }   
    // 画图
    drawChat() {
      var month = [],
          income =[],
          outcome=[],
          balance=[],
          pictrueData=this.state.pictrueData,
          len = pictrueData.length
      while(len--){
        month.push(pictrueData[len]['month'])
        income.push(pictrueData[len]['income'])
        outcome.push(pictrueData[len]['outcome'])
        var money = parseInt(pictrueData[len]['income']) - parseInt(pictrueData[len]['outcome'])
        balance.push(money)
      }
      var option ={
        tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#283b56"
              }
            }
          },
          title: {},
          legend: {
            data: ["收入", "支出",'结余']
          },
          toolbox: {
            show: false
          },
          dataZoom: {
            show: false,
            start: 0,
            end: 100
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: true,
              data: month,
              axisLabel: {
                interval: 0,
                rotate: 45,
                margin: 10
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              scale: true,
              name: "收入",
              min: 0,
              splitLine: {
                show: false
              }
            },
            {
              type: "value",
              scale: true,
              name: "支出",
              min: 0,
              splitLine: {
                show: false
              }
            },{
              type:'value',
              scale:true,
              name:'结余',
              min:0,
              splitLine:{
                show:false
              }
            }
          ],
          series: [
            {
              name: "收入",
              type: "bar",
              barMaxWidth: 100,
              data: income,
              itemStyle: {
                normal: {
                  color: "#66A3FC"
                }
              }
            },
            {
              name: "支出",
              type: "line",
              data: outcome,
              yAxisIndex: 1
            },
            {
              name: "结余",
              type: "line",
              data: balance,
              yAxisIndex: 2,
              itemStyle: {
                normal: {
                  color: "yellow"
                }
              }
            }
          ],
          grid: {
            left: "40px",
            right: "20px",
            bottom: "60px",
            containLabel: true
          }
    }
    var myChart = echarts.init(this.refs.echarts);
    myChart.setOption(option);
    }


    handleReport(re){
      console.log('??', re)
      this.setState({reportShow: ''})
    }

    handleSearch(){
      this.setState({reportShow: 'none', mapShow: ''})
      const myChart = echarts.init(document.getElementById('map'));
      var data = [
        {name: '海门', value: 9},
        {name: '武汉', value: 273},
        {name: '大庆', value: 279}
   ];
   var geoCoordMap = {
       '海门':[121.15,31.89],
       '武汉':[114.31,30.52],
       '大庆':[125.03,46.58]
   };
   
   var convertData = function (data) {
       var res = [];
       for (var i = 0; i < data.length; i++) {
           var geoCoord = geoCoordMap[data[i].name];
           if (geoCoord) {
               res.push({
                   name: data[i].name,
                   value: geoCoord.concat(data[i].value)
               });
           }
       }
       return res;
   };
   
   const option = {
       title: {
           text: '全国主要城市空气质量 - 百度地图',
           subtext: 'data from PM25.in',
           sublink: 'http://www.pm25.in',
           left: 'center'
       },
       tooltip : {
           trigger: 'item'
       },
       bmap: {
           center: [104.114129, 37.550339],
           zoom: 5,
           roam: true,
           mapStyle: {
               styleJson: [{
                   'featureType': 'water',
                   'elementType': 'all',
                   'stylers': {
                       'color': '#d1d1d1'
                   }
               }, {
                   'featureType': 'land',
                   'elementType': 'all',
                   'stylers': {
                       'color': '#f3f3f3'
                   }
               }, {
                   'featureType': 'railway',
                   'elementType': 'all',
                   'stylers': {
                       'visibility': 'off'
                   }
               }, {
                   'featureType': 'highway',
                   'elementType': 'all',
                   'stylers': {
                       'color': '#fdfdfd'
                   }
               }, {
                   'featureType': 'highway',
                   'elementType': 'labels',
                   'stylers': {
                       'visibility': 'off'
                   }
               }, {
                   'featureType': 'arterial',
                   'elementType': 'geometry',
                   'stylers': {
                       'color': '#fefefe'
                   }
               }, {
                   'featureType': 'arterial',
                   'elementType': 'geometry.fill',
                   'stylers': {
                       'color': '#fefefe'
                   }
               }, {
                   'featureType': 'poi',
                   'elementType': 'all',
                   'stylers': {
                       'visibility': 'off'
                   }
               }, {
                   'featureType': 'green',
                   'elementType': 'all',
                   'stylers': {
                       'visibility': 'off'
                   }
               }, {
                   'featureType': 'subway',
                   'elementType': 'all',
                   'stylers': {
                       'visibility': 'off'
                   }
               }, {
                   'featureType': 'manmade',
                   'elementType': 'all',
                   'stylers': {
                       'color': '#d1d1d1'
                   }
               }, {
                   'featureType': 'local',
                   'elementType': 'all',
                   'stylers': {
                       'color': '#d1d1d1'
                   }
               }, {
                   'featureType': 'arterial',
                   'elementType': 'labels',
                   'stylers': {
                       'visibility': 'off'
                   }
               }, {
                   'featureType': 'boundary',
                   'elementType': 'all',
                   'stylers': {
                       'color': '#fefefe'
                   }
               }, {
                   'featureType': 'building',
                   'elementType': 'all',
                   'stylers': {
                       'color': '#d1d1d1'
                   }
               }, {
                   'featureType': 'label',
                   'elementType': 'labels.text.fill',
                   'stylers': {
                       'color': '#999999'
                   }
               }]
           }
       },
       series : [
           {
               name: 'pm2.5',
               type: 'scatter',
               coordinateSystem: 'bmap',
               data: convertData(data),
               symbolSize: function (val) {
                   return val[2] / 10;
               },
               encode: {
                   value: 2
               },
               label: {
                   formatter: '{b}',
                   position: 'right',
                   show: false
               },
               itemStyle: {
                   color: 'purple'
               },
               emphasis: {
                   label: {
                       show: true
                   }
               }
           },
           {
               name: 'Top 5',
               type: 'effectScatter',
               coordinateSystem: 'bmap',
               data: convertData(data.sort(function (a, b) {
                   return b.value - a.value;
               }).slice(0, 6)),
               symbolSize: function (val) {
                   return val[2] / 10;
               },
               encode: {
                   value: 2
               },
               showEffectOn: 'render',
               rippleEffect: {
                   brushType: 'stroke'
               },
               hoverAnimation: true,
               label: {
                   formatter: '{b}',
                   position: 'right',
                   show: true
               },
               itemStyle: {
                   color: 'purple',
                   shadowBlur: 10,
                   shadowColor: '#333'
               },
               zlevel: 1
           }
       ]
   };
   myChart.setOption(option);
  }

    render(){
        return (
            <>
                <div className="content">
                    <Breadcrumb>
                      <Breadcrumb.Item >
                        <a onClick={(re)=>this.handleReport(re)}>报表</a>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item >
                        <a onClick={()=>this.handleSearch()}>地图定点</a>
                      </Breadcrumb.Item>
                    </Breadcrumb>
                    <div>
                        {/* echarts图 */}
                        <div ref="echarts" style={{display: this.state.reportShow, width: '100%', height: 600 }} id="echarts"></div>
                        <div ref="echarts" style={{display: this.state.mapShow, width: '100%', height: 600 }} id="map"></div>
                    </div>
                </div>
            </>
            
        )
    }
}
export default ReportComponent;