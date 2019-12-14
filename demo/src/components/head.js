/*
 * @Author: your name
 * @Date: 2019-12-13 14:57:36
 * @LastEditTime: 2019-12-13 16:34:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\head.js
 */
import React,{Component} from 'react';
import {Button,Icon,Avatar,Divider  } from 'antd';
import axios from 'axios';

import store from '../redux/store'
import '../styles/head.css'

class HeadComponent extends Component {
    constructor (){
        super();
        this.state = {
            text:'退出',
            color:'#7265e6',
            username:''
        }
    }

    componentDidMount = () => {
        // 监听store的值
        store.subscribe(()=>{
            let state = store.getState();
            let username = state.username;
            this.setState({'username':username})
        })
    }

    logout = (e) => {
        e.preventDefault();
        axios.post("/user/logout",{}).then((res) =>{
            console.log('res', res)
        })
    }

    render(){
        return (
            <header className='my-head'>
                <div className='hd-left'>
                    富强民主文明爱国
                </div>
                <div className='hd-right'>
                    <Avatar icon="user"  style={{ backgroundColor: this.state.color,display:'inline-block'}} />
                    &nbsp;{this.state.username}
                    <Divider  type="vertical" />
                    <Icon type="logout" size="small" onClick={this.logout} />
                </div>
                
            </header>
        )
    }
}
// HeadComponent.contextTypes = {
//     router: React.PropTypes.object
//   }
export default HeadComponent
