/*
 * @Author: your name
 * @Date: 2019-12-14 14:33:02
 * @LastEditTime : 2020-01-16 15:45:25
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\bi-repot\bi-report.js
 */
import React from "react";
// import { hashHistory } from "react-router";
import axios from "axios";
import echarts from "echarts";

class ReportComponent extends React.Component{
    constructor(props){
      super(props)
      this.state ={
        pictrueData:[]
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
    render(){
        return (
            <>
                <div className="content">
                    <div className='title'>收支报表</div>
                    <div className="bd-main">
                        {/* echarts图 */}
                        <div ref="echarts" style={{ width: '100%', height: 600 }} id="echarts"></div>
                    </div>
                </div>
            </>
            
        )
    }
}
export default ReportComponent;