import cookie from 'react-cookie'

// 在开发环境下，引入mock
if (process.env.NODE_ENV === 'development') {
    require('../../../mock/todoList')
}

let token = cookie.load('token');

// postApi方法接收两个参数，接口地址及是否需要mock数据，0需要，1不需要
let postApi = (path, mock) => {
    // 当为0的时候， 会返回 /todoList.mock地址，就会被 mock -> todoList.js 中的 假数据命中，ajax会被拦截！使用假数据！
    return path + (mock ? '' : '.mock') + '?token=' + token;
};
export default {
    "newsList": postApi("/api/order/news"),
    "newsList2": postApi("/api/newsList2"),
    "todoList": postApi("/todoList", 0)
}