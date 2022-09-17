// 封装的是具体的接口请求方法
//  注意：每个方法只负责请求一个url地址
import request from '@/utils/request'// 引入自定义axios函数
//  导出接口方法，为了在逻辑页面引入后调入
export const registerAPI = () => {
  // 这里先用这个接口测试下, 如果url以http开头会忽略baseURL, axios直接请求此地址
  //  原地是一个Promise对象（内部包含原生ajax请求）
  //  return这个promise对象到逻辑页面，去那里对Promise对象提取结果
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username: 'mmss11',
      password: 'dog111',
      repassword: 'dog111'
    }
  })
}
