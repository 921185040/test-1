/*
 * @Author: your name
 * @Date: 2019-12-12 16:44:25
 * @LastEditTime: 2019-12-13 15:24:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\login\index.js
 */
import React from 'react';
// import PropTypes from "proptypes"
import '../../styles/login.css';
import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';
// import { message,Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;
class myLoginForm extends React.Component {
  handleSubmit (e) {
    e.preventDefault();
    console.log('提交', e);
    let data = this.props.form.getFieldsValue();
    // let history = this.context.router.history;
    console.log('data',data);
    
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
export default loginForm


