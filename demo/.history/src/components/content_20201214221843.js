/*
 * @Author: your name
 * @Date: 2019-12-13 16:11:44
 * @LastEditTime: 2020-12-14 22:18:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\content.js
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Button, Switch } from "antd";


class ContentComponent extends Component {
    state = {
        theme:'dark',
        current:'1'
    }

    render () {
        return (
            <aside className="aside-wrap">
                <div style={{ width: 200 }}>
                    <div>
                        <Menu
                        onClick={this.handleClick}
                        style={{ width: 200 }}
                        defaultSelectedKeys={["1"]}
                        defaultOpenKeys={["1"]}
                        theme={'dark'}
                        mode="inline"
                        >
                        <Menu.Item key="1">
                            <Link to="/index" replace>
                            <Icon type="home" />首页（mock数据）
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/case" replace>
                            <Icon type="mail" />账本（组件使用练习）
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/bi-report" replace>
                            <Icon type="bar-chart" />收支报表（echarts练习）
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/counter" replace>
                            <Icon type="bar-chart" />animate实例
                            </Link>
                        </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </aside>
        )
    }
}
export default ContentComponent;