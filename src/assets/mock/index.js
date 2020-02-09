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
            'path': 'rights',
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
Mock.mock(/\/rights/, 'get', {
  'data': [
    {
      'id': 101,
      'authName': '商品管理',
      'level': '0',
      'pid': 0,
      'path': 'goods'
    },
    {
      'id': 102,
      'authName': '商品管理',
      'level': '1',
      'pid': 0,
      'path': 'goods'
    },
    {
      'id': 103,
      'authName': '商品管理',
      'level': '2',
      'pid': 0,
      'path': 'goods'
    },
    {
      'id': 104,
      'authName': '商品管理',
      'level': '0',
      'pid': 0,
      'path': 'goods'
    },
    {
      'id': 105,
      'authName': '商品管理',
      'level': '0',
      'pid': 0,
      'path': 'goods'
    },
    {
      'id': 106,
      'authName': '商品管理',
      'level': '0',
      'pid': 0,
      'path': 'goods'
    },
    {
      'id': 107,
      'authName': '商品管理',
      'level': '0',
      'pid': 0,
      'path': 'goods'
    },
    {
      'id': 108,
      'authName': '商品管理',
      'level': '0',
      'pid': 0,
      'path': 'goods'
    },
    {
      'id': 109,
      'authName': '商品管理',
      'level': '0',
      'pid': 0,
      'path': 'goods'
    },
    {
      'id': 110,
      'authName': '商品管理',
      'level': '0',
      'pid': 0,
      'path': 'goods'
    },
    {
      'id': 111,
      'authName': '商品管理',
      'level': '0',
      'pid': 0,
      'path': 'goods'
    }
  ],
  'meta': {
    'msg': '获取权限列表成功',
    'status': 200
  }
})
Mock.mock(/\/roles/, 'get', {
  'data': [
    {
      'id': 30,
      'roleName': '主管',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 104,
              'authName': '商品列表',
              'path': 'goods',
              'children': [{
                'id': 116,
                'authName': '商品修改',
                'path': 'goods'
              }]
            },
            {
              'id': 115,
              'authName': '分类参数',
              'path': 'params',
              'children': [
                {
                  'id': 142,
                  'authName': '获取参数列表',
                  'path': 'categories'
                },
                {
                  'id': 143,
                  'authName': '创建商品参数',
                  'path': 'categories'
                },
                {
                  'id': 144,
                  'authName': '删除商品参数',
                  'path': 'categories'
                }
              ]
            },
            {
              'id': 121,
              'authName': '商品分类',
              'path': 'categories',
              'children': [
                {
                  'id': 122,
                  'authName': '添加分类',
                  'path': 'categories'
                },
                {
                  'id': 123,
                  'authName': '删除分类',
                  'path': 'categories'
                },
                {
                  'id': 149,
                  'authName': '获取分类详情',
                  'path': 'categories'
                }
              ]
            }
          ]
        },
        {

          'id': 102,
          'authName': '订单管理',
          'path': 'orders',
          'children': [
            {

              'id': 107,
              'authName': '订单列表',
              'path': 'orders',
              'children': [
                {

                  'id': 109,
                  'authName': '添加订单',
                  'path': 'orders'
                }
              ]
            }
          ]
        },
        {
          'id': 103,
          'authName': '权限管理',
          'path': 'rights',
          'children': [
            {
              'id': 111,
              'authName': '角色列表',
              'path': 'roles',
              'children': [
                {
                  'id': 129,
                  'authName': '添加角色',
                  'path': 'roles'
                },
                {
                  'id': 130,
                  'authName': '删除角色',
                  'path': 'roles'
                },
                {
                  'id': 134,
                  'authName': '角色授权',
                  'path': 'roles'
                },
                {
                  'id': 135,
                  'authName': '取消角色授权',
                  'path': 'roles'
                },
                {
                  'id': 138,
                  'authName': '获取角色列表',
                  'path': 'roles'
                },
                {
                  'id': 139,
                  'authName': '获取角色详情',
                  'path': 'roles'
                },
                {
                  'id': 140,
                  'authName': '更新角色信息',
                  'path': 'roles'
                },
                {
                  'id': 141,
                  'authName': '更新角色权限',
                  'path': 'roles'
                }
              ]
            },
            {
              'id': 112,
              'authName': '权限列表',
              'path': 'rights',
              'children': [
                {
                  'id': 147,
                  'authName': '查看权限',
                  'path': 'rights'
                }
              ]
            }
          ]
        },
        {
          'id': 125,
          'authName': '用户管理',
          'path': 'users',
          'children': [
            {
              'id': 110,
              'authName': '用户列表',
              'path': 'users',
              'children': [
                {
                  'id': 131,
                  'authName': '添加用户',
                  'path': 'users'
                },
                {
                  'id': 132,
                  'authName': '删除用户',
                  'path': 'users'
                },
                {
                  'id': 133,
                  'authName': '更新用户',
                  'path': 'users'
                },
                {
                  'id': 136,
                  'authName': '获取用户详情',
                  'path': 'users'
                },
                {
                  'id': 137,
                  'authName': '分配用户角色',
                  'path': 'users'
                }
              ]
            }
          ]
        },
        {
          'id': 145,
          'authName': '数据统计',
          'path': 'reports',
          'children': [
            {

              'id': 146,
              'authName': '数据报表',
              'path': 'reports',
              'children': [
                {

                  'id': 148,
                  'authName': '查看数据',
                  'path': 'reports'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'id': 31,
      'roleName': '打杂',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 32,
      'roleName': '经理',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 33,
      'roleName': '董事长',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 34,
      'roleName': '技术人员',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 35,
      'roleName': '负责人',
      'roleDesc': '技术负责人',
      'childern': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 36,
      'roleName': '后勤',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 37,
      'roleName': '保洁',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 38,
      'roleName': '项目负责人',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 39,
      'roleName': 'UI',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    }
  ],
  'meta': {
    'msg': '添加用户列表成功',
    'status': 200
  }
})
Mock.mock(/\/roles/, 'delete', {
  'data': [
    {
      'id': 30,
      'roleName': '主管',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 104,
              'authName': '商品列表',
              'path': 'goods',
              'children': [{
                'id': 116,
                'authName': '商品修改',
                'path': 'goods'
              }]
            },
            {
              'id': 115,
              'authName': '分类参数',
              'path': 'params',
              'children': [
                {
                  'id': 142,
                  'authName': '获取参数列表',
                  'path': 'categories'
                },
                {
                  'id': 143,
                  'authName': '创建商品参数',
                  'path': 'categories'
                },
                {
                  'id': 144,
                  'authName': '删除商品参数',
                  'path': 'categories'
                }
              ]
            },
            {
              'id': 121,
              'authName': '商品分类',
              'path': 'categories',
              'children': [
                {
                  'id': 122,
                  'authName': '添加分类',
                  'path': 'categories'
                },
                {
                  'id': 123,
                  'authName': '删除分类',
                  'path': 'categories'
                },
                {
                  'id': 149,
                  'authName': '获取分类详情',
                  'path': 'categories'
                }
              ]
            }
          ]
        },
        {

          'id': 102,
          'authName': '订单管理',
          'path': 'orders',
          'children': [
            {

              'id': 107,
              'authName': '订单列表',
              'path': 'orders',
              'children': [
                {

                  'id': 109,
                  'authName': '添加订单',
                  'path': 'orders'
                }
              ]
            }
          ]
        },
        {
          'id': 103,
          'authName': '权限管理',
          'path': 'rights',
          'children': [
            {
              'id': 111,
              'authName': '角色列表',
              'path': 'roles',
              'children': [
                {
                  'id': 129,
                  'authName': '添加角色',
                  'path': 'roles'
                },
                {
                  'id': 130,
                  'authName': '删除角色',
                  'path': 'roles'
                },
                {
                  'id': 134,
                  'authName': '角色授权',
                  'path': 'roles'
                },
                {
                  'id': 135,
                  'authName': '取消角色授权',
                  'path': 'roles'
                },
                {
                  'id': 138,
                  'authName': '获取角色列表',
                  'path': 'roles'
                },
                {
                  'id': 139,
                  'authName': '获取角色详情',
                  'path': 'roles'
                },
                {
                  'id': 140,
                  'authName': '更新角色信息',
                  'path': 'roles'
                },
                {
                  'id': 141,
                  'authName': '更新角色权限',
                  'path': 'roles'
                }
              ]
            },
            {
              'id': 112,
              'authName': '权限列表',
              'path': 'rights',
              'children': [
                {
                  'id': 147,
                  'authName': '查看权限',
                  'path': 'rights'
                }
              ]
            }
          ]
        },
        {
          'id': 125,
          'authName': '用户管理',
          'path': 'users',
          'children': [
            {
              'id': 110,
              'authName': '用户列表',
              'path': 'users',
              'children': [
                {
                  'id': 131,
                  'authName': '添加用户',
                  'path': 'users'
                },
                {
                  'id': 132,
                  'authName': '删除用户',
                  'path': 'users'
                },
                {
                  'id': 133,
                  'authName': '更新用户',
                  'path': 'users'
                },
                {
                  'id': 136,
                  'authName': '获取用户详情',
                  'path': 'users'
                },
                {
                  'id': 137,
                  'authName': '分配用户角色',
                  'path': 'users'
                }
              ]
            }
          ]
        },
        {
          'id': 145,
          'authName': '数据统计',
          'path': 'reports',
          'children': [
            {

              'id': 146,
              'authName': '数据报表',
              'path': 'reports',
              'children': [
                {

                  'id': 148,
                  'authName': '查看数据',
                  'path': 'reports'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'id': 30,
      'roleName': '主管',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 30,
      'roleName': '主管',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 30,
      'roleName': '主管',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 30,
      'roleName': '主管',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 30,
      'roleName': '主管',
      'roleDesc': '技术负责人',
      'childern': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 30,
      'roleName': '主管',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 30,
      'roleName': '主管',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 30,
      'roleName': '主管',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    },
    {
      'id': 30,
      'roleName': '主管',
      'roleDesc': '技术负责人',
      'children': [
        {
          'id': 101,
          'authName': '商品管理',
          'path': 'goods',
          'children': [
            {
              'id': 105,
              'authName': '添加商品',
              'path': null
            }
          ]
        }
      ]
    }
  ],
  'meta': {
    'msg': '添加用户列表成功',
    'status': 200
  }
})
Mock.mock(/\/Right/, 'get', {

  'data': [{
    'id': 101,
    'authName': '商品管理',
    'path': 'goods',
    'children': [
      {
        'id': 104,
        'authName': '商品列表',
        'path': 'goods',
        'children': [{
          'id': 116,
          'authName': '商品修改',
          'path': 'goods'
        }]
      },
      {
        'id': 115,
        'authName': '分类参数',
        'path': 'params',
        'children': [
          {
            'id': 142,
            'authName': '获取参数列表',
            'path': 'categories'
          },
          {
            'id': 143,
            'authName': '创建商品参数',
            'path': 'categories'
          },
          {
            'id': 144,
            'authName': '删除商品参数',
            'path': 'categories'
          }
        ]
      },
      {
        'id': 121,
        'authName': '商品分类',
        'path': 'categories',
        'children': [
          {
            'id': 122,
            'authName': '添加分类',
            'path': 'categories'
          },
          {
            'id': 123,
            'authName': '删除分类',
            'path': 'categories'
          },
          {
            'id': 149,
            'authName': '获取分类详情',
            'path': 'categories'
          }
        ]
      }
    ]
  },
  {

    'id': 102,
    'authName': '订单管理',
    'path': 'orders',
    'children': [
      {

        'id': 107,
        'authName': '订单列表',
        'path': 'orders',
        'children': [
          {

            'id': 109,
            'authName': '添加订单',
            'path': 'orders'
          }
        ]
      }
    ]
  },
  {
    'id': 103,
    'authName': '权限管理',
    'path': 'rights',
    'children': [
      {
        'id': 111,
        'authName': '角色列表',
        'path': 'roles',
        'children': [
          {
            'id': 129,
            'authName': '添加角色',
            'path': 'roles'
          },
          {
            'id': 130,
            'authName': '删除角色',
            'path': 'roles'
          },
          {
            'id': 134,
            'authName': '角色授权',
            'path': 'roles'
          },
          {
            'id': 135,
            'authName': '取消角色授权',
            'path': 'roles'
          },
          {
            'id': 138,
            'authName': '获取角色列表',
            'path': 'roles'
          },
          {
            'id': 139,
            'authName': '获取角色详情',
            'path': 'roles'
          },
          {
            'id': 140,
            'authName': '更新角色信息',
            'path': 'roles'
          },
          {
            'id': 141,
            'authName': '更新角色权限',
            'path': 'roles'
          }
        ]
      },
      {
        'id': 112,
        'authName': '权限列表',
        'path': 'rights',
        'children': [
          {
            'id': 147,
            'authName': '查看权限',
            'path': 'rights'
          }
        ]
      }
    ]
  },
  {
    'id': 125,
    'authName': '用户管理',
    'path': 'users',
    'children': [
      {
        'id': 110,
        'authName': '用户列表',
        'path': 'users',
        'children': [
          {
            'id': 131,
            'authName': '添加用户',
            'path': 'users'
          },
          {
            'id': 132,
            'authName': '删除用户',
            'path': 'users'
          },
          {
            'id': 133,
            'authName': '更新用户',
            'path': 'users'
          },
          {
            'id': 136,
            'authName': '获取用户详情',
            'path': 'users'
          },
          {
            'id': 137,
            'authName': '分配用户角色',
            'path': 'users'
          }
        ]
      }
    ]
  },
  {
    'id': 145,
    'authName': '数据统计',
    'path': 'reports',
    'children': [
      {

        'id': 146,
        'authName': '数据报表',
        'path': 'reports',
        'children': [
          {

            'id': 148,
            'authName': '查看数据',
            'path': 'reports'
          }
        ]
      }
    ]
  }],
  'meta': {
    'msg': '添加用户列表成功',
    'status': 200
  }
})
Mock.mock(/\/roles/, 'post', {
  data: [],
  'meta': {
    'msg': '更新成功',
    'status': 200
  }
})
