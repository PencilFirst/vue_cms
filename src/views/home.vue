<template>
  <el-container class="home_container">
    <!--头部区域 -->
    <el-header>
      <div>
        <img
          src="../assets/logo.png"
          alt=""
        />
        <span>CMS后台管理系统</span>
      </div>
      <el-button
        type="info"
        @click="logout"
      >退出登入</el-button>
    </el-header>
    <el-container>
      <!--右侧导航 -->
      <el-aside :width="isCollapse ? '64px':'200px'">
        <div
          class="toggle"
          @click="toggleCollapse"
        >|||</div>
        <!-- 右側導航内容 -->
        <el-menu
          background-color="#0e4749"
          text-color="#fff"
          active-text-color="#A0B237"
          unique-opened
          :collapse='isCollapse'
          :collapse-transition="false"
          router
          :default-active='activePath'
        >
          <!-- 一级导航 -->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menuList"
            :key="item.id"
          >
            <template slot="title">
              <i :class="icons[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级导航 -->
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState('/' + subItem.path)"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!--内容区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      menuList: [],
      icons: {
        '101': 'fa fa-users',
        '102': 'fa fa-cube',
        '107': 'fa fa-shopping-bag',
        '111': 'fa fa-book',
        '113': 'fa fa-desktop'
      },
      isCollapse: false,
      activePath: ''
    }
  },
  created () {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async getMenuList () {
      const { data: res } = await this.$http.get('/menus')
      if (res.meta.status === !200) return this.$message.error(res.meta.msg)
      this.menuList = res.data
      console.log(res)
    },
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style lang="scss" scoped>
.home_container {
  height: 100%;
  width: 100%;
  .el-header {
    background-color: #002626;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    font-size: 20px;
    color: #e8e8e8;
    > div {
      display: flex;
      align-items: center;
      img {
        height: 50px;
      }
      span {
        margin-left: 15px;
      }
    }
  }
  .el-aside {
    background-color: #0e4749;
    .el-menu {
      border-right: none;
      .fa {
        margin-right: 10px;
      }
    }
    .toggle {
      background-color: #0ba8ad;
      font-size: 10px;
      line-height: 24px;
      color: #e8e8e8;
      text-align: center;
      letter-spacing: 0.2em;
      cursor: pointer;
    }
  }
  .el-main {
    background-color: #e8e8e8;
  }
}
</style>
