import request from './request'

// 注册接口
export const RegisterApi = params => request.post('/register', params)
