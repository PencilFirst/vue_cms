<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img
          src="../assets/logo.png"
          alt="avatar"
        />
      </div>
      <div class="login_form">
        <el-form
          :model='loginForm'
          :rules='loginFormRules'
          ref="loginForm"
        >
          <!-- user name -->
          <el-form-item prop='username'>
            <el-input
              prefix-icon="fa fa-user-o"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <!-- user password -->
          <el-form-item prop='password'>
            <el-input
              prefix-icon="fa fa-lock"
              v-model="loginForm.password"
              type='password'
            ></el-input>
          </el-form-item>
          <!-- login -->
          <el-form-item class="btn">
            <el-button
              type="primary"
              @click="login"
            >登录</el-button>
            <el-button
              type="info"
              @click='resetForm'
            >重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '用户名长度在3到10个字符之间',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '用户密码长度在6到15个字符之间',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    resetForm () {
      this.$refs.loginForm.resetFields()
    },
    login () {
      this.$refs.loginForm.validate(async valid => {
        if (!valid) { return }
        const { data: res } = await this.$http.post('/login', this.loginForm)
        // console.log(res.token)
        // if (res.meta.status !== 200) return console.log('登錄失敗')
        // console.log('登錄成功')
        if (res.success === true) {
          window.sessionStorage.setItem('token', res.token)
          this.$router.push('/home')
          return this.$message.success('登錄成功')
        } else {
          return this.$message.error('登錄失敗')
        }
        // console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #dddddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btn {
  display: flex;
  justify-content: flex-end;
}
</style>
