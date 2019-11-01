import axios from 'axios'

// 请求地址
axios.defaults.baseURL = '';

// 超时时间
axios.defaults.timeout = 2500;
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;

}, function (error) {
  // 根据http错误码 显示不同的信息
  // if (error && error.response) {
  //   switch (error.response.status) {
  //     case 400:
  //       error.message = '请求错误'
  //       break
  //     case 401:
  //       error.message = '未授权，请登录'
  //       break
  //     case 403:
  //       error.message = '拒绝访问'
  //       break
  //     case 404:
  //       error.message = `请求地址出错: ${error.response.config.url}`
  //       break
  //     case 408:
  //       error.message = '请求超时'
  //       break
  //     case 500:
  //       error.message = '服务器内部错误'
  //       break
  //     case 501:
  //       error.message = '服务未实现'
  //       break
  //     case 502:
  //       error.message = '网关错误'
  //       break
  //     case 503:
  //       error.message = '服务不可用'
  //       break
  //     case 504:
  //       error.message = '网关超时'
  //       break
  //     case 505:
  //       error.message = 'HTTP版本不受支持'
  //       break
  //     default:
  //   }
  // }
  // console.error(error)
  // 对响应错误做点什么
  return Promise.reject(error);
});

export const  get = (url,params)=>{
  return new Promise((resolve,reject)=>{
    axios.get({
      // `method` 是创建请求时使用的方法
      method: 'get', // default,
      // `url` 是用于请求的服务器 URL
      url,
      params
    }).then(res => {
      resolve(res)
    }).catch(res=>{
      reject(res)
    })
  })
}

export const  post = (url,params)=>{
  return new Promise((resolve,reject)=>{
    axios.post({
      // `method` 是创建请求时使用的方法
      method: 'post', // default,
      // `url` 是用于请求的服务器 URL
      url,
      params
    }).then(res => {
      resolve(res)
    }).catch(res=>{
      reject(res)
    })
  })
}