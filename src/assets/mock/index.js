import Mock from 'mockjs'
// import {
//   toObj
// } from '../utils/utils'

Mock.mock('/login', options => {
  let args = JSON.parse(options.body)
  if (args.username === 'admin' && args.password === '123456') {
    return {
      token: 'admin',
      success: true
    }
  } else {
    return {
      success: false
    }
  }
  // console.log(JSON.stringify(args))
})
