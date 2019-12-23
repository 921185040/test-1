/*
 * @Author: your name
 * @Date: 2019-12-12 16:44:25
 * @LastEditTime: 2019-12-17 15:10:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\login\index.js
 */
import React from 'react';
import axios from "axios"
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
// import PropTypes from "proptypes"
import '../../styles/login.css';
import { Form, Icon, Input, Button, message } from 'antd';
import 'antd/dist/antd.css';
import store from '../../redux/store'
require('../../mock/mock')
// import { message,Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;
class myLoginForm extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(){
    super();
}
  handleSubmit (e) {
    e.preventDefault();
    let data = this.props.form.getFieldsValue();
    axios.post("/users",data).then((res) =>{
      let resMsg = res.data;
      if(data.name === "liudongzhi" && data.password==="liudongzhi"){
          localStorage.setItem('username',data.name)
          // store.dispatch({type:'login',username:data.name})
          // history.push('index');
          store.dispatch({type:'login',username:data.name})
          this.props.history.push("/index");
      }else{
          message.error('用户或密码不正确')
      }
  })
    
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className="login-wrap">
        <Form onSubmit={(e)=>this.handleSubmit(e)} className="loginForm">
          <h5>登录</h5>
          <FormItem style={{marginTop:'20px',paddingLeft:'20px',paddingRight:'20px'}}>
            {
              getFieldDecorator(
                'name',{
                  rules:[{required: true, message:'用户名不能为空'}],
                  initialValue: 'liudongzhi'
                }
              )(
                <Input size='large' prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.5)' }}/>} placeholder='请输入用户名'  />
                )
            }
          </FormItem>
          <FormItem style={{paddingLeft:'20px',paddingRight:'20px'}}>
            {
                getFieldDecorator(
                    "password",{
                        rules:[{required: true, message:"密码不能为空！",trigger:'blur'}],
                        initialValue: 'liudongzhi'
                    }
                )(
                    <Input size="large"  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.5)' }} />} type="password" placeholder="请输入密码" />
                )
            }
        </FormItem>
        <FormItem>
            <Button size="large"  type="primary" htmlType="submit" className="login-form-button" >
                登陆
            </Button>
        </FormItem>
        </Form>
      </div>
    );
  }
  
}
// loginForm.contextTypes = {
//     router: PropTypes.object.isRequired
// };
let loginForm = Form.create()(myLoginForm)
export default withRouter(loginForm)


