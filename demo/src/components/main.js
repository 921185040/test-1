/*
 * @Author: your name
 * @Date: 2019-12-14 14:09:32
 * @LastEditTime: 2019-12-15 20:26:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\main.js
 */
import React from 'react';
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd';
import axios from 'axios';


import '../styles/main.css'
import '../styles/icons/incons.css'

class MainComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            overviewData: {}
        }
    }

    componentWillMount(){
        const username = localStorage.getItem('username');
        if(!username) {
            this.context.router.history.push('/login');
            return false;
        }
        axios.post("/homePage/getBaseData",{}).then((res) =>{
            this.setState({overviewData:res.data})
           console.log('res', res)
        })
    }
    render() {
        return (
            <>
                <div className='content'>
                    <div className='first-content'>
                        <div className='title'>本年度账单</div>
                        <div className='detail'>
                            <Row>
                                <Col span={8}>
                                    <div className="overview-item line">
                                        <div className="item-left">
                                        <span className="iconfont payer">&#xe64d;</span>
                                        </div>
                                        <div className="item-right">
                                        <p className="right-count color-commitMoney">{this.state.overviewData.yearData == undefined ? '--':this.state.overviewData.yearData.income}</p>
                                        <p className="right-unit">总收入/元</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div className="overview-item line">
                                        <div className="item-left">
                                        <span className="iconfont payer">&#xe62f;</span>
                                        </div>
                                        <div className="item-right">
                                        <p className="right-count color-commitMoney">{this.state.overviewData.yearData == undefined ? '--':this.state.overviewData.yearData.expenditure}</p>
                                        <p className="right-unit">总支出/元</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div className="overview-item line">
                                        <div className="item-left">
                                        <span className="iconfont payer">&#xe65b;</span>
                                        </div>
                                        <div className="item-right">
                                        <p className="right-count color-commitMoney">{this.state.overviewData.yearData == undefined ? '--':this.state.overviewData.yearData.managemoney}</p>
                                        <p className="right-unit">总理财/元</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className='first-content'>
                        <div className='title'>本季度收支对比</div>
                        <div className='detail'>
                            <Row>
                                <Col span={12}>
                                    <div className='line'>
                                        <p>收入比较</p>
                                        <Row>
                                            <Col span={12}>
                                                <p>本季度收入</p>
                                                <p>{this.state.overviewData.monthData == undefined ? '--':this.state.overviewData.monthData[1].income}</p>
                                            </Col>
                                            <Col span={12}>
                                                <p>上季度收入</p>
                                                <p>{this.state.overviewData.monthData == undefined ? '--':this.state.overviewData.monthData[0].income}</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className='line'>
                                        <p>支出比较</p>
                                        <Row>
                                            <Col span={12}>
                                                <p>本季度支出</p>
                                                <p>{this.state.overviewData.monthData == undefined ? '--':this.state.overviewData.monthData[1].expenditure}</p>
                                            </Col>
                                            <Col span={12}>
                                                <p>上季度支出</p>
                                                <p>{this.state.overviewData.monthData == undefined ? '--':this.state.overviewData.monthData[0].expenditure}</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                
                            </Row>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default MainComponent