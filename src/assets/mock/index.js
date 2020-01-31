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
Mock.mock('/menus', 'get', {
  'data':
    [
      {
        'id': 101,
        'authName': '用户管理',
        'path': null,
        'children': [
          {
            'id': 104,
            'authName': '用户列表',
            'path': 'users',
            'childern': []
          }
        ]
      },
      {
        'id': 102,
        'authName': '权限管理',
        'path': 'rights',
        'children': [
          {
            'id': 105,
            'authName': '角色列表',
            'path': 'roles',
            'childern': []
          },
          {
            'id': 106,
            'authName': '权限列表',
            'path': null,
            'childern': []
          }
        ]
      },
      {
        'id': 107,
        'authName': '商品管理',
        'path': null,
        'children': [
          {
            'id': 108,
            'authName': '商品列表',
            'path': null,
            'childern': []
          },
          {
            'id': 109,
            'authName': '分类参数',
            'path': null,
            'childern': []
          },
          {
            'id': 110,
            'authName': '商品分类',
            'path': null,
            'childern': []
          }
        ]
      },
      {
        'id': 111,
        'authName': '订单管理',
        'path': null,
        'children': [
          {
            'id': 112,
            'authName': '订单列表',
            'path': null,
            'childern': []
          }
        ]
      },
      {
        'id': 113,
        'authName': '数据统计',
        'path': null,
        'children': [
          {
            'id': 114,
            'authName': '数据报表',
            'path': null,
            'childern': []
          }
        ]
      }
    ],
  'meta': {
    'msg': '获取菜单列表成功',
    'status': 200
  }
})
Mock.mock(/\/users/, 'get', function (options) {
  const data = {
    'data': {
      'pagenum': 1,
      'total': 4,

      'users': [
        { 'id': 500, 'role_name': '超级管理员', 'username': 'admin', 'create_time': '2017-11-09T20:36:26.00Z', 'mobile': '18616358651', 'type': 1, 'email': 'admin@163.com', 'mg_state': true },
        { 'id': 501, 'role_name': '测试用户', 'username': 'john', 'create_time': '2017-11-09T20:36:26.00Z', 'mobile': '18616358651', 'type': 2, 'email': 'john@163.com', 'mg_state': false }
      ]
    },
    'meta': {
      'msg': '获取用户列表成功',
      'status': 200
    }

  }
  console.log(options)
  return data
})
Mock.mock(/\/users/, 'put', {
  'data': {
    'users': [
      { 'id': 500, 'role_name': '超级管理员', 'username': 'admin', 'create_time': '2017-11-09T20:36:26.00Z', 'mobile': '18616358651', 'type': 1, 'email': 'admin@163.com', 'mg_state': true },
      { 'id': 501, 'role_name': '测试用户', 'username': 'john', 'create_time': '2017-11-09T20:36:26.00Z', 'mobile': '18616358651', 'type': 2, 'email': 'john@163.com', 'mg_state': false }
    ]
  },
  'meta': {
    'msg': '更新用户列表成功',
    'status': 200
  }
})
Mock.mock(/\/user/, 'post', {
  'data': {
    'users': [
      { 'id': 500, 'role_name': '超级管理员', 'username': 'admin', 'create_time': '2017-11-09T20:36:26.00Z', 'mobile': '18616358651', 'type': 1, 'email': 'admin@163.com', 'mg_state': true },
      { 'id': 501, 'role_name': '测试用户', 'username': 'john', 'create_time': '2017-11-09T20:36:26.00Z', 'mobile': '18616358651', 'type': 2, 'email': 'john@163.com', 'mg_state': false }
    ]
  },
  'meta': {
    'msg': '添加用户列表成功',
    'status': 201
  }
})
Mock.mock(/\/user/, 'put', {
  'data': {
    'id': 500, 'role_name': '超级管理员', 'username': 'admin', 'create_time': '2017-11-09T20:36:26.00Z', 'mobile': '18616358651', 'type': 1, 'email': 'admin@163.com', 'mg_state': true

  },
  'meta': {
    'msg': '更新用户列表成功',
    'status': 200
  }
})
Mock.mock(/\/user/, 'delete', {
  'data': {
    'users': [
      { 'id': 500, 'role_name': '超级管理员', 'username': 'admin', 'create_time': '2017-11-09T20:36:26.00Z', 'mobile': '18616358651', 'type': 1, 'email': 'admin@163.com', 'mg_state': true },
      { 'id': 501, 'role_name': '测试用户', 'username': 'john', 'create_time': '2017-11-09T20:36:26.00Z', 'mobile': '18616358651', 'type': 2, 'email': 'john@163.com', 'mg_state': false }
    ]
  },
  'meta': {
    'msg': '添加用户列表成功',
    'status': 200
  }
})
