/*
 * @Author: your name
 * @Date: 2019-12-15 19:19:35
 * @LastEditTime: 2019-12-17 15:08:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\case\index.js
 */
import React from "react";
import { hashHistory } from "react-router";
import axios from "axios";
import { Button, Modal, Form, Input, Radio, Select,Cascader ,message } from "antd";

import TableComponent from './table.js'
import '../../styles/case.css'

const FormItem = Form.Item;
// 单个输入框样式
const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
class MyCaseComponent extends React.Component{
    constructor(props){
        super(props)
    }
    
    render () {
        const { getFieldDecorator} = this.props.form;
        return (
            <>
                <div className="content">
                    <div className='title'>流水账记录</div>
                    <Form>
                        <FormItem label='收入' className="fixed-width" {...formItemLayout}>
                        {
                            getFieldDecorator('income', {})
                            (<Input  placeholder="请输入收入金额" size="default" />)
                        }
                        </FormItem>
                        <FormItem label='支出' className="fixed-width" {...formItemLayout}>
                        {
                            getFieldDecorator('output', {})
                            (<Input  placeholder="请输入支出金额" size="default" />)
                        }
                        </FormItem>
                        <Button type="primary" onClick={this.handleSearch} className="butclass">提交</Button>
                    </Form>
                    <TableComponent />
                </div>
            </>
        )
    }y
}
let CaseComponent = Form.create()(MyCaseComponent)
export default CaseComponent;
