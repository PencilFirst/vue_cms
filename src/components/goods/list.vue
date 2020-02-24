<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter='20'>
        <el-col :span='8'>
          <el-input
            placeholder="请输入内容"
            v-model="queryInfo.query"
            clearable
            @clear='getGoodsList'
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getGoodsList"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span='4'>
          <el-button
            type="primary"
            @click="goAddPage"
          >添加商品</el-button>
        </el-col>
      </el-row>
      <el-table
        :data='goodsList'
        border
        stripe
      >
        <el-table-column type='index'></el-table-column>
        <el-table-column
          label='商品名称'
          prop='goods_name'
        ></el-table-column>
        <el-table-column
          label='商品价格(元)'
          prop='goods_price'
          width="95px"
        ></el-table-column>
        <el-table-column
          label='商品重量(KG)'
          prop='goods_weight'
          width="100px"
        ></el-table-column>
        <el-table-column
          label='创建时间'
          prop='add_time'
          width="180px"
        ></el-table-column>
        <el-table-column
          label='操作'
          width="140px"
        >
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size='mini'
              @click="eidtDialogVisable(scope.row.id)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size='mini'
              @click="removeById(scope.row.goods_id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 5, 10, 30]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      goodsList: [],
      total: 0
    }
  },
  created () {
    this.getGoodsList()
  },
  methods: {
    async getGoodsList () {
      const { data: res } = await this.$http.get('/goodslist')
      if (res.meta.status !== 200) {
        return this.$message.error('获取商品列表失败')
      }
      this.goodsList = res.data.goods
      console.log(this.goodsList)
    },
    handleSizeChange (newSize) {
      this.queryInfo.pagesize = newSize
      this.getGoodsList()
    },
    handleCurrentChange (newPage) {
      this.queryInfo.pagenum = newPage
      this.getGoodsList()
    },
    async removeById () {
      const confirmResult = await this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(error => error)
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      // 发请求
      this.$message.success('删除商品记录成功')
      this.getGoodsList()
    },
    goAddPage () {
      this.$router.push('/goods/add')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
