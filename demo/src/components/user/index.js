/*
 * @Author: your name
 * @Date: 2019-12-13 14:43:44
 * @LastEditTime: 2019-12-14 14:22:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\user\index.js
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
            <div>user</div>
        )
    }
}
export default MainComponent