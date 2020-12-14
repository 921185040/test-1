/*
 * @Author: your name
 * @Date: 2019-12-14 14:33:02
 * @LastEditTime: 2020-12-14 22:13:41
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
        reportShow: 'none',
        mapShow: 'none',
      }
    }
    componentDidMount(){
        axios.post('/caseManage/getAnalysisData').then(res=>{
          console.log('res',res)
          if(res){
            this.setState({pictrueData:res.data.data})
            // this.drawChat()
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
      this.setState({reportShow: 'block'})
    }

    handleSearch(){
      this.setState({reportShow: 'none', mapShow: 'block'})
      const myChart = echarts.init(document.getElementById('map'));

   

      const option = {
        title: {
            text: 'Graph 简单示例'
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                type: 'graph',
                layout: 'none',
                symbolSize: 50,
                roam: true,
                label: {
                    show: true
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    fontSize: 20
                },
                data: [{
                    name: '节点1',
                    x: 300,
                    y: 300
                }, {
                    name: '节点2',
                    x: 800,
                    y: 300
                }, {
                    name: '节点3',
                    x: 550,
                    y: 100
                }, {
                    name: '节点4',
                    x: 550,
                    y: 500
                }],
                // links: [],
                links: [{
                    source: 0,
                    target: 1,
                    symbolSize: [5, 20],
                    label: {
                        show: true
                    },
                    lineStyle: {
                        width: 5,
                        curveness: 0.2
                    }
                }, {
                    source: '节点2',
                    target: '节点1',
                    label: {
                        show: true
                    },
                    lineStyle: {
                        curveness: 0.2
                    }
                }, {
                    source: '节点1',
                    target: '节点3'
                }, {
                    source: '节点2',
                    target: '节点3'
                }, {
                    source: '节点2',
                    target: '节点4'
                }, {
                    source: '节点1',
                    target: '节点4'
                }],
                lineStyle: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
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
                        {/* <div ref="echarts" style={{display: this.state.reportShow, width: '100%', height: 600 }} id="echarts"></div> */}
                        <div style={{display: 'block', width: '100%', height: 600 }} id="map"></div>
                    </div>
                </div>
            </>
            
        )
    }
}
export default ReportComponent;