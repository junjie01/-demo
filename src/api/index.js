// 封装的是具体的接口请求方法
//  注意：每个方法只负责请求一个url地址
import request from '@/utils/request'// 引入自定义axios函数
// //registerAPI(this.form)
// //registerAPI({
//   username:'',
//   password:'',
//   repassword:''
// // })
/*
形参obj的值
obj={username：'',password:'',repassword:''}
左侧想要对象解构赋值（语法如下）
{username:username变量名,password:password变量名,repassword:repassword变量名}={
  username:'',password:'',repassword:''
}
函数形参的obj就改成对象解构接收传入的数据对象
{username:username,password:password,repassword:repassword}
key是传入的对象key匹配，value是变量名，用于接收外面传入的值
es6规定，key和value变量同名时，可以简写（key即为key也是value变量名）
*/

//  导出接口方法，为了在逻辑页面引入后调入
export const registerAPI = ({ username, password, repassword }) => {
  // 这里先用这个接口测试下, 如果url以http开头会忽略baseURL, axios直接请求此地址
  //  原地是一个Promise对象（内部包含原生ajax请求）
  //  return这个promise对象到逻辑页面，去那里对Promise对象提取结果
  return request({
    url: '/api/reg',
    method: 'post',
    // axiso传参params，data
    // params的对象参数名和值，axios源码会把参数和值拼接在url？后面给后台（query查询字符串）
    // data的对象参数名和值，axios源码会把参数和值，拼接在请求体里面（body）参数
    data: {
      username,
      password,
      repassword
    }
  })
}
/*
登录接口
@param{*}param0 {username：用户名，password：密码}
@returns Promise对象
*/
export const loginAPI = ({ username, password }) => {
  return request({
    url: '/api/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
