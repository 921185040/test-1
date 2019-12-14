/*
 * @Author: your name
 * @Date: 2019-12-12 16:44:25
 * @LastEditTime: 2019-12-13 11:07:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\login\index.js
 */
import React,{Component} from "react"
// import { Form, Icon, Input, Button, Checkbox,Layout} from 'antd';
import LoginForm from './login-form'
class LoginApp extends Component {
    componentWillMount() {
    }
    render() {
        return (   
          <LoginForm store={this.props.store}></LoginForm>
        )
    }
}
export default LoginApp