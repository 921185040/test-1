/*
 * @Author: your name
 * @Date: 2019-12-15 17:53:35
 * @LastEditTime: 2019-12-16 10:15:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\mock\mock.js
 */
import Mock from 'mockjs';
Mock.mock('/users',{
    'name':'liudongzhi',
    'password':'liudongzhi',
})
Mock.mock('/homePage/getBaseData',
{
    "yearData":
         {"time":"2018年总览（截至本月）","income":"243400","expenditure":"123322","managemoney":'100000'},
    "monthData":
       [
         {"time":"上个月","income":"9780","expenditure":"5434"},
         {"time":"本月","income":"9888","expenditure":"5344"}
       ],
    "quarterData": 
       [
         {"time":"本季度","commitMoney":"152.81","repayMoney":"213.18","commitCaseCount":42,"repayCaseCount":20,},
         {"time":"上季度","commitMoney":"2181.50","repayMoney":"52.04","commitCaseCount":242,"repayCaseCount":76,}
       ]
    }
)
Mock.mock('/casePage/caseList',
  {
    "currentPage": 1,
    "pageSize": 15,
    "totalNum": 72,
    "isMore": 1, 
    "totalPage": 5,
    "startIndex": 0, 
    "items":[
      {
        'caseId':1,
        'date':'2019-11-1',
        'income':'222',
        'outcome':'211'
      },
      {
        'caseId':1,
        'date':'2019-11-2',
        'income':'212',
        'outcome':'11'
      },
      {
        'caseId':1,
        'date':'2019-11-3',
        'income':'122',
        'outcome':'221'
      },
      {
        'caseId':1,
        'date':'2019-11-4',
        'income':'332',
        'outcome':'21'
      }
    ]
  }
)
Mock.mock('/caseManage/getAnalysisData',{
  'data':[
    {'month':'12月','income':'7909','outcome':'5464'},
    {'month':'10月','income':'7888','outcome':'3564'},
    {'month':'9月','income':'8988','outcome':'4355'},
    {'month':'8月','income':'8907','outcome':'3255'},
    {'month':'7月','income':'17400','outcome':'3456'},
    {'month':'6月','income':'4453','outcome':'5342'},
    {'month':'5月','income':'10240','outcome':'4535'},
    {'month':'4月','income':'8867','outcome':'2345'},
    {'month':'3月','income':'7888','outcome':'1456'},
    {'month':'2月','income':'9777','outcome':'1222'},
    {'month':'1月','income':'8344','outcome':'2333'},
  ]
})
export default Mock;