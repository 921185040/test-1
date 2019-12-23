/*
 * @Author: your name
 * @Date: 2019-12-13 14:50:26
 * @LastEditTime: 2019-12-17 15:14:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\redux\action.js
 */
const login = (username) => {
    return {
        type: 'login',
        username: username
    }
}
const logout = () => {
    return {
        type: 'logout',
        username: ''
    }
}
