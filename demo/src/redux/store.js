/*
 * @Author: your name
 * @Date: 2019-12-13 14:49:53
 * @LastEditTime: 2019-12-13 14:53:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\redux\store.js
 */
import {createStore} from 'redux';
import actions from './action'

const reducer =(state={username:''},action) => {
    switch(action.type) {
        case 'login' : return {username:action.username};
        case 'logout' : return {username:''};
        default: return {username:''}

    }
};

const store = createStore(reducer);
export default store;