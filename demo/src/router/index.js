/*
 * @Author: your name
 * @Date: 2019-12-13 11:49:38
 * @LastEditTime: 2019-12-15 20:49:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\router\index.js
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider, connect } from "react-redux";
import store from '../redux/store'
// 登录
import LoginCM from '../components/login/index'
// 用户
import UserCM from '../components/user/index';
// 账本
import CaseCM from '../components/case/index';
// 报表
import BiPortCM from '../components/report/index'
// 界面头部
import HeadCM from '../components/head';
//菜单
import ContentCM from '../components/content';
// 主页
import MainCM from '../components/main';
import '../styles/head.css'

class RouterList extends Component{
    render(){
        return(
            <Provider store={store}>
                <div>
                    <HeadCM store = {store} />
                </div>
                <div>
                    <div className="my-body">
                        <ContentCM  />
                        <section className="my-content">{this.props.children}</section>
                    </div>
                </div>
            </Provider>
        )
    }
}

const RouterLists = (
    <HashRouter>
        <div className="appWrap">
            <RouterList>
                <Switch>
                    <Route exact path="/login" component={LoginCM} />
                </Switch>
                <Switch>
                    <Route path="/index" component={MainCM} />
                    {/*
                    <Route path="/message" component={MessageCM} />
                    
                    <Route path="/repay" component={RepayCM} />
                      */}
                    <Route path="/bi-report" component={BiPortCM}/>
                    <Route path="/case" component={CaseCM} />
                    <Route path="/user" component={UserCM} />
                    <Redirect path="/" exact replace to="/login" />
                </Switch>
            </RouterList>
        </div>
    </HashRouter>
)
export default RouterLists;