/*
 * @Author: your name
 * @Date: 2019-12-15 20:10:52
 * @LastEditTime: 2019-12-15 20:37:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\case\table.js
 */
import React from 'react';
import { Table,Button,Spin } from 'antd';
import axios from 'axios';

class TableComponent extends React.Component{
    state={
        loading: true,
        selectedCaseIds:[], // 选中的
        data:[], // 调接口获取
    }
    componentWillMount(){
        console.log('????????????')
        axios.post("/casePage/caseList",).then((res) =>{
            console.log('??????',res)
            res.data.items.forEach((element,index) => {
                res.data.items[index]['key'] = index+'';
              });
              this.setState({data:res.data.items})
              this.setState({loading: false})
        })
    }
    onSelectChange(selectedRowKeys,row){
        var arr = [];
        row.forEach( item => {
            arr.push(item.caseId);
        })
        this.setState({selectedCaseIds: arr });
    }
    render(){
        const rowSelection = {
            onChange: this.onSelectChange,
        };
        const columns =[
            {
                title: '时间',
                dataIndex: 'date',
                key: '1',
                align: 'center'
            },
            {
                title: '收入',
                dataIndex: 'income',
                key: '1',
                align: 'center'
            },
            {
                title: '支出',
                dataIndex: 'outcome',
                key: '1',
                align: 'center'
            },
        ]
        return(
            <div>
                <Spin tip="玩命加载中" spinning={this.state.loading}>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} scroll={{ x: 1000 }} pagination={{pageSize: 10,showTotal:function(total){ return  `共${total}条`}}} />
                </Spin>
            </div>
        )
    }
}
export default TableComponent