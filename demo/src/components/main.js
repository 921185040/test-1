/*
 * @Author: your name
 * @Date: 2019-12-14 14:09:32
 * @LastEditTime: 2019-12-14 14:17:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\main.js
 */
import React from 'react';
import { hashHistory } from 'react-router'
import { Row, Col } from 'antd';
import axios from 'axios'

class MainComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            overviewData: {}
        }
    }
    render(){
        return (
            <div>main</div>
        )
    }
}
export default MainComponent